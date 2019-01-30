const test = QUnit.test;

import catOrDog from'../src/cat-or-dog.js';



test('return cat if number is less than 0.5', function(assert) {

    const randomNumber = 0.4;
    const result = catOrDog(randomNumber);
    const expected = "cat";

    assert.equal(expected, result);


});

test('return dog if random number is >= 0.5', function(assert)
{
    const randomNumber = 0.5;
    const result = catOrDog(randomNumber);
    const expected = 'dog'

    assert.equal(result,expected);
});



// RMEMBER THIS
// const result = false;
// const expected = true;

// assert.equal(result, expected);