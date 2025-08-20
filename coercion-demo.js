// Arithmetic with Non-Numbers Demo

console.log("=== Addition (+) ===");
console.log('"5" + 2 =', "5" + 2);          // "52" (string + number → string)
console.log('2 + "5" =', 2 + "5");          // "25"
console.log('"Hello" + 5 =', "Hello" + 5);  // "Hello5"
console.log('5 + true =', 5 + true);        // 6 (true → 1)
console.log('5 + false =', 5 + false);      // 5 (false → 0)
console.log('5 + null =', 5 + null);        // 5 (null → 0)
console.log('5 + undefined =', 5 + undefined); // NaN

console.log("\n=== Subtraction (-) ===");
console.log('"5" - 2 =', "5" - 2);          // 3 ("5" → 5)
console.log('"10" - "3" =', "10" - "3");    // 7 (both strings → numbers)
console.log('"hello" - 2 =', "hello" - 2);  // NaN

console.log("\n=== Multiplication (*) ===");
console.log('"5" * "2" =', "5" * "2");      // 10
console.log('"abc" * 3 =', "abc" * 3);      // NaN
console.log('10 * true =', 10 * true);      // 10
console.log('10 * false =', 10 * false);    // 0

console.log("\n=== Division (/ and %) ===");
console.log('"10" / 2 =', "10" / 2);        // 5
console.log('"7" % 2 =', "7" % 2);          // 1
console.log('"hello" / 2 =', "hello" / 2);  // NaN

console.log("\n=== Exponentiation (**)");
console.log('"2" ** "3" =', "2" ** "3");    // 8
console.log('true ** 3 =', true ** 3);      // 1 (true → 1)
console.log('false ** 3 =', false ** 3);    // 0

console.log("\n=== Arrays and Objects ===");
console.log("[10] - 5 =", [10] - 5);        // 5 ([10] → "10" → 10)
console.log("[] + 5 =", [] + 5);            // "5" (empty array → "" → string concatenation)
console.log("[1,2] + 3 =", [1,2] + 3);      // "1,23" ([1,2] → "1,2" then string concat with 3)
console.log("{} + 5 =", {} + 5);            // [object Object]5