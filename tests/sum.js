var chai = require('chai');
var assert = chai.assert;

var sum = require('../sum');

describe('Test Sum', function() {
    it('01 test sum of 2 numbers', function() {
        var result = sum(4, 3);
        for (var i=0;i<10000;i++) {
        	//do nothing - just delay for circle ci
        }
        assert.equal(result, 7);
    });
});