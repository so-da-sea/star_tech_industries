var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, false );
        anHttpRequest.send( null );
    }

    this.post = function(aUrl, requestBody, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "POST", aUrl, true );
        anHttpRequest.setRequestHeader("Content-Type","application/json");
        anHttpRequest.send( requestBody );
    }
}

var client = new HttpClient();

function createUser(theForm) {
    var un    = document.forms["signUpForm"]["userName"].value;
    var pw    = document.forms["signUpForm"]["password"].value;
    var valid = document.forms["signUpForm"]["check"].value;

    var allUsersList = [];
    client.get("http://localhost:8080/user/all-users",function(response){
        allUsersList=JSON.parse(response);
        console.log(response);
    });

    for(var i = 0; i<allUsersList.length;i++){
            if(allUsersList[i].userName === un) {
                window.alert("This username is taken.");
                document.forms["signUpForm"].setAttribute("action","http://localhost:63342/star_tech_industries/sign-up-form.html");
            }
        }

    if(pw===valid) {

        client.post('http://localhost:8080/user/create', JSON.stringify({
            userName: un,
            password: pw
        }), function(response) {
            console.log(response.status);
        });
    }
    else{
        window.alert('Passwords must match!');
        document.forms["signUpForm"].setAttribute("action","http://localhost:63342/star_tech_industries/sign-up-form.html");
    }

}

function validateUser(theForm){
    var un    = document.forms["loginForm"]["userName"].value;
    var pw    = document.forms["loginForm"]["password"].value;

    var unExists=false;
    var pwExists=false;

    var allUsersList = [];
    client.get("http://localhost:8080/user/all-users",function(response){
        allUsersList=JSON.parse(response);
        console.log(response);
    });

    for(var i = 0; i<allUsersList.length;i++){
        if(allUsersList[i].userName === un) {
            unExists = true;
            // currentUserId = allUsersList[i].id;
        }
        if(allUsersList[i].password === pw)
            pwExists = true;
    }

    if(unExists==false || pwExists==false){
        window.alert("Your username or password is incorrect!");
        document.forms["loginForm"].setAttribute("action","http://localhost:63342/star_tech_industries/login-form.html");
    }

}



