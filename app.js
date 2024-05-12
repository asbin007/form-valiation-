const form = document.getElementById("form").value;
const username = document.getElementById("username").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const password2 = document.getElementById("confirm-password").value;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

const setError = (element, message) => {
  const inputControl = inputControl.querySelector(".error");
  errorDisplay.innerText = message;
  inputControl.classlist.add("error");
  inputControl.classlist.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = "";
  inputControl.classlist.add("success");
  inputControl.classlist.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const usernameValue = username.ariaValueMax.trim();
  const emailValue = email.ariaValueMax.trim();
  const passwordValue = password.ariaValueMax.trim();
};

if (usernameValue === "") {
  setError("Please enter username");
} else {
  setSuccess(username);
}

if (emailValue === "") {
  setError("Please enter email");
} else if (!isValidEmail(emailValue)) {
  setError("Please enter valid email");
} else {
  setSuccess(email);
}

if (passwordValue === "") {
  setError(password, "Password is required");
} else if (passwordValue.length < 8) {
  setError(password, "Password must be at least 8 character.");
} else {
  setSuccess(password);
}

if (password2Value === "") {
  setError(password2, "Please confirm your password");
} else if (password2Value !== passwordValue) {
  setError(password2, "Passwords doesn't match");
} else {
  setSuccess(password2);
}
