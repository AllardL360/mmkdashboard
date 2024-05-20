document.addEventListener("DOMContentLoaded", function() {
  const signupBox = document.querySelector(".signup-box");
  const loginBox = document.querySelector(".login-box");
  const signupBtn = document.getElementById("signup-btn");
  const loginBtn = document.getElementById("login-btn");
  const showSignupLink = document.getElementById("show-signup");
  const roleModal = document.getElementById("role-modal");
  const roleButtons = document.querySelectorAll(".role-btn");
  const modalErrorMsg = document.querySelector("#role-modal .error-msg");

  // Function to toggle visibility of login and signup forms
  function toggleForms() {
    signupBox.style.display = signupBox.style.display === "none" ? "block" : "none";
    loginBox.style.display = loginBox.style.display === "none" ? "block" : "none";
  }

  // Event listener for sign-up button
  signupBtn.addEventListener("click", function(event) {
    event.preventDefault();
    // Get the entered username, email, and password
    const username = document.querySelector(".signup-box input[type='text']").value;
    const email = document.querySelector(".signup-box input[type='email']").value;
    const password = document.querySelector(".signup-box input[type='password']").value;

    // Check if username, email, and password are not empty
    if (username && email && password) {
      // Store the entered credentials in localStorage
      localStorage.setItem("username", username);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);

      // Toggle to the login form
      toggleForms();
    } else {
      // Display error message if any field is empty
      document.querySelector(".signup-box .error-msg").textContent = "Please fill in all fields.";
    }
  });

  // Event listener for login button
  loginBtn.addEventListener("click", function(event) {
    event.preventDefault();
    // Retrieve the stored credentials from localStorage
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    // Get the entered username and password
    const enteredUsername = document.querySelector(".login-box input[type='text']").value;
    const enteredPassword = document.querySelector(".login-box input[type='password']").value;

    // Check if the entered username and password match the stored credentials
    if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
      // Show the role selection modal
      roleModal.style.display = "flex";
    } else {
      // Display error message if credentials don't match
      document.querySelector(".login-box .error-msg").textContent = "Invalid username or password.";
    }
  });

  // Event listener for role selection buttons
  roleButtons.forEach(button => {
    button.addEventListener("click", function() {
      const selectedRole = this.getAttribute("data-role");
      if (selectedRole) {
        if (selectedRole === "admin") {
          window.location.href = "dashboard.html";
        } else if (selectedRole === "customer") {
          window.location.href = "customerdash.html";
        } else if (selectedRole === "deliverystaff") {
          window.location.href = "deliverystaff.html";
        }
      } else {
        modalErrorMsg.textContent = "Invalid role selection.";
      }
    });
  });

  // Event listener for "Create an account" link
  showSignupLink.addEventListener("click", function(event) {
    event.preventDefault();
    toggleForms();
  });

  // Check if user has logged out and show the login form
  if (localStorage.getItem("loggedOut") === "true") {
    localStorage.removeItem("loggedOut");
    signupBox.style.display = "none";
    loginBox.style.display = "block";
  } else {
    // By default, show the sign-up form if not logged out
    signupBox.style.display = "block";
    loginBox.style.display = "none";
  }
});
