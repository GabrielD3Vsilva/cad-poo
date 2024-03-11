import validator from "./validator.js";
import dataUsers from "./dataUsers.js";

const btnCreateUser = document.querySelector(".btnCreateUser");

btnCreateUser.addEventListener("click", () =>validator.findEmptyInputs(dataUsers.yourName, dataUsers.yourEmail, dataUsers.password, dataUsers.confirmPassword));