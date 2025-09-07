// ====================
// Part 1: Event Handling
// ====================
const messageBtn = document.getElementById("messageBtn");
const messageOutput = document.getElementById("messageOutput");

messageBtn.addEventListener("click", () => {
  messageOutput.textContent = "Button clicked! 🎉";
});

// ====================
// Part 2: Interactive Elements
// ====================

// Light/Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter
let count = 0;
const countValue = document.getElementById("countValue");
document.getElementById("increaseBtn").addEventListener("click", () => {
  count++;
  countValue.textContent = count;
});
document.getElementById("resetBtn").addEventListener("click", () => {
  count = 0;
  countValue.textContent = count;
});

// Collapsible FAQ
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});


// ====================
// Part 3: Form Validation
// ====================
const signupForm = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formSuccess = document.getElementById("formSuccess");

// Email regex for validation
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

signupForm.addEventListener("submit", (e) => {
  e.preventDefault(); // stop form submission
  let isValid = true;

  // Name validation
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Email validation
  if (!emailPattern.test(emailInput.value)) {
    emailError.textContent = "Enter a valid email address.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Password validation
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  // Success message
  if (isValid) {
    formSuccess.textContent = "Form submitted successfully! 🎉";
    signupForm.reset();
  }
});
