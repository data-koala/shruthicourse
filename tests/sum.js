var chai = require('chai');
var assert = chai.assert;

var sum = require('../sum');

describe('Test Sum', function() {
    it('01 test sum of 2 numbers', function() {
        var result = sum(4, 2);

        assert.equal(result, 6);
    });
});