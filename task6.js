// Task 6: Sum of multiples of x or y below z
let x = 3;
let y = 5;
let z = 10;
let sum = 0;

for (let i = 1; i < z; i++) {
    if (i % x == 0 || i % y == 0) {
        sum = sum + i;
    }
}

console.log("Sum:", sum);
