const API_ADD_USER = "http://localhost:7777/api/users/create";

const signupUser = document.querySelector(".signup-user");
const userName = document.querySelector(".user-name");
const userMobile = document.querySelector(".user-number");
const userEmail = document.querySelector(".user-email");
const userPassword = document.querySelector(".user-password");
const userPasswordConfirm = document.querySelector(".user-password-confirm");

const signupMechanic = document.querySelector(".signup-mechanic");
const mechanicName = document.querySelector(".mechanic-name");
const mechanicMobile = document.querySelector(".mechanic-number");
const mechanicEmail = document.querySelector(".mechanic-email");
const mechanicPassword = document.querySelector(".mechanic-password");
const mechanicPasswordConfirm = document.querySelector(
  ".mechanic-password-confirm"
);
const mechanicLocation = document.querySelector(".mechanicLocation");

const addMechanic = async (e) => {
  e.preventDefault();
  const name = mechanicName.value;
  const email = mechanicEmail.value;
  const mobile = mechanicMobile.value;
  const password = mechanicPassword.value;
  const confirmPassword = mechanicPasswordConfirm.value;
  const location = mechanicLocation.value;

  if (
    !name ||
    !email ||
    !mobile ||
    !password ||
    !confirmPassword ||
    !location
  ) {
    alert("Please enter all the fields");
    return;
  }

  if (password !== confirmPassword) {
    alert("Please match password and confirm match");
    return;
  }

  const payload = {
    name,
    email,
    mobile,
    password,
    location,
    role: "mechanic",
  };

  const response = await fetch(API_ADD_USER, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (response.status === 400) {
    alert(data.message);
    return;
  }

  if (response.status === 200) {
    alert(data.message);
    return;
  }
  console.log(data);
};

signupMechanic.addEventListener("click", addMechanic);
