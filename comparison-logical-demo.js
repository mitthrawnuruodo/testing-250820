// Comparison and Logical Operators Demo

console.log("=== Comparison Operators ===");
console.log("5 == '5'  →", 5 == "5");     // true (loose equality)
console.log("5 === '5' →", 5 === "5");    // false (strict equality)
console.log("10 != '10' →", 10 != "10");  // false
console.log("10 !== '10' →", 10 !== "10");// true
console.log("7 > 3 →", 7 > 3);            // true
console.log("2 < 5 →", 2 < 5);            // true
console.log("5 >= 5 →", 5 >= 5);          // true
console.log("3 <= 2 →", 3 <= 2);          // false

console.log("\n=== Logical Operators ===");
console.log("true && false →", true && false); // false
console.log("true || false →", true || false); // true
console.log("!true →", !true);                 // false
console.log("!false →", !false);               // true

console.log("\n=== Truthy/Falsy values ===");
console.log("'Hello' && 42 →", "Hello" && 42);     // 42
console.log("null && 'Hi' →", null && "Hi");       // null
console.log("'Hello' || 42 →", "Hello" || 42);     // "Hello"
console.log("'' || 'Default' →", "" || "Default"); // "Default"
console.log("!0 →", !0);                           // true
console.log("!'' →", !"");                         // true

console.log("\n=== Using Parentheses ===");
// Mixing AND and OR without parentheses
console.log("true || false && false →", true || false && false); 
// true || (false && false) → true

// Same with parentheses
console.log("(true || false) && false →", (true || false) && false); 
// (true) && false → false

// Comparisons with grouping
let age = 20;
console.log("age > 18 && age < 30 →", age > 18 && age < 30); 
console.log("(age > 18) && (age < 30) →", (age > 18) && (age < 30));