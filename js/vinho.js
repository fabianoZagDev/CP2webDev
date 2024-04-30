// Declarando as variaveis locais
var vinhos
var vinho
var tem_desconto = false
var desconto = 1
var idVinho
var total

// Declarando os elementos de input
const nome_element = document.getElementById("nome")
const cupom_element = document.getElementById("cupom-id")
const vinho_img_element = document.getElementById("vinho-img")
const nome_uva_element = document.getElementById("nome-uva")
const subtitulo_element = document.getElementById("subtitulo")
const preco_element = document.getElementById("preco")
const total_element = document.getElementById("total")
const descricao_element = document.getElementById("descricao")
const origem_nome_element = document.getElementById("nome-origem")
const origem_img_element = document.getElementById("img-pais")
const qtd_vinho_element = document.getElementById("qtd-vinho")

async function carregarVinho(){
    // Obtem e armazena a lista de vinhos
    vinhos = await (await fetch("../data/vinhos.json")).json()
    // Obtem o ID do vinho
    idVinho = new URLSearchParams(document.location.search).get("nome")
    // Procura o vinho no JSON
    vinho = vinhos[idVinho]

    // Altera os elementos para os valores dos dados obtidos do JSON
    nome_element.innerText = vinho['nome']
    total_element.innerText = vinho['preco']
    vinho_img_element.src = `../assets/${vinho['imagem_vinho']}`
    nome_uva_element.innerText = vinho['uva']
    subtitulo_element.innerText = vinho['subtitulo']
    preco_element.innerText = vinho['preco']
    descricao_element.innerText = vinho['descricao']
    origem_nome_element.innerText = vinho['pais_origem']
    origem_img_element.src = `../assets/${vinho['bandeira_pais_origem']}`
    qtd_vinho_element.max = vinho['estoque']
}

function verificarEstoque(){
    // Obtem o valor digitado no campo quantidade
    const valorDigitado = qtd_vinho_element.value

    // Verifica se o valor e maior do que o disponivel em estoque
    if(valorDigitado > vinho['estoque']){
        // Altera para o valor maximo do estoque
        qtd_vinho_element.value = vinho['estoque']
    }
}

function aplicarDesconto(){
    // Recebe o valor digitado no campo cupom
    const cupom = cupom_element.value

    // Verifica se o valor e igual a "webdev"
    if(cupom == "webdev"){
        // Aplica o desconto
        desconto = 0.10
        tem_desconto = true

        alert(`Parabéns! Você recebeu ${desconto * 100}% de desconto.`)
    }else{
        // Retira o desconto
        desconto = 1
        tem_desconto = false
    }
    
    verificarTotal()
}

function verificarTotal(){
    // Recebe a quantidade de vinhos
    const qtdVinhos = qtd_vinho_element.value
    
    // Utiliza a calculadora para obter o total
    total = calculadora(vinho['preco'], qtdVinhos, tem_desconto, desconto)

    // Altera o valor do total na pagina
    total_element.innerText = total
}


function adicionaCarrinho(){

    // Recebe a quantidade digitada
    const qtdVinhos = qtd_vinho_element.value

    // Monta o alerta
    const alerta = qtdVinhos > 1 ? `Você adicionou ${qtdVinhos} vinhos no seu carrinho, com um valor total de R$${total}.` : `Você adicionou um vinho no seu carrinho, com um valor total de R$${total}.`
    
    // Dispara o alerta
    alert(alerta)
}

function calculadora(garrafa_valor, garrafa_quantidade, tem_desconto= false, desconto= 1){
    // Verifica se tem desconto
    if (tem_desconto){
        // Se tiver retorna o valor total com desconto
        return (garrafa_valor * garrafa_quantidade - ((garrafa_valor * garrafa_quantidade) * desconto)).toFixed(2)
    }

    // Retorna o valor sem desconto
    return (garrafa_valor * garrafa_quantidade).toFixed(2);  
}