let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

//===== function for click feature ========

eyeicon.onclick = function () {
  if (password.type === "password") {
    password.type = "text";
    eyeicon.src = "images/visibility.png"; 
  } else {
    password.type = "password";
   eyeicon.src = "images/visibility_off.png";
  }
};
