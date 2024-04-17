
import{selecAnimal,selecEdad,comentarios,preview,btnRegistrar,player,exampleModal,divAnimales,modalBody,imagenes,} from "./constantes.js"

class Animal {
    #nombre
    #edad
    #img
    #comentarios
    #sonido
    constructor(nombre, edad, img, comentarios, sonido) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.img = img;
        this.#comentarios = comentarios;
        this.#sonido = sonido;
    }

    get nombre() {
        return this.#nombre
    }
    get edad() {
        return this.#edad
    }
    get img() {
        return this.#img
    }
    get comentarios() {
        return this.#comentarios
    }
    get sonido() {
        return this.#sonido
    }

    set nombre(nuevoNombre) {
        this.#nombre = nuevoNombre
    }
    set edad(nuevaEdad) {
        this.#edad = nuevaEdad
    }
    set img(nuevaImg) {
        this.#img = nuevaImg
    }
    set comentarios(nuevoComentarios) {
        this.#comentarios = nuevoComentarios
    }
    set sonido(nuevoSonido) {
        this.#sonido = nuevoSonido
    }
    pintarHTML() {
        console.log("estoy pintando al personaje")
    }
}



class Leon extends Animal {
    Rugir() {
        console.log("el Leon está rugiendo")
    }
    pintarHTML(elemento) {
        console.log(`Estoy pintando a ${this.nombre}`);
        const imagenSrc = imagenes[this.nombre];
        this.img = imagenSrc;
        elemento.innerHTML += `
            <div>
                <img src="${imagenSrc}" alt="${this.nombre}" class="img-fluid" style="width: px; height: auto;">
            </div>
        `;
    };
};

class Lobo extends Animal {
    Aullar() {
        console.log("el Lobo está Aullando")
    }
    pintarHTML(elemento) {
        console.log(`Estoy pintando a ${this.nombre}`);
        const imagenSrc = imagenes[this.nombre];
        this.img = imagenSrc;
        elemento.innerHTML += `
            <div >
                <img src="${imagenSrc}" alt="${this.nombre}" class="img-fluid" style="width: px; height: auto;">
            </div>
        `;
    }
};
class Oso extends Animal {
    Gruñir() {
        console.log("el Oso está Gruñendo")
    }
    pintarHTML(elemento) {
        console.log(`Estoy pintando a ${this.nombre}`);
        const imagenSrc = imagenes[this.nombre];
        this.img = imagenSrc;
        elemento.innerHTML += `
            <div >
                <img src="${imagenSrc}" alt="${this.nombre}" class="img-fluid" style="width: px; height: auto;">
            </div>
        `;
    }
};
class Serpiente extends Animal {
    Sisear() {
        console.log("La Serpiente está siseando")
    }
    pintarHTML(elemento) {
        console.log(`Estoy pintando a ${this.nombre}`);
        const imagenSrc = imagenes[this.nombre];
        this.img = imagenSrc;
        elemento.innerHTML += `
            <div >
                <img src="${imagenSrc}" alt="${this.nombre}" class="img-fluid" style="width: px; height: auto;">
            </div>
        `;
    }
};
class Aguila extends Animal {
    Chillar() {
        console.log("El Aguila está chillando")
    }
    pintarHTML(elemento) {
        console.log(`Estoy pintando a ${this.nombre}`);
        const imagenSrc = imagenes[this.nombre];
        const soundsSrc = sounds[this.nombre];
        this.img = imagenSrc;
        elemento.innerHTML += `
            <div >
                <img src="${imagenSrc}" alt="${this.nombre}" class="img-fluid" style="width: px; height: auto;">
            </div>
        `;
    }
};

let animalesData = [];
function procesarDatosAnimales() {
};

(async () => {
    try {
        const response = await fetch("animales.json")
        if (response.ok === false) {
            console.log("No se encuentra el animal")
            throw {
                codigo: 404,
                mensaje: "No existen animales"
            }
        }
        const data = await response.json()
        animalesData = data.animales;

        procesarDatosAnimales();
    } catch (error) {
        console.log("error")
    }
})();

// Función para mostrar la vista previa de la imagen
function mostrarVistaPrevia() {
    const animalSeleccionado = selecAnimal.value;
    const imagenSrc = imagenes[animalSeleccionado];
    if (imagenSrc) {
        preview.innerHTML = `<img src="${imagenSrc}" alt="${animalSeleccionado}" class="img-fluid imagen-previa">`;
    } else {
        preview.innerHTML = "";
    }
}

// Evento de cambio para el select de animal
selecAnimal.addEventListener("change", mostrarVistaPrevia);


btnRegistrar.addEventListener("click", () => {


    console.log(selecAnimal.value)
    console.log(selecEdad.value)
    console.log(comentarios.value)

    const animalEncontrado = animalesData.find((item) => item.name.toLowerCase() === selecAnimal.value.toLowerCase());

    switch (selecAnimal.value.toLowerCase()) {
        case "leon":
            const leon = new Leon(animalEncontrado.name, animalEncontrado.edad, animalEncontrado.img, comentarios.value, animalEncontrado.sonido)
            leon.pintarHTML(divAnimales)
            leon.Rugir()
            break;
        case "lobo":
            const lobo = new Lobo(animalEncontrado.name, animalEncontrado.edad, animalEncontrado.img, comentarios.value, animalEncontrado.sonido)
            lobo.pintarHTML(divAnimales)
            lobo.Aullar()
            break;
        case "oso":
            const oso = new Oso(animalEncontrado.name, animalEncontrado.edad, animalEncontrado.img, comentarios.value, animalEncontrado.sonido)
            oso.pintarHTML(divAnimales)
            oso.Gruñir()
            break;
        case "serpiente":
            const serpiente = new Serpiente(animalEncontrado.name, animalEncontrado.edad, animalEncontrado.img, comentarios.value, animalEncontrado.sonido)
            serpiente.pintarHTML(divAnimales)
            serpiente.Sisear()
            break;
        case "aguila":
            const aguila = new Aguila(animalEncontrado.name, animalEncontrado.edad, animalEncontrado.img, comentarios.value, animalEncontrado.sonido)
            aguila.pintarHTML(divAnimales)
            aguila.Chillar()
            break;

    }

    selecAnimal.selectedIndex = 0;
    selecEdad.selectedIndex = 0;
    comentarios.value = "";
    preview.innerHTML = "";

});

