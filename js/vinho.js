// Dados dos vinhos
const vinhos = await (await fetch("../data/vinhos.json")).json()
 

// Declarando os elementos de input
const nome_element = document.getElementById("nome")
const cupom_element = document.getElementById("cupom-id")
const vinho_img_element = document.getElementById("vinho-img")
const nome_uva_element = document.getElementById("nome-uva")
const subtitulo_element = document.getElementById("subtitulo")
const preco_element = document.getElementById("preco")
const descricao_element = document.getElementById("descricao")
const origem_nome_element = document.getElementById("nome-origem")
const origem_img_element = document.getElementById("img-pais")
const qtd_vinho_element = document.getElementById("qtd-vinho")

var tem_desconto = false
var desconto = 0.0
var idVinho

async function carregarVinho(){
    
    // Obtem o ID do vinho
    idVinho = new URLSearchParams(document.location.search).get("nome")
    
    // Procura o vinho no JSON
    const vinho = vinhos[idVinho]

    // Altera os elementos para os valores dos dados obtidos do JSON
    nome_element.innerText = vinho['nome']
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

    const vinho = vinhos[idVinho]

    if(valorDigitado > vinho['estoque']){
        qtd_vinho_element.value = vinho['estoque']
    }
}

function aplicarDesconto(){
    const cupom = cupom_element.value

    if(cupom == "webdev"){
        desconto = 0.10
        tem_desconto = true
    }else{
        desconto = 0.0
        tem_desconto = false
    }

}


function adicionaCarrinho(){

    const qtdVinhos = qtd_vinho_element.value

    calculadora()
    

}
