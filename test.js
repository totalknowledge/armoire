#!./node_modules/mocha/bin/mocha

'use strict'

const armoire = require('./index')
const expect = require('chai').expect
const mocah = require('mocha')

// Save a Single Record to a collection.  May contain sub-Records. *Put/Patch*
describe('armoire module', () => {
  describe('"saveCollectionRecord"', () => {
    it('should export a function', () => {
      expect(armoire.saveCollectionRecord).to.be.a('function')
    })
  })
})
it('saveCollectionRecord should return a Promise', () => {
  const saveRecord = armoire.saveCollectionRecord()
  expect(saveRecord.then).to.be.a('Function')
  expect(saveRecord.catch).to.be.a('Function')
})

// Save multiple records with or without a parent ID as a variable. *Put/Patch*
describe('armoire module', () => {
  describe('"saveCollectionRecords"', () => {
    it('should export a function', () => {
      expect(armoire.saveCollectionRecords).to.be.a('function')
    })
  })
})
it('saveCollectionRecords should return a Promise', () => {
  const saveRecords = armoire.saveCollectionRecords()
  expect(saveRecords.then).to.be.a('Function')
  expect(saveRecords.catch).to.be.a('Function')
})

//Create a Record from Object *Post*
describe('armoire module', () => {
  describe('"createCollectionRecord"', () => {
    it('should export a function', () => {
      expect(armoire.createCollectionRecord).to.be.a('function')
    })
  })
})
it('createCollectionRecord should return a Promise', () => {
  const createRecord = armoire.createCollectionRecord()
  expect(createRecord.then).to.be.a('Function')
  expect(createRecord.catch).to.be.a('Function')
})

//Create Records from Array of Objects *Post*
describe('armoire module', () => {
  describe('"createCollectionRecords"', () => {
    it('should export a function', () => {
      expect(armoire.createCollectionRecords).to.be.a('function')
    })
  })
})
it('createCollectionRecords should return a Promise', () => {
  const createRecords = armoire.createCollectionRecords()
  expect(createRecords.then).to.be.a('Function')
  expect(createRecords.catch).to.be.a('Function')
})

//Get a Record from collection. *Get*
describe('armoire module', () => {
  describe('"getCollectionRecord"', () => {
    it('should export a function', () => {
      expect(armoire.getCollectionRecord).to.be.a('function')
    })
  })
})
it('getCollectionRecord should return a Promise', () => {
  const getCollection = armoire.getCollectionRecord()
  expect(getCollection.then).to.be.a('Function')
  expect(getCollection.catch).to.be.a('Function')
})

//Get Records from Collection *Get*
describe('armoire module', () => {
  describe('"getCollectionRecords"', () => {
    it('should export a function', () => {
      expect(armoire.getCollectionRecords).to.be.a('function')
    })
  })
})
it('getCollectionRecords should return a Promise', () => {
  const getCollections = armoire.getCollectionRecords()
  expect(getCollections.then).to.be.a('Function')
  expect(getCollections.catch).to.be.a('Function')
})

//Delete a Record from collection. *Delete*
describe('armoire module', () => {
  describe('"deleteCollectionRecord"', () => {
    it('should export a function', () => {
      expect(armoire.deleteCollectionRecord).to.be.a('function')
    })
  })
})
it('deleteCollectionRecord should return a Promise', () => {
  const deleteCollection = armoire.deleteCollectionRecord()
  expect(deleteCollection.then).to.be.a('Function')
  expect(deleteCollection.catch).to.be.a('Function')
})

//Delete Records from Collection *Delete*
describe('armoire module', () => {
  describe('"deleteCollectionRecords"', () => {
    it('should export a function', () => {
      expect(armoire.deleteCollectionRecords).to.be.a('function')
    })
  })
})
it('deleteCollectionRecords should return a Promise', () => {
  const deleteCollections = armoire.deleteCollectionRecords()
  expect(deleteCollections.then).to.be.a('Function')
  expect(deleteCollections.catch).to.be.a('Function')
})

//Initializes a data source
describe('armoire module', () => {
  describe('"initializeDataSource"', () => {
    it('should export a function', () => {
      expect(armoire.initializeDataSource).to.be.a('function')
    })
  })
})
it('initializeDataSource should return a Promise', () => {
  const initializeDataSource = armoire.initializeDataSource()
  expect(initializeDataSource.then).to.be.a('Function')
  expect(initializeDataSource.catch).to.be.a('Function')
})

//Setsup or migrates a Collection Schema
describe('armoire module', () => {
  describe('"setCollectionSchema"', () => {
    it('should export a function', () => {
      expect(armoire.setCollectionSchema).to.be.a('function')
    })
  })
})
it('setCollectionSchema should return a Promise', () => {
  const setCollectionSchema = armoire.setCollectionSchema()
  expect(setCollectionSchema.then).to.be.a('Function')
  expect(setCollectionSchema.catch).to.be.a('Function')
})

//Get Collection MetaData
describe('armoire module', () => {
  describe('"getCollectionMetaData"', () => {
    it('should export a function', () => {
      expect(armoire.getCollectionMetaData).to.be.a('function')
    })
  })
})
it('getCollectionMetaData should return a Promise', () => {
  const getCollectionMetaData = armoire.getCollectionMetaData()
  expect(getCollectionMetaData.then).to.be.a('Function')
  expect(getCollectionMetaData.catch).to.be.a('Function')
})
