// ================================
// Part 1: Variable declarations & conditionals
// ================================
let userName = "Alice";
let age = 20;
const isStudent = true;

if (age >= 18) {
  console.log(userName + " is an adult.");
} else {
  console.log(userName + " is a minor.");
}

// ================================
// Part 2: Custom functions
// ================================

// Function 1: Greet a user
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet(userName));

// Function 2: Add two numbers
function addNumbers(a, b) {
  return a + b;
}
console.log("Sum: " + addNumbers(5, 10));

// ================================
// Part 3: Loops
// ================================

// Example 1: For loop
for (let i = 1; i <= 5; i++) {
  console.log("For Loop Count: " + i);
}

// Example 2: While loop
let count = 1;
while (count <= 3) {
  console.log("While Loop Count: " + count);
  count++;
}

// ================================
// Part 4: DOM interactions
// ================================

// Example 1: Change text content
document.getElementById("changeTextBtn").addEventListener("click", function () {
  document.getElementById("message").textContent = "The text has been changed!";
});

// Example 2: Add a new list item
document.getElementById("addItemBtn").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "New Item";
  document.getElementById("itemList").appendChild(newItem);
});

// Example 3: Change style of title
document.getElementById("main-title").style.color = "red";
