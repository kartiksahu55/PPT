function validateForm(event) {
  event.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const password = document.getElementById("password");
  const age = document.getElementById("age");
  const gender = document.getElementById("gender");
  const date = document.getElementById("date");
  const color = document.getElementById("color");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError");
  const passwordError = document.getElementById("passwordError");
  const ageError = document.getElementById("ageError");
  const genderError = document.getElementById("genderError");
  const dateError = document.getElementById("dateError");
  const colorError = document.getElementById("colorError");

  // Clear previous error messages
  nameError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";
  passwordError.textContent = "";
  ageError.textContent = "";
  genderError.textContent = "";
  dateError.textContent = "";
  colorError.textContent = "";

  // Validate name
  if (name.value.trim() === "") {
    nameError.textContent = "Name is required";
    name.focus();
    return false;
  }

  // Validate email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) {
    emailError.textContent = "Invalid email address";
    email.focus();
    return false;
  }

  // Validate phone number
  const phonePattern = /^\d{10}$/;
  if (!phonePattern.test(phone.value.trim())) {
    phoneError.textContent = "Invalid phone number";
    phone.focus();
    return false;
  }

  // Validate password
  if (password.value.trim().length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    password.focus();
    return false;
  }

  // Validate age
  if (age.value.trim() === "" || age.value < 18) {
    ageError.textContent = "You must be at least 18 years old";
    age.focus();
    return false;
  }

  // Validate gender
  if (gender.value === "") {
    genderError.textContent = "Gender is required";
    gender.focus();
    return false;
  }

  // Validate date
  if (date.value === "") {
    dateError.textContent = "Date is required";
    date.focus();
    return false;
  }

  // Validate color
  if (color.value === "") {
    colorError.textContent = "Color is required";
    color.focus();
    return false;
  }

  // Form is valid, perform further actions (submit, AJAX call, etc.)
  console.log("Form submitted successfully!");
}
