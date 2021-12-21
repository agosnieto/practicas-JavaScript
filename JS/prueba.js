class Demografia{
    constructor(id, nombre, habitantes, moneda){
        this.id = id
        this.nombre = nombre
        this.habitantes = parseInt(habitantes)
        this.moneda = moneda
    }
}

let demografiaA = {id:1, nombre: "Alemania", habitantes: 35509, moneda:"euro"};
let demografiaB = {id:2, nombre: "Sudafrica", habitantes: 480987, moneda:"rand"};
let demografiaC = new Demografia (3,"Argentina", 480500, "peso argentino")
let demografiaD = new Demografia(4,"Brasil", 243567,"real")
let demografiaE = new Demografia(5,"Rusia", 6743875, "rublo")
let demografiaF = new Demografia(6,"Argelia", 23456, "dinar")
let demografiaG = new Demografia(7,"Suecia", 19876, "corona")
let demografiaH = new Demografia(8,"Francia",65000, "euro")
let demografiaI = new Demografia(9,"Chile", 56123, "peso chileno")

const demografiaTotal=[demografiaA, demografiaB, demografiaC,demografiaD,demografiaE,demografiaF,demografiaG,demografiaH,
demografiaI]

let muestra = document.getElementById('muestra')
for(const country of demografiaTotal){
    let presentacion = document.createElement('div')
    presentacion.innerHTML = `<h2> ${country.nombre} </h2>
                            <p> Cantidad de Habitantes: ${country.habitantes}</p>
                            <p> Moneda Oficial: ${country.moneda}</p>`

    muestra.appendChild(presentacion)
}

let subtitulo = document.createElement("h2")
subtitulo.innerHTML = "<h2>Paises del Mundo</h2>";
document.body.prepend(subtitulo);

let padre = document.getElementById("ciudades");
let ciudades = ["Berlín","Damasco","Quebec","Paris","Boston","Oxfort"]
for( const ciudad of ciudades){
    let ol = document.createElement("ol")
    ol.innerHTML = ciudad
    padre.appendChild(ol);
}

//Paises ordenados de acuerdo a la cantidad de habitantes de mayor a menor
ordenarMayor = demografiaTotal.map(elemento => elemento);
let ordenadosHabitantes = demografiaTotal;
ordenarMayor.sort(function(a,b){
    return b.habitantes - a.habitantes
});
console.log(ordenarMayor)

