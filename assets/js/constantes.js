

const selecAnimal = document.querySelector("#animal")
const selecEdad = document.querySelector("#edad")
const comentarios = document.querySelector("#comentarios")
const preview = document.querySelector("#preview")
const btnRegistrar = document.querySelector("#btnRegistrar")
const player = document.querySelector("#player")
const exampleModal = document.querySelector("#exampleModal")
const divAnimales = document.querySelector("#contenedorAnimales");
const modalBody = document.querySelector("#modalBody")

const imagenes = {
    "Leon": "./assets/imgs/Leon.png",
    "Lobo": "./assets/imgs/Lobo.jpg",
    "Oso": "./assets/imgs/Oso.jpg",
    "Serpiente": "./assets/imgs/Serpiente.jpg",
    "Águila": "./assets/imgs/Aguila.png"
};

export{selecAnimal,selecEdad,comentarios,preview,btnRegistrar,player,exampleModal,divAnimales,modalBody,imagenes,}