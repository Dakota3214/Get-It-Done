
var user = "";
var getUserRepos = function() {

    // Format teh github api url
    var apiUrl = "https://api.github.com/users" + user + "/repos";

    // Make a request to the url
    var response = fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            console.log(data);

            // Can be writtten like this using jquery
            // $.ajax("https://api.github.com/users/octocat/repos").done(function(data) {
            //     console.log(data);
            //    });

        });
    console.log("inside", response);
    });
    console.log("outside");
};

getUserRepos("Dakota3214");