"use strict";

const adapter = require("./adapters/adapters");

exports.saveCollectionRecord = function () {
    var promise = new Promise(function(resolve, reject) {
        // do a thing, possibly async, then…
        
        if (true) {
            resolve("Stuff worked!");
        }
        else {
            reject(Error("It broke"));
        }
    });
    return promise;
}

exports.saveCollectionRecords = function () {
    var promise = new Promise(function(resolve, reject) {
        // do a thing, possibly async, then…
        
        if (true) {
            resolve("Stuff worked!");
        }
        else {
            reject(Error("It broke"));
        }
    });
    return promise;
}

exports.createCollectionRecord = async function (dataSource, collection, record) {
    var promise = new Promise(function(resolve, reject) {
        
        let recordcreated = dataSource.createRecord(collection, record);
        console.log("createCollectionRecord: " + JSON.stringify(record));
        if (true) {
            resolve(recordcreated);
        }
        else {
            reject(Error("It broke"));
        }
    });
    return promise;
}

exports.createCollectionRecords = function (dataSource, collection, records) {
    var promise = new Promise(function(resolve, reject) {

        let recordscreated = dataSource.createRecords(collection, records);
        if (true) {
            resolve(recordscreated);
        }
        else {
            reject(Error("It broke"));
        }
    });
    return promise;
}

exports.getCollectionRecord = function (dataSource, collection, query, filter) {
    var promise = new Promise(async function(resolve, reject) {
        let record = await dataSource.getRecord(collection, query, filter);
        
        if (true) {
            resolve(record);
        }
        else {
            reject(Error("It broke"));
        }
    });
    return promise;
}

exports.getCollectionRecords = function (dataSource, collection, filter) {
    var promise = new Promise(async function(resolve, reject) {
        let records = await dataSource.getRecords(collection, filter);
        
        if (true) {
            resolve(records);
        }
        else {
            reject(Error("It broke"));
        }
    });
    return promise;
}

exports.deleteCollectionRecord = function () {
    var promise = new Promise(function(resolve, reject) {
        // do a thing, possibly async, then…
        
        if (true) {
            resolve("Stuff worked!");
        }
        else {
            reject(Error("It broke"));
        }
    });
    return promise;
}

exports.deleteCollectionRecords = function () {
    var promise = new Promise(function(resolve, reject) {
        // do a thing, possibly async, then…
        
        if (true) {
            resolve("Stuff worked!");
        }
        else {
            reject(Error("It broke"));
        }
    });
    return promise;
}

exports.initializeDataSource = function (options) {
    var options = options || {};
    options.type = options.type || "json";
    options.name = options.name || "default";
    if (options.type == "json") {
        options.base = options.base || "data";
    }

    var promise = new Promise(function(resolve, reject) {
        // Select adapter and establish connection or configure file storage
        let drawerAdapter = adapter.new(options);
        let drawer = new Drawer(drawerAdapter);

        if (true) {
            resolve(drawer);
        }
        else {
            reject(Error("It broke"));
        }
    });
    return promise;
}

exports.setCollectionSchema = function () {
    var promise = new Promise(function(resolve, reject) {
        // do a thing, possibly async, then…
        
        if (true) {
            resolve("Stuff worked!");
        }
        else {
            reject(Error("It broke"));
        }
    });
    return promise;
}

exports.getCollectionMetaData = function (dataSource, collection) {
    var promise = new Promise(async function(resolve, reject) {
        let result = await dataSource.getMetaData(collection);
        
        if (true) {
            resolve(result);
        }
        else {
            reject(Error("It broke"));
        }
    });
    return promise;
}

class Drawer {
    constructor(adapter) {
        this.adapter = adapter;
    }
    async saveRecord(collection, query, fields){};
    async saveRecords(collection, query, fields){};
    async getRecord(collection, query, fields){
        let result = this.adapter.fetchRecord(collection, query, fields);
        return result;
    }
    async getRecords(collection, fields){
        let result = this.adapter.fetchRecords(collection, fields);
        return result;
    }
    async createRecord(collection, record){
        this.adapter.createRecord(collection, record);
    }
    async createRecords(collection, records){
        this.adapter.createRecords(collection, records);
    }
    async deleteRecord(collection, query){};
    async deleteRecords(collection, query){};
    async setSchema(collection, schema, mode){};
    async getMetaData(collection){
        let result = this.adapter.fetchMeta(collection);
        return result;
    };
}