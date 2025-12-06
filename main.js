let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

//===== function for click feature========

eyeicon.onclick = function () {
  if (password.type == "password") {
    password.type = "text";
    eyeicon.type = "visibility.png";
  } else {
    password.type = "password";
    eyeicon.type = "visibility_off.png";
  }
};
