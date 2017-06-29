'use strict';

var expect = require('chai').expect;
var formatter = require('../index.js');

describe('formatter', function () {
    it('should convert number', function(done) {
        expect(formatter(1234)).to.equal('1,234')
        done();
    })
});