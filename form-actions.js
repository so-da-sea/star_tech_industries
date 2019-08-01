
function getServiceBaseUrl() {
    if (window.location.hostname === 'star-tech-planners.herokuapp.com') {
        return 'https://star-tech-service.herokuapp.com/';
    } else {
        return  'http://localhost:8080/';
    }
}

function getUIBuildURL(path, item) {
    if (path === undefined) path = '';
    var url;
    if (window.location.hostname === 'star-tech-planners.herokuapp.com') {
        url = 'https://star-tech-planners.herokuapp.com/';
    } else {
        url = 'http://localhost:63342/star_tech_industries/'; //        url = 'http://localhost:63342/ccf/star_tech_industries/';
    }
    item.href = url + path;
}

function rollBackForInvalid(path) {
    if (path === undefined) path = '';
    var url;
    if (window.location.hostname === 'star-tech-planners.herokuapp.com') {
        url = 'https://star-tech-planners.herokuapp.com/';
    }
    else {
        url = 'http://localhost:63342/star_tech_industries/'; //        url = 'http://localhost:63342/ccf/star_tech_industries/';
    }
    return url + path;
}

window.onload = function () {
    var url;
    if (window.location.hostname === 'star-tech-planners.herokuapp.com') {
        url = 'https://star-tech-planners.herokuapp.com/';
    } else {
        url = 'http://localhost:63342/star_tech_industries/';
    }
    if (document.signUpForm !== undefined)
        document.signUpForm.action = url + 'index.html';
    if (document.loginForm !== undefined)
        document.loginForm.action = url + 'index.html';
};

var HttpClient = function () {
    this.get = function (aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function () {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, false ); //async should be false //DETRIMENTAL!!!!!?
        anHttpRequest.send( null );
    }

    this.post = function (aUrl, requestBody, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function () {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open("POST", aUrl, true);
        anHttpRequest.setRequestHeader("Content-Type", "application/json");
        anHttpRequest.send(requestBody);

        anHttpRequest.onerror = function () { // only triggers if the request couldn't be made at all
            alert(`Network Error`);
        };
    }

    // this.delete = function(aUrl, requestBody, aCallback){
    //     var anHttpRequest = new XMLHttpRequest();
    //     anHttpRequest.onreadystatechange = function(){
    //         if(anHttpRequest.readyState==4 && anHttpRequest.status ==200)
    //             aCallback(anHttpRequest.responseText);
    //     }
    //
    //     anHttpRequest.open( "DELETE", aUrl, true );
    //     anHttpRequest.setRequestHeader("Content-Type","application/json");
    //     anHttpRequest.send( null );
    // }
};

var client = new HttpClient();
var currentUserId = 0;

function createUser(theForm) {
    var un = document.forms["signUpForm"]["userName"].value;
    var pw = document.forms["signUpForm"]["password"].value;
    var valid = document.forms["signUpForm"]["check"].value;

    var allUsersList = [];
    client.get(getServiceBaseUrl() + "user/all-users", function (response) {
        allUsersList = response;
        //console.log(response);
    });

    for(var i = 0; i<allUsersList.length;i++){
            if(allUsersList[i].userName === un) {
                window.alert("This username is taken.");
                document.forms["signUpForm"].setAttribute("action", rollBackForInvalid("sign-up-form.html"));
            }
        }

    if (pw === valid) {

        client.post(getServiceBaseUrl() + 'user/create', JSON.stringify({
            userName: un,
            password: pw
        }), function (response) {
            console.log(response.status);
        });

        // var currentUserName = allUsersList[allUsersList.length-1].userName;
        // localStorage.setItem('currentUserN',currentUserName);
        // var currentUserId = allUsersList[allUsersList.length-1].id;
        // sessionStorage.setItem('currentUserID',currentUserId);
    }
    else{
        window.alert('Passwords must match!');
        document.forms["signUpForm"].setAttribute("action", rollBackForInvalid("sign-up-form.html"));
    }
}

function validateUser(theForm) {
    var un = document.forms["loginForm"]["userName"].value;
    var pw = document.forms["loginForm"]["password"].value;

    var unExists = false;
    var pwExists = false;

    var allUsersList = [];
    client.get(getServiceBaseUrl() + "user/all-users", function (response) {
        allUsersList = JSON.parse(response);
        console.log(response);
    });

    for (var i = 0; i < allUsersList.length; i++) {
        if (allUsersList[i].userName === un) {
            unExists = true;
            var currentUserName = allUsersList[i].userName;
            sessionStorage.setItem('currentUserN',currentUserName);
            var currentUserId = allUsersList[i].id;
            sessionStorage.setItem('currentUserID',currentUserId);
            //setUserId(allUsersList[i].id);
        }
        if (allUsersList[i].password === pw)
            pwExists = true;
    }

    if (unExists == false || pwExists == false) {
        window.alert("Your username or password is incorrect!");
        document.forms["loginForm"].setAttribute("action", rollBackForInvalid("login-form.html"));
    }
}

function getUserId() {
    return currentUserId;
}

function setUserId(id) {
    currentUserId = id;
    document.getElementById("welcome").innerHTML = "Welcome, user " + currentUserId;
}







