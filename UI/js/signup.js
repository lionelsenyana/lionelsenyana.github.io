function validateAndSubmit() {
    var userNameEmail = document.getElementById("userNameEmail").value;
    var errorMessages = "";
    if (!userNameEmail) {
      errorMessages += "Missing User Name as Email<br>";
    } else if (!userNameEmail.includes("@")) {
      errorMessages += "Your email is missing'@'<br>";
    }
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    if (!password) {
      errorMessages += "Missing Password<br>";
    } else if (!confirmPassword) {
      errorMessages += "Missing password confirmation<br>"
    } else if (password !== confirmPassword) {
      errorMessages += "Password doesn't match<br>";
    } else if (password.length < 6) {
      errorMessages = "Password should be at least 6 characters<br>";
    }

    var firstName = document.getElementById("firstName").value;
    if (!firstName) {
      errorMessages += "Missing First Name<br>";
    }

    var lastName = document.getElementById("lastName").value;
    if (!lastName) {
      errorMessages += "Missing Last Name<br>";
    }

    var userAddress = document.getElementById("userAddress").value;
    if (!userAddress) {
      errorMessages += "Missing Address<br>";
    }

    var userBio = document.getElementById("userBio").value;
    if (!userBio) {
      errorMessages += "Missing Biography<br>";
    }

    var occupation = document.getElementById("userOccupation").value;
    if (!occupation) {
      errorMessages += "Missing Occupation<br>";
    }

    var expertise = document.getElementById("userExpertise").value;
    if (!expertise) {
      errorMessages += "Missing Expertise<br>";
    }

    if (errorMessages) {
      document.getElementById("inputErrorsSection").innerHTML = errorMessages;
      document.getElementById("inputErrorsSection").style.display = 'inline';
      return false;
    }
    else {
      document.getElementById("inputErrorsSection").innerHTML = '';
      document.getElementById("inputErrorsSection").style.display = 'none';
    }

    /*
     * prepare and make RESTful AJAX call for user sign up:
     */
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4) { // it is 4 when received response from server
        if (this.status == 201) {
          // Response came back with success, user is successfully registered
          console.log("Message after user sign up: <" + this.responseText + ">");
          var userSignedUp = JSON.parse(this.responseText);
          if (userSignedUp && userSignedUp.status == 201) {
            localStorage.setItem("token", userSignedUp.data.token);
            if(userSignedUp.userType === "user") {
              window.location.assign("user.html");
            } else if(userSignedUp.userType === "mentor") {
              window.location.assign("mentor.html");
            } else if(userSignedUp.userType === "admin") {
              window.location.assign("admin.html");
            }
          }
        } else {
          console.error("Unable to complete sign up because: <" + this.responseText + ">");
          var signFailureResponse = JSON.parse(this.responseText);
          if (signFailureResponse && signFailureResponse.message) {
            document.getElementById("inputErrorsSection").innerHTML = signFailureResponse.message;
            document.getElementById("inputErrorsSection").style.display = 'inline';
          }
          return false;
        }
      }
    };
    xhttp.open("POST", "/api/v1/auth/signup", true);
    xhttp.setRequestHeader("Content-type", "application/json");

    /*
     * Follows JSON request object as indicated on page 13 of ADC pdf document.
     * For now, this project is considering a few fields but others will be added later.
     * Request format as indicated:
     * {
     *  "firstName": String,
     *  "lastName": String,
     *  "email": String,
     *  "password": String,
     *  "address": String,
     *  "bio": String,
     *  "occupation": String,
     *  "expertise": String,
     *  ...
     * }
     */
    var newUser = {};
    newUser.email = userNameEmail;
    newUser.password = password;
    newUser.firstName = firstName;
    newUser.lastName = lastName;
    newUser.address = userAddress;
    newUser.bio = userBio;
    newUser.occupation = occupation;
    newUser.expertise = expertise;

    xhttp.send(JSON.stringify(newUser));
  }