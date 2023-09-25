function loginDetails(){
    var username = document.getElementById("username");
    var userpassword = document.getElementById("password");

    var name = username.value;
    var password = userpassword.value;

    

    if(name == password && name.length > 1){
        alert("Login Successfully!!!");
        localStorage.setItem("loginStatus","true");
    }else{
        alert("Please enter valid credentials. That means enter more than one character");
    }
}

var loginStatus = localStorage.getItem("loginStatus");
if(loginStatus == "true"){
    location.href = "./orders.html"
}