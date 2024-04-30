
function login(){

    var login = document.getElementById('Login').value;
    var senha = document.getElementById('Senha').value;

    if(login == "1234" && senha == "1234"){
        alert('Sucesso');
    }else{
        alert("Usuario ou senha incorretos");
    }

}

