
    var form = document.getElementById("myForm");
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var phoneInput = document.getElementById("phone");
    var passwordInput = document.getElementById("password");
    var ageInput = document.getElementById("age");
    var genderInput = document.getElementById("gender");
    var dateInput = document.getElementById("date");
    var colorInput = document.getElementById("color");

    form.addEventListener("submit", function(event) {
      event.preventDefault();

      if (!validateName()) {
        return;
      }

      if (!validateEmail()) {
        return;
      }

      if (!validatePhone()) {
        return;
      }

      if (!validatePassword()) {
        return;
      }

      if (!validateAge()) {
        return;
      }

      if (!validateGender()) {
        return;
      }

      if (!validateDate()) {
        return;
      }

      if (!validateColor()) {
        return;
      }

      // If all validations pass, form is submitted
      alert("Form submitted successfully!");
      form.reset();
    });

    function validateName() {
      var name = nameInput.value.trim();

      if (name === "") {
        setError("name", "Name is required.");
        return false;
      }

      clearError("name");
      return true;
    }

    function validateEmail() {
      var email = emailInput.value.trim();
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (email === "") {
        setError("email", "Email is required.");
        return false;
      }

      if (!emailPattern.test(email)) {
        setError("email", "Email is invalid.");
        return false;
      }

      clearError("email");
      return true;
    }

    function validatePhone() {
      var phone = phoneInput.value.trim();
      var phonePattern = /^\d{10}$/;

      if (phone === "") {
        setError("phone", "Phone number is required.");
        return false;
      }

      if (!phonePattern.test(phone)) {
        setError("phone", "Phone number is invalid. (10 digits only)");
        return false;
      }

      clearError("phone");
      return true;
    }

    function validatePassword() {
      var password = passwordInput.value.trim();

      if (password === "") {
        setError("password", "Password is required.");
        return false;
      }

      if (password.length < 8) {
        setError("password", "Password should be at least 8 characters.");
        return false;
      }

      clearError("password");
      return true;
    }

    function validateAge() {
      var age = ageInput.value.trim();

      if (age === "") {
        setError("age", "Age is required.");
        return false;
      }

      if (age < 1 || age > 150) {
        setError("age", "Age should be between 1 and 150.");
        return false;
      }

      clearError("age");
      return true;
    }

    function validateGender() {
      var gender = genderInput.value.trim();

      if (gender === "") {
        setError("gender", "Gender is required.");
        return false;
      }

      clearError("gender");
      return true;
    }

    function validateDate() {
      var date = dateInput.value.trim();

      if (date === "") {
        setError("date", "Date is required.");
        return false;
      }

      clearError("date");
      return true;
    }

    function validateColor() {
      var color = colorInput.value.trim();

      if (color === "") {
        setError("color", "Color is required.");
        return false;
      }

      clearError("color");
      return true;
    }

    function setError(field, message) {
      var errorSpan = document.getElementById(field + "Error");
      errorSpan.textContent = message;
    }

    function clearError(field) {
      var errorSpan = document.getElementById(field + "Error");
      errorSpan.textContent = "";
    }
