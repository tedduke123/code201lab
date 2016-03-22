var assert = require('assert');
var compute = require('../js/compute.js');

describe('My first test', function() {
  it('should check first question', function() {
    assert.deepEqual(compute.getQuestion(0), 'first');
  });

  it('should check third question', function() {
    assert.deepEqual(compute.getQuestion(2), 'third');
  });

  it('should increment 0 to get 5', function() { assert(5 === compute.addFive(0)); });
  it('should increment 4 to get 9', function() { assert(9 === compute.addFive(4)); });
  it('should increment -1008 to get -1003', function() { assert(compute.addFive(-1008) === -1003); });
  it('is even 2', function() { assert(true === compute.isEven(2)); });
  it('is even 5', function() { assert(false === compute.isEven(5)); });


  it ('sould return true because 9 is a multiple of 3', function (){assert(true === compute.multiple_of_3(9)); });
  it ('sould return false because 5 is not a multiple of 3', function (){assert(false === compute.multiple_of_3(5)); });

 it("should return true because 18 is a multiple of 6", function() {assert(true === compute.multiple_of_6(18)); });
it("should return false because 19 is not a multiple of 6", function() {assert(false === compute.multiple_of_6(19)); });




});
