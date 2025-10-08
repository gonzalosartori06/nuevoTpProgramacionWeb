
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
  { nombre: "Kylian Mbappé", pais: "Francia", liga: "España", activo: true },
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
  { nombre: "Jamal Musiala", pais: "Alemania", liga: "Alemania", activo: true }
];
let listaRondas = [] 
let listaFiltrada = listaMacro
let jugadores = [] 
let idUnico = 0



function boolToInt(b) {
  return b ? "1" : "0"
}
function intToBool(s) {
  return s === "1"
}


function guardarJugadores() {
  const partes = []
  for (let i = 0; i < jugadores.length; i++) {
    const j = jugadores[i]
    partes.push(j.id + "|" + j.nombre + "|" + (j.puntos || 0))
  }
  localStorage.setItem("jugadores_txt", partes.join(";;"))
  localStorage.setItem("idUnico_txt", String(idUnico))
}

function cargarJugadores() {
  jugadores = []
  const txt = localStorage.getItem("jugadores_txt")
  const idtxt = localStorage.getItem("idUnico_txt")
  if (idtxt !== null) {
    idUnico = Number.parseInt(idtxt, 10)
    if (isNaN(idUnico)) {
      idUnico = 0
    }
  }
  if (!txt || txt.trim() === "") {
    return
  }
  const filas = txt.split(";;")
  for (let i = 0; i < filas.length; i++) {
    const parte = filas[i].split("|")
    if (parte.length >= 3) {
      const id = Number.parseInt(parte[0], 10)
      const nombre = parte[1]
      let puntos = Number.parseInt(parte[2], 10)
      if (isNaN(puntos)) {
        puntos = 0
      }
      jugadores.push({ id: id, nombre: nombre, puntos: puntos })
    }
  }
}


function guardarListaMacro() {
  const partes = []
  for (let i = 0; i < listaMacro.length; i++) {
    const f = listaMacro[i]
    partes.push(f.nombre + "|" + f.pais + "|" + f.liga + "|" + boolToInt(!!f.activo))
  }
  localStorage.setItem("listaMacro_txt", partes.join(";;"))
}

function cargarListaMacro() {
  const txt = localStorage.getItem("listaMacro_txt")
  if (!txt || txt.trim() === "") {
    return
  }
  const filas = txt.split(";;")
  for (let i = 0; i < filas.length; i++) {
    const parte = filas[i].split("|")
    if (parte.length >= 4) {
      const nombre = parte[0]
      const pais = parte[1]
      const liga = parte[2]
      const activo = intToBool(parte[3])
      listaMacro.push({ nombre: nombre, pais: pais, liga: liga, activo: activo })
    }
  }
  listaFiltrada = listaMacro 
}


function guardarRondas() {
  const rondasTxt = []
  for (let r = 0; r < listaRondas.length; r++) {
    const jugadoresR = listaRondas[r]
    const lineas = []
    for (let j = 0; j < jugadoresR.length; j++) {
      const x = jugadoresR[j]
      const esImp = x.futbolista === "Impostor" ? "1" : "0"
      lineas.push(x.id + "|" + x.nombre + "|" + (x.futbolista || "") + "|" + esImp)
    }
    rondasTxt.push(lineas.join(";;"))
  }
  localStorage.setItem("listaRondas_txt", rondasTxt.join("§"))
}

function cargarRondas() {
  listaRondas = []
  const txt = localStorage.getItem("listaRondas_txt")
  if (!txt || txt.trim() === "") {
    return
  }
  const rondas = txt.split("§")
  for (let i = 0; i < rondas.length; i++) {
    const rondaTxt = rondas[i]
    const jugTxt = rondaTxt.split(";;")
    const rondaJugadores = []
    for (let k = 0; k < jugTxt.length; k++) {
      const campos = jugTxt[k].split("|")
      if (campos.length >= 4) {
        const id = Number.parseInt(campos[0], 10)
        const nombre = campos[1]
        let futbolista = campos[2]
        const esImp = intToBool(campos[3])
        if (esImp) {
          futbolista = "Impostor"
        }
        rondaJugadores.push({ id: id, nombre: nombre, futbolista: futbolista })
      }
    }
    listaRondas.push(rondaJugadores)
  }
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
  if (jugadores.length > 0) {
    return
  }
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
  guardarRondas()
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
  guardarJugadores()
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

  reiniciarFiltrado()

  irA("index.html")
}


function mostrarAlerta(mensaje, contenedorId = "alertContainer") {
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
  cargarJugadores()
  cargarListaMacro()
  if (listaMacro.length === 0) {
    agregarFutbolista("Lionel Messi", "Argentina", "MLS", true)
    agregarFutbolista("Cristiano Ronaldo", "Portugal", "Saudi Pro League", true)
    agregarFutbolista("Kylian Mbappé", "Francia", "La Liga", true)
    agregarFutbolista("Erling Haaland", "Noruega", "Premier League", true)
    agregarFutbolista("Kevin De Bruyne", "Bélgica", "Premier League", true)
    agregarFutbolista("Ángel Di María", "Argentina", "Liga Profesional", true)
    agregarFutbolista("Neymar Jr", "Brasil", "Saudi Pro League", true)
    agregarFutbolista("Luka Modrić", "Croacia", "La Liga", true)
    agregarFutbolista("Mohamed Salah", "Egipto", "Premier League", true)
    agregarFutbolista("Robert Lewandowski", "Polonia", "La Liga", true)
    agregarFutbolista("Vinícius Jr", "Brasil", "La Liga", true)
    agregarFutbolista("Jude Bellingham", "Inglaterra", "La Liga", true)
    agregarFutbolista("Harry Kane", "Inglaterra", "Bundesliga", true)
    agregarFutbolista("Pedri", "España", "La Liga", true)
    agregarFutbolista("Gavi", "España", "La Liga", true)
    guardarListaMacro()
  }
}

function initPaso1() {
  cargarJugadores()
  cargarListaMacro()
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

    creacionJugadores(cantJ)
    guardarJugadores()
    localStorage.setItem("cantidadRondas_txt", String(cantR))
    irA("nombres.html")
  })
}

function initNombres() {
  cargarJugadores()
  const cont = document.getElementById("listaNombres")
  let html = ""

  for (let i = 0; i < jugadores.length; i++) {
    const j = jugadores[i]
    html += '<div class="mb-0">'
    html += '<label class="form-label">Jugador ' + (i + 1) + "</label>"
    html += '<input type="text" class="form-control" data-id="' + j.id + '" value="' + j.nombre + '">'
    html += "</div>"
  }
  cont.innerHTML = html

  const btnS = document.getElementById("seguirAFiltros")
  btnS.addEventListener("click", () => {
    const inputs = cont.getElementsByTagName("input")
    for (let i = 0; i < inputs.length; i++) {
      const el = inputs[i]
      const id = Number.parseInt(el.getAttribute("data-id"), 10)
      const nuevoNombre = el.value.trim()
      if (nuevoNombre !== "") {
        cambiarNombreJugador(id, nuevoNombre)
      }
    }
    guardarJugadores()
    irA("filtros.html")
  })

  const btnSkip = document.getElementById("omitirNombres")
  btnSkip.addEventListener("click", () => {
    irA("filtros.html")
  })
}

function initFiltros() {
  cargarListaMacro()
  reiniciarFiltrado()

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
    const nombres = []
    for (let i = 0; i < listaFiltrada.length; i++) {
      nombres.push(listaFiltrada[i].nombre)
    }
    localStorage.setItem("filtradosNombres_txt", nombres.join(";;"))
    mostrarAlerta("Filtros aplicados. Futbolistas disponibles: " + nombres.length, "alertContainer")
  })

  document.getElementById("comenzarJuego").addEventListener("click", () => {
    const txt = localStorage.getItem("filtradosNombres_txt")
    if (txt && txt.trim() !== "") {
      const nombres = txt.split(";;")
      const temp = []
      for (let i = 0; i < listaMacro.length; i++) {
        const nm = listaMacro[i].nombre
        let ok = false
        for (let k = 0; k < nombres.length; k++) {
          if (nombres[k] === nm) {
            ok = true
          }
        }
        if (ok) {
          temp.push(listaMacro[i])
        }
      }
      if (temp.length > 0) {
        listaFiltrada = temp
      }
    }
    cargarJugadores()
    let cantR = Number.parseInt(localStorage.getItem("cantidadRondas_txt") || "1", 10)
    if (isNaN(cantR) || cantR < 1) {
      cantR = 1
    }
    generarRondas(cantR)
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
    const activo = !!chkActivo.checked

    if (nombre === "" || pais === "" || liga === "") {
      mostrarAlerta("Completá Nombre, País y Liga.", "alertContainer")
      return
    }

    agregarFutbolista(nombre, pais, liga, activo)
    guardarListaMacro()

    inpNombre.value = ""
    inpPais.value = ""
    inpLiga.value = ""
    chkActivo.checked = true

    _reconstruirSelects(selPais, selLiga)
    mostrarAlerta("Futbolista agregado correctamente.", "alertContainer")
  })
}

function initJuego() {
  cargarJugadores()
  cargarRondas()
  if (listaRondas.length === 0) {
    irA("filtros.html")
    return
  }
  let rondaActual = Number.parseInt(localStorage.getItem("rondaActual_idx") || "0", 10)
  if (isNaN(rondaActual)) {
    rondaActual = 0
  }
  const turnoInicial = calcularTurnoInicial(rondaActual)
  let turnoRelativo = Number.parseInt(localStorage.getItem("turnoRelativo_idx") || "0", 10)
  if (isNaN(turnoRelativo)) {
    turnoRelativo = 0
  }

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
      localStorage.setItem("turnoRelativo_idx", String(turnoRelativo))
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
      localStorage.setItem("rondaActual_idx", String(rondaActual))
      turnoRelativo = 0
      localStorage.setItem("turnoRelativo_idx", "0")

      if (rondaActual >= listaRondas.length) {
        irA("final.html")
      } else {
        initJuego()
      }
    })
  }

  mostrarPantallaListo()
}

function initFinal() {
  cargarJugadores()
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
    localStorage.removeItem("rondaActual_idx")
    localStorage.removeItem("turnoRelativo_idx")
    localStorage.removeItem("listaRondas_txt")
    localStorage.removeItem("cantidadRondas_txt")
    localStorage.removeItem("filtradosNombres_txt")
    irA("index.html")
  })

  document.getElementById("btnRejugarFiltros").addEventListener("click", () => {
    localStorage.removeItem("rondaActual_idx")
    localStorage.removeItem("turnoRelativo_idx")
    localStorage.removeItem("listaRondas_txt")
    localStorage.removeItem("cantidadRondas_txt")
    localStorage.removeItem("filtradosNombres_txt")
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


function _reconstruirSelects(selPais, selLiga) {
  const paises = {}
  const ligas = {}
  for (let i = 0; i < listaMacro.length; i++) {
    paises[listaMacro[i].pais] = true
    ligas[listaMacro[i].liga] = true
  }
  selPais.innerHTML = '<option value="">(cualquiera)</option>'
  for (const p in paises) {
    selPais.innerHTML += '<option value="' + p + '">' + p + "</option>"
  }
  selLiga.innerHTML = '<option value="">(cualquiera)</option>'
  for (const l in ligas) {
    selLiga.innerHTML += '<option value="' + l + '">' + l + "</option>"
  }
}
