// Task 2: Find the next prime number
let num = 11;
let next = num + 1;

while (true) {
    let isPrime = true;

    for (let i = 2; i < next; i++) {
        if (next % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime && next > 1) {
        console.log("Next prime:", next);
        break;
    }

    next++;
}
