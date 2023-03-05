// declaring variables for the pages
const login = document.getElementById("login");
const register = document.getElementById("register");
const reset = document.getElementById("reset");
// declaring variables for links
const signin = document.getElementById("signin");
const signup = document.getElementById("signup");
const fPassword = document.getElementById("fPassword");
const signinR = document.getElementById("signinR");
// buy button
const buy = document.getElementsByClassName("buy");
console.log(buy);
// function to show registration page
const showReg = () => {
  login.classList.add("hide");
  register.classList.remove("hide");
};
// function to show the reset password page
const showReset = () => {
  login.classList.add("hide");
  register.classList.add("hide");
  reset.classList.remove("hide");
};
// function to show login page
const showSignin = () => {
  login.classList.remove("hide");
  reset.classList.add("hide");
};
// hide pages and display other on click event
signup.addEventListener("click", showReg);
fPassword.addEventListener("click", showReset);
signin.addEventListener("click", showSignin);
signinR.addEventListener("click", showSignin);
