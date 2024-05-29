function storeresult() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var name = document.getElementById("name");
    var dateofbirth = document.getElementById("birthdate");
    var details=[];
    var info= {
        "email":email.value,
        "password":password.value,
        "name":name.value,
        "dateofbirth": dateofbirth.value
    };
    let user = JSON.parse(localStorage.getItem("details")|| '[]');
    user.push(info);
    localStorage.setItem("details", JSON.stringify(user));
    location.replace("http://127.0.0.1:5502/signup/login.html");
}

function verifyresult1(){
    var emaillogin = document.getElementById("emaillogin").value;
    if (localStorage.getItem("email") != null) {
        var credentials = JSON.parse(localStorage.getItem("email"));
    }
    for (var i = 0; i < credentials.length; i++) {
        var credentia = credentials[i];
        if(emaillogin===credentia){
            alert("Check username and password again");
        }
    }
}

function verifyresult() {
    var passwordlogin = document.getElementById("passwordlogin");
    var emaillogin = document.getElementById("emaillogin");
if (localStorage.getItem("details") != null) {
    var credentials = JSON.parse(localStorage.getItem("details"));
}
for (var i = 0; i < credentials.length; i++) {
var credentia = credentials[i];
 if((passwordlogin.value==credentia.password && emaillogin.value==credentia.email)||(passwordlogin.value==credentia.password && emaillogin.value==credentia.name)){

   location.replace("http://127.0.0.1:5502/index.html");
   return;
}
}
alert("Check username and password again");
}