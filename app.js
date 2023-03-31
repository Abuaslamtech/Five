//VARIABLE DECLARATION
const fullname = document.getElementById("fullname");
const password = document.getElementById("password");
const signupBtn = document.getElementById("signupBtn");
const link = document.getElementById("link");
// FORM VALIDATION FUNCTION
function validateForm() {
  if (password.value.length < 6) {
    password.style.border = " 2px solid red";
    alert("password can't be less than 6");
  } else {
    password.style.border = " 2px solid green";
  }
  if (fullname.value.length === 0) {
    fullname.style.border = " 2px solid red";
    alert("name cannot be empty");
  } else {
    fullname.style.border = " 2px solid green";
  }
  if (email.value.length === 0) {
    email.style.border = " 2px solid red";
    alert("email cannot be empty");
  } else {
    email.style.border = " 2px solid green";
  }
  if (
    password.value.length >= 6 &&
    fullname.value.length != 0 &&
    email.value.length != 0
  ) {
    link.href = "./products.html";
    console.log(resetBtn);
  }
}
//event listener
signupBtn.addEventListener("click", validateForm);
console.log(link);
