const listaMacro=[]
let listaFiltrada= listaMacro

function agregarJugador(nombre,pais,liga,activo){
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

