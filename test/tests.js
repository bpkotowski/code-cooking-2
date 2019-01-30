const test = QUnit.test;

function catOrdog(randomNumber) {
if(randomNumber< 0.5)
};

test('return cat if number is less than 0.5', function(assert) {

    const randomNumber = 0.4;
    const result = catOrdog(randomNumber);
    const expected = "cat";

    assert.equal(expected, result);


});



// RMEMBER THIS
// const result = false;
// const expected = true;

// assert.equal(result, expected);