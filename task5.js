// Task 5: Absolute, ceiling and floor for zero, one or many numbers
function absMe(...numbers) {
    if (numbers.length == 0) return 0;

    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        result.push(Math.abs(numbers[i]));
    }

    if (result.length == 1) return result[0];
    return result;
}

function ceilMe(...numbers) {
    if (numbers.length == 0) return 0;

    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        result.push(Math.ceil(numbers[i]));
    }

    if (result.length == 1) return result[0];
    return result;
}

function floorMe(...numbers) {
    if (numbers.length == 0) return 0;

    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        result.push(Math.floor(numbers[i]));
    }

    if (result.length == 1) return result[0];
    return result;
}

console.log(absMe());
console.log(absMe(-5));
console.log(absMe(-5, -8));
console.log(ceilMe());
console.log(ceilMe(4.2));
console.log(ceilMe(4.2, 6.7));
console.log(floorMe());
console.log(floorMe(4.9));
console.log(floorMe(4.9, 6.3));
