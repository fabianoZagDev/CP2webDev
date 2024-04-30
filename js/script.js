

function calculadora(garrafa_valor, garrafa_quantidade, tem_desconto= false, desconto= 0.0){
    
    if (tem_desconto){
        return garrafa_valor * garrafa_quantidade * desconto
    }
    else{
        return garrafa_valor * garrafa_quantidade;
    }     
}

function login(){

    var login = document.getElementById('Login').value;
    var senha = document.getElementById('Senha').value;

    if(login == "1234" && senha == "1234"){
        alert('Sucesso');
    }else{
        alert("Usuario ou senha incorretos");
    }

}
