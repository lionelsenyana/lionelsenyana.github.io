    /*
     * Since we do not have back-end let's assume 
     * some hard-coded mentors for now.  We will
     * replace once back-end is available
     */
            var allMentors = [
                "Joe Doe",
                "Jane Smith"
          ];
          function sendMentorshipRequest() {
                // let's assume the mentors variable is coming from back-end
                if (allMentors) {
                      var orderListOfMentors =
                            document.createElement('ol');

                      for (var i = 0; i < allMentors.length; i++) {
                            var currentMentorElment =
                                  document.createElement('li');
                            currentMentorElment.appendChild(
                                  document.createTextNode(allMentors[i]));
                            orderListOfMentors.appendChild(currentMentorElment);
                      }
                      document.getElementById("mentorsSection").appendChild(orderListOfMentors);
                }
          }