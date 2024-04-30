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

var vinhos
var vinho
var tem_desconto = false
var desconto = 1
var idVinho
var total

async function carregarVinho(){
    

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
    const valorDigitado = qtd_vinho_element.value

    if(valorDigitado > vinho['estoque']){
        qtd_vinho_element.value = vinho['estoque']
    }
}

function aplicarDesconto(){
    const cupom = cupom_element.value

    if(cupom == "webdev"){
        desconto = 0.10
        tem_desconto = true

        alert(`Parabéns! Você recebeu ${desconto * 100}% de desconto.`)
    }else{
        desconto = 1
        tem_desconto = false
    }
    
    verificarTotal()
}

function verificarTotal(){
    const qtdVinhos = qtd_vinho_element.value
    total = calculadora(vinho['preco'], qtdVinhos, tem_desconto, desconto)

    total_element.innerText = total
}


function adicionaCarrinho(){

    const qtdVinhos = qtd_vinho_element.value

    const alerta = qtdVinhos > 1 ? `Você adicionou ${qtdVinhos} vinhos no seu carrinho, com um valor total de R$${total}.` : `Você adicionou um vinho no seu carrinho, com um valor total de R$${total}.`
    alert(alerta)
    
}

function calculadora(garrafa_valor, garrafa_quantidade, tem_desconto= false, desconto= 1){
    
    if (tem_desconto){
        return (garrafa_valor * garrafa_quantidade - ((garrafa_valor * garrafa_quantidade) * desconto)).toFixed(2)
    }
    else{
        return (garrafa_valor * garrafa_quantidade).toFixed(2);
    }     
}