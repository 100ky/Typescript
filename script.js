function combine(input1, input2, resultConversion) {
    var result;
    if (typeof (input1) === 'number' && typeof (input2) === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(30, 26, 'as-number');
var combinedStringAges = combine('30', '26', 'as-number');
var combinedNames = combine("David", "John", 'as-text');
console.log(combinedAges + " " + combinedNames + " " + combinedStringAges);
