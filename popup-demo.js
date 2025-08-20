// Tiny demo using alert, prompt, confirm

// Ask for user's name (string)
let name = prompt("What is your name?");
if (name === null) {
  alert("You cancelled, goodbye!");
} else {
  // Ask for age (convert string → number)
  let age = Number(prompt("How old are you?"));
  
  // Ask for favorite number (parseInt to get integer)
  let favNum = parseInt(prompt("What is your favorite number?"), 10);

  // Do a simple calculation
  let nextYearAge = age + 1;
  let doubledFav = favNum * 2;

  // Confirm before showing results
  let showResults = confirm("Do you want to see your results?");

  if (showResults) {
    alert(
      "Hello, " + name + "!\n" +
      "Next year you will be " + nextYearAge + ".\n" +
      "Your favorite number doubled is " + doubledFav + "."
    );
  } else {
    alert("Okay, results are hidden. Bye " + name + "!");
  }
}