// Get the form and all necessary elements
const form = document.getElementById("registrationForm");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

// Function to validate the form
function validateForm(event) {
    let isValid = true;

    // Reset error messages
    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    // Validate Full Name
    if (fullName.value.trim().length < 5) {
        nameError.textContent = "Name must be at least 5 characters.";
        isValid = false;
    }

    // Validate Email ID
    if (!email.value.includes("@") || !email.value.trim()) {
        emailError.textContent = "Enter a correct email.";
        isValid = false;
    }

    // Validate Phone Number
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phoneNumber.value) || phoneNumber.value === "1234567890") {
        phoneError.textContent = "Enter a valid 10-digit phone number.";
        isValid = false;
    }

    // Validate Password
    if (password.value.length < 8 || password.value.toLowerCase() === "password" || password.value.toLowerCase() === fullName.value.toLowerCase()) {
        passwordError.textContent = "Password is not strong enough.";
        isValid = false;
    }

    // Validate Confirm Password
    if (password.value !== confirmPassword.value) {
        confirmPasswordError.textContent = "Passwords do not match.";
        isValid = false;
    }

    // If any validation failed, prevent form submission
    if (!isValid) {
        event.preventDefault();
    }
}

// Add event listener for form submission
form.addEventListener("submit", validateForm);

// Optional: Add individual field validation on change (optional, but good UX)
fullName.addEventListener("input", () => {
    if (fullName.value.trim().length >= 5) {
        nameError.textContent = "";
    }
});
email.addEventListener("input", () => {
    if (email.value.includes("@")) {
        emailError.textContent = "";
    }
});
phoneNumber.addEventListener("input", () => {
    const phoneRegex = /^[0-9]{10}$/;
    if (phoneRegex.test(phoneNumber.value) && phoneNumber.value !== "1234567890") {
        phoneError.textContent = "";
    }
});
password.addEventListener("input", () => {
    if (password.value.length >= 8 && password.value.toLowerCase() !== "password" && password.value.toLowerCase() !== fullName.value.toLowerCase()) {
        passwordError.textContent = "";
    }
});
confirmPassword.addEventListener("input", () => {
    if (password.value === confirmPassword.value) {
        confirmPasswordError.textContent = "";
    }
});
