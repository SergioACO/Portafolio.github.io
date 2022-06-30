
var cambiarUno =(id) =>{
    let element = document.querySelector(`#${id}`)
    element.classList.remove("estiloDos","estiloTres")
    element.classList.add("estiloUno")
}

var cambiarDos =(id) =>{
    let element = document.querySelector(`#${id}`)
    element.classList.remove("estiloUno","estiloTres")
    element.classList.add("estiloDos")
}

var cambiarTres =(id) =>{
    let element = document.querySelector(`#${id}`)
    element.classList.remove("estiloDos","estiloUno")
    element.classList.add("estiloTres")
}

