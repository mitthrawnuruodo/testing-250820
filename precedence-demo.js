// Operator Precedence Demo

// 1. Parentheses
console.log("Parentheses: (2 + 3) * 4 =", (2 + 3) * 4); // 20

// 2. Exponentiation
console.log("Exponentiation: 2 ** 3 ** 2 =", 2 ** 3 ** 2); // 512 (2 ** (3 ** 2))

// 3. Multiplication, Division, Modulus before Addition/Subtraction
console.log("Mixed: 10 + 6 / 2 =", 10 + 6 / 2); // 13 (6 / 2 first)
console.log("Mixed: 10 - 4 * 2 =", 10 - 4 * 2); // 2 (4 * 2 first)
console.log("Mixed: 15 % 4 + 1 =", 15 % 4 + 1); // 4 ((15 % 4) = 3, then +1)

// 4. Addition/Subtraction left-to-right
console.log("Left-to-right: 10 - 4 - 2 =", 10 - 4 - 2); // 4 ((10-4)=6, then -2)

// 5. Comparisons after arithmetic
console.log("Comparison: 5 + 3 > 7 =", 5 + 3 > 7); // true (8 > 7)

// 6. Equality after comparison
console.log("Equality: 5 + 3 == 8 =", 5 + 3 == 8); // true
console.log("Equality: 5 + 3 === '8' =", 5 + 3 === "8"); // false (strict check)

// 7. Logical AND vs OR
console.log("Logical: true || false && false =", true || false && false); 
// true || (false && false) = true

// 8. Assignment is last (right-to-left associativity)
let a, b;
a = b = 5 + 2 * 3; 
console.log("Assignment: a =", a, ", b =", b); // both 11