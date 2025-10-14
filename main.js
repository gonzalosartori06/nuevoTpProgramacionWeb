
const listaMacro = [
  { nombre: "Lionel Messi", pais: "Argentina", liga: "Estados Unidos", activo: true },
  { nombre: "Ángel Di María", pais: "Argentina", liga: "Argentina", activo: true },
  { nombre: "Gonzalo Montiel", pais: "Argentina", liga: "Argentina", activo: true },
  { nombre: "Enzo Pérez", pais: "Argentina", liga: "Argentina", activo: true },
  { nombre: "Lucas Martínez Quarta", pais: "Argentina", liga: "Argentina", activo: true },
  { nombre: "Tomás Molina", pais: "Argentina", liga: "Argentina", activo: true },
  { nombre: "Adrián Martínez", pais: "Argentina", liga: "Argentina", activo: true },
  { nombre: "Andrés Vombergar", pais: "Argentina", liga: "Argentina", activo: true },
  { nombre: "Franco Echeverri", pais: "Argentina", liga: "Argentina", activo: true },
  { nombre: "Franco Mastantuono", pais: "Argentina", liga: "Argentina", activo: true },
  { nombre: "Sebastián Driussi", pais: "Argentina", liga: "Argentina", activo: true },
  { nombre: "Lucas Zelarayán", pais: "Argentina", liga: "Argentina", activo: true },
  { nombre: "Matías Rojas", pais: "Argentina", liga: "Argentina", activo: true },
  { nombre: "Ander Herrera", pais: "España", liga: "Argentina", activo: true },
  { nombre: "Keylor Navas", pais: "Costa Rica", liga: "Argentina", activo: true },
  { nombre: "Diego Maradona", pais: "Argentina", liga: "Argentina", activo: false },
  { nombre: "Juan Román Riquelme", pais: "Argentina", liga: "Argentina", activo: false },
  { nombre: "Gabriel Batistuta", pais: "Argentina", liga: "Italia", activo: false },
  { nombre: "Cristiano Ronaldo", pais: "Portugal", liga: "Arabia Saudita", activo: true },
  { nombre: "Kylian Mbappé", pais: "Francia", liga: "España", activo: true },
  { nombre: "Jude Bellingham", pais: "Inglaterra", liga: "España", activo: true },
  { nombre: "Erling Haaland", pais: "Noruega", liga: "Inglaterra", activo: true },
  { nombre: "Mohamed Salah", pais: "Egipto", liga: "Inglaterra", activo: true },
  { nombre: "Vinícius Júnior", pais: "Brasil", liga: "España", activo: true },
  { nombre: "Lamine Yamal", pais: "España", liga: "España", activo: true },
  { nombre: "Ousmane Dembélé", pais: "Francia", liga: "Francia", activo: true },
  { nombre: "Harry Kane", pais: "Inglaterra", liga: "Alemania", activo: true },
  { nombre: "Lautaro Martínez", pais: "Argentina", liga: "Italia", activo: true },
  { nombre: "Julián Álvarez", pais: "Argentina", liga: "España", activo: true },
  { nombre: "Alexis Mac Allister", pais: "Argentina", liga: "Inglaterra", activo: true },
  { nombre: "Neymar", pais: "Brasil", liga: "Arabia Saudita", activo: true },
  { nombre: "Kevin De Bruyne", pais: "Bélgica", liga: "Inglaterra", activo: true },
  { nombre: "Virgil van Dijk", pais: "Países Bajos", liga: "Inglaterra", activo: true },
  { nombre: "Rodri", pais: "España", liga: "Inglaterra", activo: true },
  { nombre: "Luis Suárez", pais: "Uruguay", liga: "Estados Unidos", activo: true },
  { nombre: "Robert Lewandowski", pais: "Polonia", liga: "España", activo: true },
  { nombre: "Pelé", pais: "Brasil", liga: "Brasil", activo: false },
  { nombre: "Diego Godín", pais: "Uruguay", liga: "Uruguay", activo: false },
  { nombre: "Marcelo", pais: "Brasil", liga: "Brasil", activo: false },
  { nombre: "Pepe Reina", pais: "España", liga: "España", activo: false },
  { nombre: "Simon Kjær", pais: "Dinamarca", liga: "Dinamarca", activo: false },
  { nombre: "Toby Alderweireld", pais: "Bélgica", liga: "Bélgica", activo: false },
  { nombre: "Jonny Evans", pais: "Irlanda del Norte", liga: "Inglaterra", activo: false },
  { nombre: "Thiago Alcântara", pais: "España", liga: "España", activo: false },
  { nombre: "Ángel Correa", pais: "Argentina", liga: "España", activo: true },
  { nombre: "Chimy Ávila", pais: "Argentina", liga: "España", activo: true },
  { nombre: "Santiago Sosa", pais: "Argentina", liga: "Argentina", activo: true },
  { nombre: "Rodrigo Villagra", pais: "Argentina", liga: "Argentina", activo: true },
  { nombre: "Zlatan Ibrahimović", pais: "Suecia", liga: "Suecia", activo: false },
  { nombre: "Luka Modrić", pais: "Croacia", liga: "Croacia", activo: true },
  { nombre: "Sergio Ramos", pais: "España", liga: "México", activo: true },
  { nombre: "Karim Benzema", pais: "Francia", liga: "Arabia Saudita", activo: true },
  { nombre: "Eden Hazard", pais: "Bélgica", liga: "Bélgica", activo: false },
  { nombre: "Antoine Griezmann", pais: "Francia", liga: "Francia", activo: true },
  { nombre: "Bruno Fernandes", pais: "Portugal", liga: "Inglaterra", activo: true },
  { nombre: "Jamal Musiala", pais: "Alemania", liga: "Alemania", activo: true },
]

let listaRondas = []
let listaFiltrada = [...listaMacro]
let jugadores = []
let idUnico = 0
let cantidadRondasConfig = 3
let cantidadJugadoresConfig = 4
let rondaActual = 0
let turnoRelativo = 0

function guardarEstado() {
  const estado = {
    jugadores: jugadores,
    idUnico: idUnico,
    cantidadRondasConfig: cantidadRondasConfig,
    cantidadJugadoresConfig: cantidadJugadoresConfig,
    listaRondas: listaRondas,
    rondaActual: rondaActual,
    turnoRelativo: turnoRelativo,
    listaFiltrada: listaFiltrada,
  }
  sessionStorage.setItem("estadoJuego", JSON.stringify(estado))
}

function restaurarEstado() {
  const estadoStr = sessionStorage.getItem("estadoJuego")
  if (estadoStr) {
    const estado = JSON.parse(estadoStr)
    jugadores = estado.jugadores || []
    idUnico = estado.idUnico || 0
    cantidadRondasConfig = estado.cantidadRondasConfig || 3
    cantidadJugadoresConfig = estado.cantidadJugadoresConfig || 4
    listaRondas = estado.listaRondas || []
    rondaActual = estado.rondaActual || 0
    turnoRelativo = estado.turnoRelativo || 0
    listaFiltrada = estado.listaFiltrada || listaMacro
  }
}

function limpiarEstado() {
  sessionStorage.removeItem("estadoJuego")
}



function boolToInt(b) {
  return b ? "1" : "0"
}
function intToBool(s) {
  return s === "1"
}

function agregarFutbolista(nombre, pais, liga, activo) {
  const jugador = {
    nombre: nombre,
    pais: pais,
    liga: liga,
    activo: activo,
  }
  listaMacro.push(jugador)
}

function filtrarPorPais(pais) {
  const temp = []
  for (let i = 0; i < listaFiltrada.length; i++) {
    const pos = listaFiltrada[i]
    if (pos.pais === pais) {
      temp.push(pos)
    }
  }
  listaFiltrada = temp
}

function filtrarPorLiga(liga) {
  const temp = []
  for (let i = 0; i < listaFiltrada.length; i++) {
    const pos = listaFiltrada[i]
    if (pos.liga === liga) {
      temp.push(pos)
    }
  }
  listaFiltrada = temp
}

function filtrarPorActivo(activo) {
  const temp = []
  for (let i = 0; i < listaFiltrada.length; i++) {
    const pos = listaFiltrada[i]
    if (pos.activo === activo) {
      temp.push(pos)
    }
  }
  listaFiltrada = temp
}

function reiniciarFiltrado() {
  listaFiltrada = listaMacro
}

function crearJugador(nombre) {
  const jugador = {
    id: idUnico++,
    nombre: nombre,
    puntos: 0,
  }
  jugadores.push(jugador)
}

function cambiarNombreJugador(id, nuevoNombre) {
  for (let i = 0; i < jugadores.length; i++) {
    const pos = jugadores[i]
    if (pos.id === id) {
      pos.nombre = nuevoNombre
    }
  }
}

function filtrarActivo() {
  let i = 0
  while (i < listaMacro.length) {
    const pos = listaMacro[i]
    if (pos.activo === false) {
      listaMacro.splice(i, 1)
    } else {
      i = i + 1
    }
  }
}

function filtrarPais(pais) {
  let i = 0
  while (i < listaMacro.length) {
    const pos = listaMacro[i]
    if (pos.pais !== pais) {
      listaMacro.splice(i, 1)
    } else {
      i = i + 1
    }
  }
}

function filtrarLiga(liga) {
  let i = 0
  while (i < listaMacro.length) {
    const pos = listaMacro[i]
    if (pos.liga !== liga) {
      listaMacro.splice(i, 1)
    } else {
      i = i + 1
    }
  }
}


function leerNumeroDeInput(el) {
  if (!el) {
    return 0
  }
  let val = Number.parseInt(el.value, 10)
  if (isNaN(val)) {
    val = 0
  }
  return val
}

function creacionJugadores(cantidad) {
  jugadores = []
  idUnico = 0
  let numero = 1
  for (let i = 0; i < cantidad; i++) {
    const jugador = { id: idUnico++, nombre: "Jugador " + numero, puntos: 0 }
    numero = numero + 1
    jugadores.push(jugador)
  }
}

function generarRondas(cantRondas) {
  listaRondas = []
  if (jugadores.length === 0) {
    return
  }
  if (listaFiltrada.length === 0) {
    listaFiltrada = []
    for (let i = 0; i < listaMacro.length; i++) {
      if (listaMacro[i].activo) {
        listaFiltrada.push(listaMacro[i])
      }
    }
  }
  for (let r = 0; r < cantRondas; r++) {
    const rondaJugadores = []
    for (let j = 0; j < jugadores.length; j++) {
      rondaJugadores.push({ id: jugadores[j].id, nombre: jugadores[j].nombre, futbolista: "" })
    }
    const impostorIndex = Math.floor(Math.random() * rondaJugadores.length)
    rondaJugadores[impostorIndex].futbolista = "Impostor"
    let elegido = null
    if (listaFiltrada.length > 0) {
      const idx = Math.floor(Math.random() * listaFiltrada.length)
      elegido = listaFiltrada[idx].nombre
    } else {
      elegido = "Futbolista X"
    }
    for (let j = 0; j < rondaJugadores.length; j++) {
      if (j !== impostorIndex) {
        rondaJugadores[j].futbolista = elegido
      }
    }
    listaRondas.push(rondaJugadores)
  }
}

function calcularTurnoInicial(rondaIndex) {
  if (jugadores.length === 0) {
    return 0
  }
  return rondaIndex % jugadores.length
}

function puntuarImpostorSiGano(rondaIndex, gano) {
  if (!gano) {
    return
  }
  if (rondaIndex < 0 || rondaIndex >= listaRondas.length) {
    return
  }
  const ronda = listaRondas[rondaIndex]
  let impostorId = -1
  for (let i = 0; i < ronda.length; i++) {
    if (ronda[i].futbolista === "Impostor") {
      impostorId = ronda[i].id
    }
  }
  if (impostorId === -1) {
    return
  }
  for (let j = 0; j < jugadores.length; j++) {
    if (jugadores[j].id === impostorId) {
      if (!jugadores[j].puntos) {
        jugadores[j].puntos = 0
      }
      jugadores[j].puntos = jugadores[j].puntos + 1
    }
  }
}

function calcularGanadores() {
  let maxP = -9999
  for (let i = 0; i < jugadores.length; i++) {
    const p = jugadores[i].puntos || 0
    if (p > maxP) {
      maxP = p
    }
  }
  const ganadores = []
  for (let i = 0; i < jugadores.length; i++) {
    const p = jugadores[i].puntos || 0
    if (p === maxP) {
      ganadores.push(jugadores[i])
    }
  }
  return ganadores
}

function irA(url) {
  guardarEstado()
  window.location.href = url
}

function reiniciarYVolverInicio() {
  const inputs = document.querySelectorAll('input[type="text"], input[type="number"]')
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = ""
  }

  const selects = document.querySelectorAll("select")
  for (let i = 0; i < selects.length; i++) {
    selects[i].selectedIndex = 0
  }

  const checkboxes = document.querySelectorAll('input[type="checkbox"]')
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = false
  }

  jugadores = []
  listaRondas = []
  idUnico = 0
  rondaActual = 0
  turnoRelativo = 0
  cantidadRondasConfig = 3
  cantidadJugadoresConfig = 4
  reiniciarFiltrado()

  limpiarEstado()

  irA("index.html")
}


function mostrarAlerta(mensaje, contenedorId = "alertContainer") {
  window.scrollTo({ top: 0, behavior: "smooth" })

  const contenedor = document.getElementById(contenedorId)
  if (!contenedor) {
    alert(mensaje)
    return
  }

  const alertHTML = `
    <div class="alert alert-secondary alert-dismissible fade show d-flex align-items-center" role="alert">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill me-2" viewBox="0 0 16 16">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
      </svg>
      <div>${mensaje}</div>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `

  contenedor.innerHTML = alertHTML

  setTimeout(() => {
    const alertElement = contenedor.querySelector(".alert")
    if (alertElement) {
      alertElement.classList.remove("show")
      setTimeout(() => {
        contenedor.innerHTML = ""
      }, 150)
    }
  }, 4000)
}

function mostrarAlertaInfo(mensaje, contenedorId = "alertContainer") {
  window.scrollTo({ top: 0, behavior: "smooth" })

  const contenedor = document.getElementById(contenedorId)
  if (!contenedor) {
    alert(mensaje)
    return
  }

  const alertHTML = `
    <div class="alert alert-info alert-dismissible fade show d-flex align-items-center" role="alert">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-info-circle-fill me-2" viewBox="0 0 16 16">
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
      </svg>
      <div>${mensaje}</div>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `

  contenedor.innerHTML = alertHTML

  setTimeout(() => {
    const alertElement = contenedor.querySelector(".alert")
    if (alertElement) {
      alertElement.classList.remove("show")
      setTimeout(() => {
        contenedor.innerHTML = ""
      }, 150)
    }
  }, 4000)
}



function initMenu() {
  restaurarEstado()
  listaFiltrada = [...listaMacro]
}

function initPaso1() {
  restaurarEstado()

  const btn = document.getElementById("siguentePaso")
  const inpR = document.getElementById("cantidadRondas")
  const inpJ = document.getElementById("cantidadJugadores")

  btn.addEventListener("click", () => {
    let cantR = leerNumeroDeInput(inpR)
    let cantJ = leerNumeroDeInput(inpJ)
    if (cantR < 1) {
      cantR = 1
    }
    if (cantR > 40) {
      cantR = 40
    }
    if (cantJ < 3) {
      cantJ = 3
    }
    if (cantJ > 10) {
      cantJ = 10
    }

    cantidadRondasConfig = cantR
    cantidadJugadoresConfig = cantJ
    creacionJugadores(cantJ)

    console.log("[v0] Configuración guardada - Rondas:", cantidadRondasConfig, "Jugadores:", cantidadJugadoresConfig)
    console.log("[v0] Jugadores creados:", jugadores.length)

    irA("nombres.html")
  })
}

function initNombres() {
  restaurarEstado()

  const listaIzquierda = document.getElementById("listaNombresIzquierda")
  const selectorJugador = document.getElementById("selectorJugador")
  const inputNombre = document.getElementById("inputNombreJugador")

  if (jugadores.length === 0) {
    console.log("[v0] No hay jugadores, redirigiendo a paso1")
    irA("paso1.html")
    return
  }

  function actualizarListaIzquierda() {
    let html = ""
    for (let i = 0; i < jugadores.length; i++) {
      html += `<div class="mb-2"><strong>Jugador ${i + 1}:</strong> ${jugadores[i].nombre}</div>`
    }
    listaIzquierda.innerHTML = html
  }

  let opcionesHTML = ""
  for (let i = 0; i < jugadores.length; i++) {
    opcionesHTML += `<option value="${i}">Jugador ${i + 1}</option>`
  }
  selectorJugador.innerHTML = opcionesHTML

  selectorJugador.addEventListener("change", () => {
    const idx = Number.parseInt(selectorJugador.value, 10)
    if (idx >= 0 && idx < jugadores.length) {
      inputNombre.placeholder = jugadores[idx].nombre
      inputNombre.value = ""
    }
  })

  inputNombre.addEventListener("input", () => {
    const idx = Number.parseInt(selectorJugador.value, 10)
    if (idx >= 0 && idx < jugadores.length) {
      if (inputNombre.value.trim() !== "") {
        jugadores[idx].nombre = inputNombre.value
        actualizarListaIzquierda()
      }
    }
  })

  if (jugadores.length > 0) {
    inputNombre.placeholder = jugadores[0].nombre
    inputNombre.value = ""
  }

  actualizarListaIzquierda()

  const btnS = document.getElementById("seguirAFiltros")
  btnS.addEventListener("click", () => {
    console.log("[v0] Guardando nombres y yendo a filtros. Jugadores:", jugadores)
    irA("filtros.html")
  })

  const btnSkip = document.getElementById("omitirNombres")
  btnSkip.addEventListener("click", () => {
    irA("filtros.html")
  })
}

function initFiltros() {
  restaurarEstado()

  reiniciarFiltrado()

  if (jugadores.length === 0) {
    console.log("[v0] No hay jugadores en filtros, redirigiendo a paso1")
    mostrarAlerta("Primero debes configurar los jugadores", "alertContainer")
    setTimeout(() => {
      irA("paso1.html")
    }, 2000)
    return
  }

  const selPais = document.getElementById("selPais")
  const selLiga = document.getElementById("selLiga")
  const selActivo = document.getElementById("selActivo")
  _reconstruirSelects(selPais, selLiga)

  document.getElementById("aplicarFiltros").addEventListener("click", () => {
    reiniciarFiltrado()
    const p = selPais.value
    const l = selLiga.value
    const a = selActivo.value
    if (p && p !== "") {
      filtrarPorPais(p)
    }
    if (l && l !== "") {
      filtrarPorLiga(l)
    }
    if (a === "1") {
      filtrarPorActivo(true)
    }
    if (a === "0") {
      filtrarPorActivo(false)
    }
    mostrarAlerta("Filtros aplicados. Futbolistas disponibles: " + listaFiltrada.length, "alertContainer")
  })

  document.getElementById("borrarFiltros").addEventListener("click", () => {
    selPais.selectedIndex = 0
    selLiga.selectedIndex = 0
    selActivo.selectedIndex = 0
    reiniciarFiltrado()
    mostrarAlerta("Filtros borrados", "alertContainer")
  })

  document.getElementById("comenzarJuego").addEventListener("click", () => {
    if (jugadores.length === 0) {
      mostrarAlerta("No hay jugadores configurados", "alertContainer")
      return
    }

    console.log("[v0] Generando rondas con:", cantidadRondasConfig, "rondas y", jugadores.length, "jugadores")
    generarRondas(cantidadRondasConfig)
    rondaActual = 0
    turnoRelativo = 0
    console.log("[v0] Rondas generadas:", listaRondas.length)
    irA("juego.html")
  })

  const inpNombre = document.getElementById("nuevoNombre")
  const inpPais = document.getElementById("nuevoPais")
  const inpLiga = document.getElementById("nuevoLiga")
  const chkActivo = document.getElementById("nuevoActivo")
  const btnAgregarFut = document.getElementById("btnAgregarFutbolista")

  btnAgregarFut.addEventListener("click", () => {
    const nombre = (inpNombre.value || "").trim()
    const pais = (inpPais.value || "").trim()
    const liga = (inpLiga.value || "").trim()
    const activoSelect = chkActivo
    const activo = activoSelect.value === "1"

    if (nombre === "" || pais === "" || liga === "") {
      mostrarAlerta("Completá Nombre, País y Liga.", "alertContainer")
      return
    }

    agregarFutbolista(nombre, pais, liga, activo)

    inpNombre.value = ""
    inpPais.value = ""
    inpLiga.value = ""
    activoSelect.selectedIndex = 0

    _reconstruirSelects(selPais, selLiga)
    mostrarAlertaInfo("Futbolista agregado correctamente.", "alertContainer")
  })
}

function initJuego() {
  restaurarEstado()

  if (listaRondas.length === 0) {
    console.log("[v0] No hay rondas generadas, redirigiendo a filtros")
    irA("filtros.html")
    return
  }

  if (jugadores.length === 0) {
    console.log("[v0] No hay jugadores en juego, redirigiendo a paso1")
    irA("paso1.html")
    return
  }

  const turnoInicial = calcularTurnoInicial(rondaActual)

  function jugadorIndexEnOrden() {
    const total = jugadores.length
    return (turnoInicial + turnoRelativo) % total
  }

  function mostrarPantallaListo() {
    const idx = jugadorIndexEnOrden()
    if (idx < 0 || idx >= jugadores.length) {
      console.log("[v0] Error: índice de jugador inválido", idx)
      return
    }
    const j = jugadores[idx]
    const cont = document.getElementById("contenedorJuego")
    cont.innerHTML = ""
    let html = ""
    html += '<div class="pantalla-centro">'
    html += "<h1>" + j.nombre + "</h1>"
    html += "<p>¿Listo para comenzar?</p>"
    html += '<button id="btnTickListo" class="btn btn-dark btn-lg">✔</button>'
    html += "</div>"
    cont.innerHTML = html

    document.getElementById("btnTickListo").addEventListener("click", () => {
      mostrarPantallaRevelar()
    })
  }

  function mostrarPantallaRevelar() {
    const idx = jugadorIndexEnOrden()
    if (idx < 0 || idx >= jugadores.length) {
      console.log("[v0] Error: índice de jugador inválido en revelar", idx)
      return
    }
    const j = jugadores[idx]
    let asignacion = ""
    const rondaJ = listaRondas[rondaActual]
    for (let i = 0; i < rondaJ.length; i++) {
      if (rondaJ[i].id === j.id) {
        asignacion = rondaJ[i].futbolista
      }
    }

    const cont = document.getElementById("contenedorJuego")
    cont.innerHTML = ""
    let html = ""
    html += '<div class="pantalla-centro">'
    html += "<h2>Tu palabra:</h2>"
    if (asignacion === "Impostor") {
      html += '<div class="tag tag-alert">IMPOSTOR</div>'
    } else {
      html += '<div class="tag">' + asignacion + "</div>"
    }
    html += '<button id="btnContinuarTurno" class="btn btn-dark btn-lg">✔</button>'
    html += "</div>"
    cont.innerHTML = html

    document.getElementById("btnContinuarTurno").addEventListener("click", () => {
      turnoRelativo = turnoRelativo + 1
      if (turnoRelativo >= jugadores.length) {
        mostrarPantallaResultadoRonda()
      } else {
        mostrarPantallaListo()
      }
    })
  }

  function mostrarPantallaResultadoRonda() {
    const cont = document.getElementById("contenedorJuego")
    cont.innerHTML = ""
    let html = ""
    html += '<div class="pantalla-centro">'
    html += "<h2>Resultado de la ronda " + (rondaActual + 1) + "</h2>"
    html += '<div class="checkboxes">'
    html += '  <label><input type="checkbox" id="impGano"> ¿El impostor ganó?</label>'
    html += '  <label><input type="checkbox" id="impPerdio"> ¿El impostor perdió?</label>'
    html += "</div>"
    html += '<button id="btnSiguienteRonda" class="btn btn-dark btn-lg">Siguiente</button>'
    html += "</div>"
    cont.innerHTML = html

    const cbG = document.getElementById("impGano")
    const cbP = document.getElementById("impPerdio")
    cbG.addEventListener("change", () => {
      if (cbG.checked) {
        cbP.checked = false
      }
    })
    cbP.addEventListener("change", () => {
      if (cbP.checked) {
        cbG.checked = false
      }
    })

    document.getElementById("btnSiguienteRonda").addEventListener("click", () => {
      const gano = cbG.checked === true
      puntuarImpostorSiGano(rondaActual, gano)

      rondaActual = rondaActual + 1
      turnoRelativo = 0

      console.log("[v0] Ronda actual:", rondaActual, "Total rondas:", listaRondas.length)

      if (rondaActual >= listaRondas.length) {
        console.log("[v0] Juego terminado, yendo a final")
        irA("final.html")
      } else {
        console.log("[v0] Continuando con ronda", rondaActual + 1)
        guardarEstado()
        mostrarPantallaListo()
      }
    })
  }

  mostrarPantallaListo()
}

function initFinal() {
  restaurarEstado()

  const cont = document.getElementById("resultadoFinal")
  const ganadores = calcularGanadores()
  const maxP = ganadores.length > 0 ? ganadores[0].puntos : 0

  let html = '<div class="mb-0"><h2 class="titulo-secundario">Tabla de puntos</h2><ul class="lista-simple">'
  for (let i = 0; i < jugadores.length; i++) {
    html += "<li>" + jugadores[i].nombre + ": " + (jugadores[i].puntos || 0) + "</li>"
  }
  html += "</ul></div>"

  html += '<div class="mb-0 mt-4"><h2 class="titulo-secundario">Ganador(es)</h2><ul class="lista-simple">'
  for (let k = 0; k < ganadores.length; k++) {
    html += "<li>" + ganadores[k].nombre + " (" + maxP + " puntos)</li>"
  }
  html += "</ul></div>"

  cont.innerHTML = html

  document.getElementById("btnVolverMenu").addEventListener("click", () => {
    reiniciarYVolverInicio()
  })

  document.getElementById("btnRejugarFiltros").addEventListener("click", () => {
    rondaActual = 0
    turnoRelativo = 0
    listaRondas = []
    for (let i = 0; i < jugadores.length; i++) {
      jugadores[i].puntos = 0
    }
    irA("filtros.html")
  })
}


window.initMenu = initMenu
window.initPaso1 = initPaso1
window.initNombres = initNombres
window.initFiltros = initFiltros
window.initJuego = initJuego
window.initFinal = initFinal

window.agregarFutbolista = agregarFutbolista
window.crearJugador = crearJugador
window.irA = irA
window.reiniciarYVolverInicio = reiniciarYVolverInicio

window.mostrarAlerta = mostrarAlerta
window.mostrarAlertaInfo = mostrarAlertaInfo

function _reconstruirSelects(selPais, selLiga) {
  const paisEmojis = {
    Argentina: "🇦🇷",
    Brasil: "🇧🇷",
    Portugal: "🇵🇹",
    Francia: "🇫🇷",
    Inglaterra: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    España: "🇪🇸",
    Alemania: "🇩🇪",
    Italia: "🇮🇹",
    "Países Bajos": "🇳🇱",
    Bélgica: "🇧🇪",
    Uruguay: "🇺🇾",
    Croacia: "🇭🇷",
    Polonia: "🇵🇱",
    Egipto: "🇪🇬",
    Noruega: "🇳🇴",
    "Costa Rica": "🇨🇷",
    Dinamarca: "🇩🇰",
    "Irlanda del Norte": "🇬🇧",
    Suecia: "🇸🇪",
    "Estados Unidos": "🇺🇸",
    "Arabia Saudita": "🇸🇦",
    México: "🇲🇽",
  }

  const ligaEmojis = {
    Argentina: "🇦🇷",
    Brasil: "🇧🇷",
    España: "🇪🇸",
    Inglaterra: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    Italia: "🇮🇹",
    Alemania: "🇩🇪",
    Francia: "🇫🇷",
    "Estados Unidos": "🇺🇸",
    "Arabia Saudita": "🇸🇦",
    México: "🇲🇽",
    Uruguay: "🇺🇾",
    Croacia: "🇭🇷",
    Bélgica: "🇧🇪",
    Dinamarca: "🇩🇰",
    Suecia: "🇸🇪",
  }

  const paises = {}
  const ligas = {}
  for (let i = 0; i < listaMacro.length; i++) {
    paises[listaMacro[i].pais] = true
    ligas[listaMacro[i].liga] = true
  }

  selPais.innerHTML = '<option value="">Seleccionar país</option>'
  for (const p in paises) {
    const emoji = paisEmojis[p] || "🌍"
    selPais.innerHTML += `<option value="${p}">${emoji} ${p}</option>`
  }

  selLiga.innerHTML = '<option value="">Seleccionar liga</option>'
  for (const l in ligas) {
    const emoji = ligaEmojis[l] || "⚽"
    selLiga.innerHTML += `<option value="${l}">${emoji} ${l}</option>`
  }
}
