function populateMentors() {
    /*
     * prepare and make RESTful AJAX call for user sign in:
     */
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
          if (this.readyState == 4) { // Response came back when ready state is 4
                if (this.status ==
                      200) { // Response came back with success, user is successfully logged in
                      console.log("Response by reading all mentors: <" + this.responseText + ">");
                      var allMentors = JSON.parse(this.responseText);
                      if (allMentors && allMentors.status == 200 && allMentors.data.length > 0) {
                            var orderListOfMentors =
                                  document.createElement('ol');
                            for (var i = 0; i < allMentors.data.length; i++) {
                                  var currentMentorElment =
                                        document.createElement('li');
                                  currentMentorElment.appendChild(
                                        document.createTextNode("Mentor Id: " + allMentors
                                              .data[i].mentorId));
                                  currentMentorElment.appendChild(document.createElement("br"));

                                  currentMentorElment.appendChild(
                                        document.createTextNode("First Name: " + allMentors
                                              .data[i].firstName));
                                  currentMentorElment.appendChild(document.createElement("br"));

                                  currentMentorElment.appendChild(
                                        document.createTextNode("Last Name: " + allMentors
                                              .data[i].lastName));
                                  currentMentorElment.appendChild(document.createElement("br"));

                                  currentMentorElment.appendChild(
                                        document.createTextNode("Email: " + allMentors.data[i]
                                              .email));
                                  currentMentorElment.appendChild(document.createElement("br"));

                                  currentMentorElment.appendChild(
                                        document.createTextNode("Address: " + allMentors.data[
                                              i].address));
                                  currentMentorElment.appendChild(document.createElement("br"));

                                  currentMentorElment.appendChild(
                                        document.createTextNode("Occupation: " + allMentors
                                              .data[i].occupation));
                                  currentMentorElment.appendChild(document.createElement("br"));

                                  currentMentorElment.appendChild(
                                        document.createTextNode("Expertise: " + allMentors
                                              .data[i].expertise));
                                  currentMentorElment.appendChild(document.createElement("br"));

                                  orderListOfMentors.appendChild(currentMentorElment);
                            }
                            document.getElementById("mentorsSection").appendChild(
                                  orderListOfMentors);
                      } else {
                            alert("There are no mentors yet.");
                      }
                } else if (this.status == 401) {
                      alert("Invalid credentials");
                }
          }
    };
    xhttp.open("GET", "/api/v1/mentor/mentors", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("token", localStorage.getItem("token"));
    xhttp.send();
}