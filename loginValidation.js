//VARIABLE DECLARATION
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
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

  if (password.value.length >= 6 && email.value.length != 0) {
    link.href = "./products.html";
    console.log(link);
  }
}

//event listener
loginBtn.addEventListener("click", validateForm);
