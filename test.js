#!./node_modules/mocha/bin/mocha

'use strict'

const armoire = require('./index')
const expect = require('chai').expect
const mocah = require('mocha')

// Save a Single Record to a collection.  May contain sub-Records. *Put*
describe('armoire module', () => {
  describe('"saveCollectionRecord"', () => {
    it('should export a function', () => {
      expect(armoire.saveCollectionRecord).to.be.a('function')
    })
  })
})

// Save multiple records with or without a parent ID as a variable. *Put*
describe('armoire module', () => {
  describe('"saveCollectionRecords"', () => {
    it('should export a function', () => {
      expect(armoire.saveCollectionRecord).to.be.a('function')
    })
  })
})

//Create a Record from Object *Post*
