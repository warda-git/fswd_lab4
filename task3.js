// Task 3: Format 10 digits as a phone number
function createPhoneNumber(numbers) {
    let phone = "(";

    for (let i = 0; i < 3; i++) {
        phone += numbers[i];
    }

    phone += ") ";

    for (let i = 3; i < 6; i++) {
        phone += numbers[i];
    }

    phone += "-";

    for (let i = 6; i < 10; i++) {
        phone += numbers[i];
    }

    return phone;
}

let digits = [1,2,3,4,5,6,7,8,9,0];
console.log(createPhoneNumber(digits));
