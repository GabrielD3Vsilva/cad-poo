//Função de validação para caso haja algum input vazio

function findEmptyInputs(yourName, yourEmail, password, confirmPassword, list, constructor) {
    if(yourName.value == "" || yourEmail.value == "" || password.value == "" || confirmPassword.value == "") {
       yourName.value = '' , yourEmail.value = '' , password.value = '' , confirmPassword.value = '';
        document.querySelector('.error-box').innerHTML = `<h3>Preencha todos os campos e tente novamente.</h3>`
    } else {
        ComparePasswords(yourName, yourEmail, password, confirmPassword, list, constructor);
    }
}


//Função para validar se as senhas são iguais

function ComparePasswords (yourName, yourEmail, password, confirmPassword, list, constructor) {
    if(confirmPassword.value !== password.value) {
        password.value = "", confirmPassword.value = "";
        document.querySelector('.error-box').innerHTML = `<h3>As senhas não coincidem.</h3>`
    } else {
        checkIfUserExist(yourName, yourEmail, password, list, constructor)
    }
}


//Função para verificar se há usuário já existente com os mesmos dados

function checkIfUserExist (yourName, yourEmail, password, list, constructor) {
    const userProfile = new constructor(yourName.value, yourEmail.value, password.value);
    
    let found = false;

    for (let i = 0; i < list.length; i++) {
        if (JSON.stringify(userProfile) === JSON.stringify(list[i])) {
            document.querySelector('.error-box').innerHTML = `<h3>Usuário já existente</h3>`;
            yourName.value = '' , yourEmail.value = '' , password.value = '';
            found = true;
            break;
        }
    }

    if(!found) {
        list.push(userProfile);
    }
    
}

export default {
    findEmptyInputs: findEmptyInputs
}