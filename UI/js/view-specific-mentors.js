function populateSpecificMentors() {
    /*
     * Since we do not have back-end let's assume 
     * some hard-coded specific mentors for now.  We will
     * replace once back-end is available
     */
    var allSpecificMentors = [
          "Joe Doe",
          "Jane Smith"
    ];
    // let's assume the specific mentors variable is coming from back-end
    if (allSpecificMentors) {
          var orderListOfSpecificMentors =
                document.createElement('ol');

          for (var i = 0; i < allSpecificMentors.length; i++) {
                var currentSpecificMentorElment =
                      document.createElement('li');
                currentSpecificMentorElment.appendChild(
                      document.createTextNode(allSpecificMentors[i]));
                orderListOfSpecificMentors.appendChild(currentSpecificMentorElment);
          }
          document.getElementById("specificMentorsSection").appendChild(orderListOfSpecificMentors);
    }
}