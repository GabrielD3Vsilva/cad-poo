//Valores provenientes dos inputs

const yourName = document.querySelector('#yourName');
const yourEmail = document.querySelector('#yourEmail');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
let list = [];


//Função construtora de usuário a ser validado

const user = function (yourName, yourEmail, password, array) {
    this.yourName = yourName;
    this.yourEmail = yourEmail;
    this.password = password;
}

export default {
    yourName,
    yourEmail,
    password,
    confirmPassword,
    list,
    user
}