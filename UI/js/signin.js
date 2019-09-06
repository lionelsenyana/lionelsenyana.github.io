function validateAndSubmit() {
    var userNameEmail = document.getElementById("userNameEmail").value;
    var errorMessages = "";
    if (!userNameEmail) {
      errorMessages += "Missing Email<br>";
    } else if (!userNameEmail.includes("@")) {
      errorMessages += "Your email is missing'@'<br>";
    }

    var password =
      document.getElementById("password").value;
    if (!password) {
      errorMessages += "Missing password<br>";
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
     * prepare and make RESTful AJAX call for user sign in:
     */
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4) { // Response came back when ready state is 4
        if (this.status == 200) { // Response came back with success, user is successfully logged in
          console.log("Message after user sign in: <" + this.responseText + ">");
          var userSignedIn = JSON.parse(this.responseText);
          if (userSignedIn && userSignedIn.status == 200) {
            localStorage.setItem("token", userSignedIn.data.token);
            if (userSignedIn.userType === "user") {
              window.location.assign("user.html");
            } else if (userSignedIn.userType === "mentor") {
              window.location.assign("mentor.html");
            } else if (userSignedIn.userType === "admin") {
              window.location.assign("admin.html");
            }
          }
        } else if (this.status == 401) {
          console.error("Unable to complete sign up because: <" + this.responseText + ">");
          var signFailureResponse = JSON.parse(this.responseText);
          if (signFailureResponse && signFailureResponse.message) {
            document.getElementById("inputErrorsSection").innerHTML = signFailureResponse.message;
          } else {
            document.getElementById("inputErrorsSection").innerHTML = "Invalid credentials";
          }
          document.getElementById("inputErrorsSection").style.display = 'inline';
          return false;
        }
      }
    };

    xhttp.open("POST", "/api/v1/auth/signin", true);
    xhttp.setRequestHeader("Content-type", "application/json");

    var newUser = {};
    newUser.email = userNameEmail;
    newUser.password = password;

    xhttp.send(JSON.stringify(newUser));
  }