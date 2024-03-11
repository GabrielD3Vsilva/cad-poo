function findEmptyInputs(yourName, yourEmail, password, confirmPassword) {
    if(yourName.value == "", yourEmail.value == "", password.value == "", confirmPassword.value == "") {
        console.log('vazio');
    } else {
        console.log('ok');
    }
}

export default {findEmptyInputs: findEmptyInputs}