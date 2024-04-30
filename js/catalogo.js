var vinhos

async function carregarCatalogo(){
    vinhos = await (await fetch("../data/vinhos.json")).json()
    
    const keys = Object.keys(vinhos)
    
    for (key of keys){
        criarItem (key)    
    }
}

function criarItem (key){
    const catalogoDiv = document.getElementById("catalogo")
    
    let novoItem = document.createElement("a")
    novoItem.setAttribute("href", `vinho.html?nome=${key}`)
    let divBox = document.createElement("div")
    divBox.setAttribute("class", "boxVinho")
    novoItem.appendChild(divBox)


    divBox.innerHTML = 
    `<img src="../assets/${vinhos[key]["imagem_vinho"]}" alt="imagem do vinho">
    <div class="infosVinho">
        <div class="container-textos">
            <p class="nomeVinho">${vinhos[key]["nome"]}</p>
            <p class="precoVinho">R$: ${vinhos[key]["preco"]}</p>         
      
        </div>      
        <div class="origem">
            <img src="../assets/${vinhos[key]["bandeira_pais_origem"]}" alt="bandeira Origem" class="bandeiraVinho">
            <p>
                ${vinhos[key]["pais_origem"]}
            </p>
        </div>
    </div>`
    
    catalogoDiv.appendChild(novoItem)
}    