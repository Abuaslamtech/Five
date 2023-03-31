//VARIABLE DECLARATION
const password = document.getElementById("password");
const cPassword = document.getElementById("cPassword");
const resetBtn = document.getElementById("resetBtn");
const email = document.getElementById("email");
const link = document.getElementById("link");
// FORM VALIDATION FUNCTION
function validateForm() {
  if (password.value.length < 6) {
    password.style.border = " 2px solid red";
    alert("password can't be less than 6");
  } else {
    password.style.border = " 2px solid green";
  }
  if (email.value.length === 0) {
    email.style.border = " 2px solid red";
    alert("email cannot be empty");
  } else {
    email.style.border = " 2px solid green";
  }
  if (cPassword.value.length === 0) {
    cPassword.style.border = " 2px solid red";
    alert("Password cannot be empty");
  } else if (cPassword.value != password.value) {
    alert("Password does not match");
  } else {
    cPassword.style.border = " 2px solid green";
  }

  if (
    password.value.length >= 6 &&
    cPassword.value === password.value &&
    email.value.length != 0
  ) {
    link.href = "./products.html";
    console.log(link);
  }
}

//event listener
resetBtn.addEventListener("click", validateForm);
