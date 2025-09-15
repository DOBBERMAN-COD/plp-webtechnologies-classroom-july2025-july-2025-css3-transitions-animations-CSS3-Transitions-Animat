// Global variable to demonstrate scope
let globalCounter = 0;

// Part 2: JavaScript Functions — Scope, Parameters & Return Values

/**
 * Function that takes parameters and returns a value
 * Demonstrates function with parameters and return value
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function calculateSum(a, b) {
  // Local variable - only accessible within this function
  let localResult = a + b;
  console.log(`Local scope: Calculating ${a} + ${b} = ${localResult}`);
  return localResult;
}

/**
 * Function that demonstrates global scope access
 * @param {number} increment - Amount to increment global counter
 * @returns {number} Updated global counter value
 */
function incrementGlobalCounter(increment) {
  // Accessing and modifying global variable
  globalCounter += increment;
  console.log(
    `Global scope: Counter incremented by ${increment}, new value: ${globalCounter}`
  );
  return globalCounter;
}

/**
 * Function that returns an object with multiple values
 * Demonstrates returning complex data types
 * @param {string} name - Name to include in greeting
 * @param {number} age - Age to include in info
 * @returns {object} Object containing greeting and info
 */
function createUserInfo(name, age) {
  let greeting = `Hello, ${name}!`; // Local variable
  let info = `You are ${age} years old.`; // Local variable

  console.log(
    `Local scope: Created greeting: "${greeting}" and info: "${info}"`
  );

  return {
    greeting: greeting,
    info: info,
    timestamp: new Date().toLocaleString(), // Additional computed value
  };
}

/**
 * Function that demonstrates function composition and reusability
 * @param {number} base - Base number
 * @param {number} multiplier - Multiplier
 * @param {number} adder - Number to add
 * @returns {number} Result of (base * multiplier) + adder
 */
function complexCalculation(base, multiplier, adder) {
  // Reusing the calculateSum function
  let product = base * multiplier;
  let result = calculateSum(product, adder);

  console.log(
    `Function composition: (${base} * ${multiplier}) + ${adder} = ${result}`
  );
  return result;
}

// Part 3: Combining CSS Animations with JavaScript

/**
 * Reusable function to trigger CSS animation by adding/removing classes
 * @param {string} elementId - ID of the element to animate
 * @param {string} animationClass - CSS class that triggers the animation
 * @param {number} duration - Duration in milliseconds before removing the class
 */
function triggerAnimation(elementId, animationClass, duration = 1000) {
  const element = document.getElementById(elementId);
  if (element) {
    element.classList.add(animationClass);

    // Remove the class after the specified duration to allow re-triggering
    setTimeout(() => {
      element.classList.remove(animationClass);
    }, duration);
  }
}

/**
 * Function to toggle a class on an element
 * @param {string} elementId - ID of the element
 * @param {string} toggleClass - Class to toggle
 */
function toggleClass(elementId, toggleClass) {
  const element = document.getElementById(elementId);
  if (element) {
    element.classList.toggle(toggleClass);
  }
}

/**
 * Function that calculates animation delay based on parameters
 * @param {number} baseDelay - Base delay in milliseconds
 * @param {number} multiplier - Multiplier for the delay
 * @returns {number} Calculated delay
 */
function calculateAnimationDelay(baseDelay, multiplier) {
  let delay = baseDelay * multiplier;
  console.log(`Calculated animation delay: ${delay}ms`);
  return delay;
}

// Event listeners for Part 2 demonstrations
document.getElementById("calculateBtn").addEventListener("click", function () {
  let result = calculateSum(5, 10);
  document.getElementById("calcResult").textContent = `Result: ${result}`;

  // Demonstrate global scope
  incrementGlobalCounter(1);

  // Demonstrate complex return value
  let userInfo = createUserInfo("Student", 25);
  console.log("User Info:", userInfo);

  // Demonstrate function composition
  let complexResult = complexCalculation(3, 4, 7);
  console.log("Complex calculation result:", complexResult);
});

// Event listeners for Part 3: Combining CSS Animations with JavaScript
document.getElementById("animateBoxBtn").addEventListener("click", function () {
  // Use the reusable triggerAnimation function
  let delay = calculateAnimationDelay(500, 2); // 1000ms delay
  triggerAnimation("animBox", "animated", delay);
});

document.getElementById("flipCardBtn").addEventListener("click", function () {
  // Use the toggleClass function for card flip
  toggleClass("card", "flipped");
});

document
  .getElementById("toggleLoadingBtn")
  .addEventListener("click", function () {
    // Toggle loading animation
    toggleClass("loading", "active");
  });

// Initialize console logs to demonstrate scope
console.log("Global scope: Initial globalCounter value:", globalCounter);

// Demonstrate local scope vs global scope
function demonstrateScope() {
  let localVariable = "I am local";
  console.log("Local scope inside function:", localVariable);
  console.log("Global scope accessed inside function:", globalCounter);
}

demonstrateScope();

// This would cause an error if uncommented - localVariable is not accessible here
// console.log(localVariable); // ReferenceError: localVariable is not defined
