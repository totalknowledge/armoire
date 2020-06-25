"use strict";

class _json_adapter {
    constructor(options) {
        this.options = options;
        this.collections = [];
    }
    async connect(){
        const fs = require('fs');
        if (!fs.existsSync(this.options.base)) {
            await fs.promises.mkdir(this.options.base, { recursive: true })
        }
        this.collections = fs.readdirSync(this.options.base)
                           .filter(f=>f.match(/\.(json)+$/))
                           .map(f=>f.replace(/\.[^/.]+$/, ""));
        this.connected = true;
    }
    async __update_last_read(collection) {
        const fs = require('fs');
        if(fs.existsSync(`${this.options.base}\\${collection}.json`)) {
            let rawdata = await fs.readFileSync(`${this.options.base}\\${collection}.json`);
            let result = JSON.parse(rawdata);
            result.meta = result.meta || {};
            result.meta.lastread = new Date();
            let savedata = JSON.stringify(result);
            fs.writeFileSync(`${this.options.base}\\${collection}.json`, savedata, {flag:"w"}, (err) => {
                if (err) {
                    console.log(err);
                }
            });
        }
    }
    async fetchRecord(collection, query, fields){
        const fs = require('fs');
        let queryfields = Object.keys(query);
        let querystring = "true";
        queryfields.forEach(
            k => querystring += (` && r.${k}==query.${k}`)
        );
        let rawdata;
        try {
            rawdata = fs.readFileSync(`${this.options.base}\\${collection}.json`);
        } catch {
            rawdata = '{"data":[]}';
        }
        let result = JSON.parse(rawdata) || {data:{}};
        let records = result.data.filter(r=>eval(querystring));
        this.__update_last_read(collection);
        return records[0] || {};
    }
    async fetchRecords(collection, fields){
        const fs = require('fs');
        let rawdata;
        try {
            rawdata = fs.readFileSync(`${this.options.base}\\${collection}.json`);
        } catch {
            rawdata = '{"data":[]}';
        }
        let result = JSON.parse(rawdata) || {data:{}};
        this.__update_last_read(collection);
        return result.data;
    }
    async createRecord(collection, record) {
        const fs = require('fs');
        let result;
        try {
            let rawdata = await fs.readFileSync(`${this.options.base}\\${collection}.json`);
            result = JSON.parse(rawdata);
        } catch {
            result = {schema:{autoincrement: true, nextvalue: 1}, data:[]};
        }
        if (result.schema.autoincrement) {
            record.id = result.schema.nextvalue;
            result.schema.nextvalue += 1;
        } else {
            record.id = 1;
            result.schema.nextvalue = 2;
        }
        result.data.push(record);
        result.meta.lastwrite = new Date();
        result.meta.recordcount = result.data.length;
        let savedata = JSON.stringify(result);
        fs.writeFileSync(`${this.options.base}\\${collection}.json`, savedata, {flag:"w"}, (err) => {
            if (err) {
                throw err;
            }
        });
        return record;
    }
    async createRecords(collection, records) {
        for (const record of records){
            await this.createRecord(collection, record)
        }
        return await this.fetchRecords(collection);
    }
    async fetchMeta(collection){
        const fs = require('fs');
        let rawdata;
        try {
            rawdata = fs.readFileSync(`${this.options.base}\\${collection}.json`);
        } catch {
            rawdata = `{"schema":{
                            "autoincrement":true,
                            "autoincrementfield":"id",
                            "nextvalue":1
                         },
                         "meta":{
                            "recordcount":0,
                            "lastwrite":null,
                            "lastread":null
                         }
                       }`;
        }
        let result = JSON.parse(rawdata);
        return result.meta;
    }
}

exports.new = function(options) {
    let adapter = new _json_adapter(options);
    adapter.connect();
    return adapter;
}
