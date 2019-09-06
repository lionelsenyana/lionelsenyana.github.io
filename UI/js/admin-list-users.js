/*
             * Since we do not have back-end let's assume 
             * some hard-coded users for now.  We will
             * replace once back-end is available
             */
            var allUsers = [
                "Joe Doe",
                "Jane Smith"
          ];

          var orderListOfUsers = null;

          function populateUsers() {
                // alert("About to load users");
                if (allUsers) {
                      orderListOfUsers =
                            document.createElement('ol');

                      for (var i = 0; i < allUsers.length; i++) {
                            var currentUserElment =
                                  document.createElement('li');
                            currentUserElment.appendChild(
                                  document.createTextNode(allUsers[i]));
                            orderListOfUsers.appendChild(currentUserElment);
                      }
                      document.getElementById("usersSection").appendChild(orderListOfUsers);
                }
          }

          function addUser() {
                var fullName =
                      document.getElementById("name").value;
                if (!fullName) {
                      alert("Name cannot be empty");
                } else {
                      var names = fullName.split(" ");
                      if (!names || names.length < 2) {
                            alert("First Name and Last Name required");
                      } else {
                            document.getElementById("usersSection").removeChild(orderListOfUsers);
                            allUsers.push(fullName);
                            populateUsers();
                            document.getElementById("name").value = "";
                      }
                      return false;
                }
                return false;
          }