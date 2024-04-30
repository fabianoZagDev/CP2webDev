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
    
    let novoItem = document.createElement("div")
    
}