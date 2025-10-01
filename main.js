const listaMacro=[]
let listaRondas=[]
let listaFiltrada= listaMacro
let jugadores=[]
let idUnico=0

function agregarFutbolista(nombre,pais,liga,activo){
    let jugador = {
        nombre: nombre,
        pais: pais,
        liga: liga,
        activo: activo,
    }
    listaMacro.push(jugador)
}

function filtrarPorPais(pais){
    for (let i=0;i<listaMacro.length;i++){
        let pos= listaMacro[i]
        if (pos.pais!==pais){
            listaFiltrada.splice(i,1)
        }
    }
}

function filtrarPorLiga(liga){
    for (let i=0;i<listaMacro.length;i++){
        let pos= listaMacro[i]
        if (pos.liga!==liga){
            listaFiltrada.splice(i,1)
        }
    }
}


function filtrarPorActivo(activo){
    for (let i=0;i<listaMacro.length;i++){
        let pos= listaMacro[i]
        if (pos.activo!==activo){
            listaFiltrada.splice(i,1)
        }
    }
}

function reiniciarFiltrado(){
    listaFiltrada= listaMacro
}

function crearJugador(nombre){
    let jugador={
        id: idUnico++,
        nombre: nombre,
    }
    jugadores.push(jugador)
}

let cantidadJugadores= document.getElementById("cantidadJugadores")
let botonAgregarJugador= document.getElementById("agregarJugador")


function creacionJugadores(){
    listaJugadores=[]
    let numero=0
    let cantidad= cantidadJugadores.ariaValueMax
    for (let i=0;i<cantidad;i++){
        let jugador={id:numero++,nombre:"jugador"+numero++,futbolista:""}
        jugadores.push(jugador)
    }
}

let cantidadRondas= document.getElementById("cantidadRondas")
let botonSiguente= document.getElementById("siguiente")
botonSiguente.addEventListener("click",generarRondas)


function generarRondas() {
    listaRondas = [];
    creacionJugadores()
    for (let r = 0; r < cantidadRondas; r++) {
        let rondaJugadores = jugadores.map(j => ({ ...j }));
        let impostorIndex = Math.floor(Math.random() * rondaJugadores.length);
        rondaJugadores[impostorIndex].futbolista = "Impostor";
        listaRondas.push(rondaJugadores);
    }
}

function cambiarNombreJugador(id,nuevoNombre){
    for (let i=0;i<rondaJugadores.length;i++){
        let pos= rondaJugadores[i]
        if (pos.id===id){
            pos.nombre=nuevoNombre
        }
    }
}

function filtrarActivo(){
    for (let i=0;i<listaFiltrada.length;i++){
        let pos= listaFiltrada[i]
        if (pos.activo===false){
            listaFiltrada.splice(i,1)
        }
    }
}

function filtrarPais(pais){
    for (let i=0;i<listaFiltrada.length;i++){
        let pos= listaFiltrada[i]
        if (pos.pais!==pais){
            listaFiltrada.splice(i,1)
        }
    }
}

function filtrarLiga(liga){
    for (let i=0;i<listaFiltrada.length;i++){
        let pos= listaFiltrada[i]
        if (pos.liga!==liga){
            listaFiltrada.splice(i,1)
        }
    }
}