/*
 * Since we do not have back-end let's assume 
 * some hard-coded users for now.  We will
 * replace once back-end is available
 */
            var allUsers = [
                "Joe Doe",
                "Jane Smith"
          ];

          function changeToMentor() {
                var user = localStorage.getItem("user");
                if(user) {
                      localStorage.removeItem("user");
                      localStorage.setItem("mentor", user);
                }
          }