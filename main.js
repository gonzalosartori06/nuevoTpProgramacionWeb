const listaMacro = [
  { nombre: "Lionel Messi", pais: "Argentina", liga: "Estados Unidos", activo: true },
  { nombre: "Ángel Di María", pais: "Argentina", liga: "Argentina", activo: true },
  { nombre: "Gonzalo Montiel", pais: "Argentina", liga: "Argentina", activo: true },
  { nombre: "Enzo Pérez", pais: "Argentina", liga: "Argentina", activo: true },
  { nombre: "Lucas Martínez Quarta", pais: "Argentina", liga: "Argentina", activo: true },
  { nombre: "Sebastian Villa", pais: "Colombia", liga: "Argentina", activo: true },
  { nombre: "Adrián 'Maravilla' Martínez", pais: "Argentina", liga: "Argentina", activo: true },
  { nombre: "Frank Fabra", pais: "Colombia", liga: "Argentina", activo: true },
  { nombre: "Claudio 'Diablito' Echeverri", pais: "Argentina", liga: "Inglaterra", activo: true },
  { nombre: "Franco Mastantuono", pais: "Argentina", liga: "España", activo: true },
  { nombre: "Sebastián Driussi", pais: "Argentina", liga: "Argentina", activo: true },
  { nombre: "Ronaldo Nazario", pais: "Brasil", liga: "España", activo: false },
  { nombre: "Maximiliano Salas", pais: "Argentina", liga: "Argentina", activo: true },
  { nombre: "Ander Herrera", pais: "España", liga: "Argentina", activo: true },
  { nombre: "Keylor Navas", pais: "Costa Rica", liga: "México", activo: true },
  { nombre: "Diego Maradona", pais: "Argentina", liga: "Italia", activo: false },
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
  { nombre: "Neymar", pais: "Brasil", liga: "Brasil", activo: true },
  { nombre: "Kevin De Bruyne", pais: "Bélgica", liga: "Inglaterra", activo: true },
  { nombre: "Virgil van Dijk", pais: "Países Bajos", liga: "Inglaterra", activo: true },
  { nombre: "Rodri", pais: "España", liga: "Inglaterra", activo: true },
  { nombre: "Luis Suárez", pais: "Uruguay", liga: "Estados Unidos", activo: true },
  { nombre: "Robert Lewandowski", pais: "Polonia", liga: "España", activo: true },
  { nombre: "Pelé", pais: "Brasil", liga: "Brasil", activo: false },
  { nombre: "Diego Godín", pais: "Uruguay", liga: "España", activo: false },
  { nombre: "Marcelo", pais: "Brasil", liga: "España", activo: false },
  { nombre: "Nestor Ortigoza", pais: "Argentina", liga: "Argentina", activo: false },
  { nombre: "Zinedine Zidane", pais: "Francia", liga: "España", activo: false },
  { nombre: "Marco Materazzi", pais: "Italia", liga: "Italia", activo: false },
  { nombre: "Johan Cruyff", pais: "Países Bajos", liga: "España", activo: false },
  { nombre: "Thiago Alcântara", pais: "España", liga: "Alemania", activo: false },
  { nombre: "Ángel Correa", pais: "Argentina", liga: "España", activo: true },
  { nombre: "Carlos Tevez", pais: "Argentina", liga: "Argentina", activo: false },
  { nombre: "Franz Beckenbauer", pais: "Alemania", liga: "Alemania", activo: false },
  { nombre: "Rodrigo Villagra", pais: "Argentina", liga: "Argentina", activo: true },
  { nombre: "Zlatan Ibrahimović", pais: "Suecia", liga: "Italia", activo: false },
  { nombre: "Luka Modrić", pais: "Croacia", liga: "Italia", activo: true },
  { nombre: "Sergio Ramos", pais: "España", liga: "México", activo: true },
  { nombre: "Karim Benzema", pais: "Francia", liga: "Arabia Saudita", activo: true },
  { nombre: "Eden Hazard", pais: "Bélgica", liga: "Inglaterra", activo: false },
  { nombre: "Antoine Griezmann", pais: "Francia", liga: "España", activo: true },
  { nombre: "Bruno Fernandes", pais: "Portugal", liga: "Inglaterra", activo: true },
  { nombre: "Jamal Musiala", pais: "Alemania", liga: "Alemania", activo: true },
  { nombre: "Eric Cantona", pais: "Francia", liga: "Inglaterra", activo: false },
  { nombre: "Mario Balotelli", pais: "Italia", liga: "Italia", activo: true },
  { nombre: "Virgil van Dijk", pais: "Países Bajos", liga: "Inglaterra", activo: true },
  { nombre: "René Higuita", pais: "Colombia", liga: "Colombia", activo: false },
  { nombre: "James Rodriguez", pais: "Colombia", liga: "México", activo: true },
  { nombre: "Juan Fernando Quintero", pais: "Colombia", liga: "Argentina", activo: true },
  { nombre: "Carlos “El Loco” Valderrama", pais: "Colombia", liga: "Colombia", activo: false },
  { nombre: "Romário", pais: "Brasil", liga: "España", activo: false },
  { nombre: "Neymar Jr.", pais: "Brasil", liga: "Brasil", activo: true },
  { nombre: "Pepe", pais: "Portugal", liga: "Portugal", activo: false },
  { nombre: "Arturo Vidal", pais: "Chile", liga: "Chile", activo: true },
  { nombre: "Oliver Kahn", pais: "Alemania", liga: "Alemania", activo: false },
  { nombre: "Emiliano Martínez", pais: "Argentina", liga: "Inglaterra", activo: true },
  { nombre: "George Best", pais: "Irlanda del Norte", liga: "Inglaterra", activo: false },
  { nombre: "Ronaldinho", pais: "Brasil", liga: "España", activo: false },
  { nombre: "Garrincha", pais: "Brasil", liga: "Brasil", activo: false },
  { nombre: "Martin Palermo", pais: "Argentina", liga: "Argentina", activo: false },
  { nombre: "Sócrates", pais: "Brasil", liga: "Brasil", activo: false },
  { nombre: "Alfredo Di Stéfano", pais: "Argentina", liga: "España", activo: false },
  { nombre: "Ferenc Puskás", pais: "Hungría", liga: "España", activo: false },
  { nombre: "Lev Yashin", pais: "Rusia", liga: "Rusia", activo: false },
  { nombre: "Gerd Müller", pais: "Alemania", liga: "Alemania", activo: false },
  { nombre: "Patrick Vieira", pais: "Francia", liga: "Inglaterra", activo: false },
  { nombre: "Claude Makélélé", pais: "Francia", liga: "España", activo: false },
  { nombre: "Edgar Davids", pais: "Países Bajos", liga: "Italia", activo: false },
  { nombre: "Gennaro Gattuso", pais: "Italia", liga: "Italia", activo: false },
  { nombre: "David Beckham", pais: "Inglaterra", liga: "Inglaterra", activo: false },
  { nombre: "John Terry", pais: "Inglaterra", liga: "Inglaterra", activo: false },
  { nombre: "Wayne Rooney", pais: "Inglaterra", liga: "Inglaterra", activo: false },
  { nombre: "Paul Pogba", pais: "Francia", liga: "Italia", activo: true },
  { nombre: "Edinson Cavani", pais: "Uruguay", liga: "Argentina", activo: true },
  { nombre: "Gareth Bale", pais: "Gales", liga: "España", activo: false },
  { nombre: "Mesut Özil", pais: "Alemania", liga: "Inglaterra", activo: false },
  { nombre: "Carlos Bianchi", pais: "Argentina", liga: "Francia", activo: false },
  { nombre: "Alexis Sánchez", pais: "Chile", liga: "Italia", activo: true },
  { nombre: "Steven Gerrard", pais: "Inglaterra", liga: "Inglaterra", activo: false },
  { nombre: "Didier Drogba", pais: "Costa de Marfil", liga: "Inglaterra", activo: false },
  { nombre: "Samuel Eto’o", pais: "Camerún", liga: "España", activo: false },
  { nombre: "Fernando Torres", pais: "España", liga: "España", activo: false },
  { nombre: "Robin van Persie", pais: "Países Bajos", liga: "Inglaterra", activo: false },
  { nombre: "Frank Ribéry", pais: "Francia", liga: "Alemania", activo: false },
  { nombre: "Arjen Robben", pais: "Países Bajos", liga: "Alemania", activo: false },
  { nombre: "Thomas Müller", pais: "Alemania", liga: "Alemania", activo: true },
  { nombre: "Gerard Piqué", pais: "España", liga: "España", activo: false },
  { nombre: "Ivan Rakitić", pais: "Croacia", liga: "Croacia", activo: false },
  { nombre: "Yaya Touré", pais: "Costa de Marfil", liga: "Inglaterra", activo: false },
  { nombre: "Sadio Mané", pais: "Senegal", liga: "Arabia Saudita", activo: true },
  { nombre: "Pierre-Emerick Aubameyang", pais: "Gabón", liga: "Francia", activo: true },
  { nombre: "Radamel Falcao", pais: "Colombia", liga: "Colombia", activo: false },
  { nombre: "Vinícius Jr.", pais: "Brasil", liga: "España", activo: true },
  { nombre: "Rodrygo Goes", pais: "Brasil", liga: "España", activo: true },
  { nombre: "Phil Foden", pais: "Inglaterra", liga: "Inglaterra", activo: true },
  { nombre: "Kaká", pais: "Brasil", liga: "Italia", activo: false },
  { nombre: "Rivaldo", pais: "Brasil", liga: "España", activo: false },
  { nombre: "Cafu", pais: "Brasil", liga: "Italia", activo: false },
  { nombre: "Dani Alves", pais: "Brasil", liga: "España", activo: false },
  { nombre: "Thiago Silva", pais: "Brasil", liga: "Brasil", activo: true },
  { nombre: "Gabriel Batistuta", pais: "Argentina", liga: "Italia", activo: false },
  { nombre: "Hernán Crespo", pais: "Argentina", liga: "Italia", activo: false },
  { nombre: "Pablo Aimar", pais: "Argentina", liga: "España", activo: false },
  { nombre: "Javier Saviola", pais: "Argentina", liga: "España", activo: false },
  { nombre: "Esteban Cambiasso", pais: "Argentina", liga: "Italia", activo: false },
  { nombre: "Diego Simeone", pais: "Argentina", liga: "Italia", activo: false },
  { nombre: "Juan Sebastián Verón", pais: "Argentina", liga: "Italia", activo: false },
  { nombre: "Roberto Ayala", pais: "Argentina", liga: "España", activo: false },
  { nombre: "Enzo Francescoli", pais: "Uruguay", liga: "Francia", activo: false },
  { nombre: "Diego Forlán", pais: "Uruguay", liga: "España", activo: false },
  { nombre: "Christian Pulisic", pais: "Estados Unidos", liga: "Italia", activo: true },
  { nombre: "David Villa", pais: "España", liga: "España", activo: false },
  { nombre: "Andrés Iniesta", pais: "España", liga: "Emiratos Árabes Unidos", activo: false },
  { nombre: "Xavi Hernández", pais: "España", liga: "España", activo: false },
  { nombre: "Cesc Fàbregas", pais: "España", liga: "España", activo: false },
  { nombre: "Iker Casillas", pais: "España", liga: "España", activo: false },
  { nombre: "David Trezeguet", pais: "Francia", liga: "Italia", activo: false },
  { nombre: "Robert Pirès", pais: "Francia", liga: "Inglaterra", activo: false },
  { nombre: "Edwin van der Sar", pais: "Países Bajos", liga: "Inglaterra", activo: false },
  { nombre: "Miroslav Klose", pais: "Alemania", liga: "Alemania", activo: false },
  { nombre: "Bastian Schweinsteiger", pais: "Alemania", liga: "Alemania", activo: false },
  { nombre: "Philipp Lahm", pais: "Alemania", liga: "Alemania", activo: false },
  { nombre: "Michael Ballack", pais: "Alemania", liga: "Alemania", activo: false },
  { nombre: "Gianluigi Buffon", pais: "Italia", liga: "Italia", activo: false },
  { nombre: "Andrea Pirlo", pais: "Italia", liga: "Italia", activo: false },
  { nombre: "Francesco Totti", pais: "Italia", liga: "Italia", activo: false },
  { nombre: "Alessandro Del Piero", pais: "Italia", liga: "Italia", activo: false },
  { nombre: "Paolo Maldini", pais: "Italia", liga: "Italia", activo: false },
  { nombre: "Filippo Inzaghi", pais: "Italia", liga: "Italia", activo: false },
  { nombre: "Andriy Shevchenko", pais: "Ucrania", liga: "Italia", activo: false },
  { nombre: "Petr Čech", pais: "República Checa", liga: "Inglaterra", activo: false },
  { nombre: "Robert Lewandowski", pais: "Polonia", liga: "España", activo: true },
  { nombre: "Ivan Perišić", pais: "Croacia", liga: "Países Bajos", activo: true },
  { nombre: "Christian Eriksen", pais: "Dinamarca", liga: "Inglaterra", activo: true },
  { nombre: "Mario Kempes", pais: "Argentina", liga: "España", activo: false },
  { nombre: "Omar Sivori", pais: "Argentina", liga: "Italia", activo: false },
  { nombre: "Daniel Passarella", pais: "Argentina", liga: "Italia", activo: false },
  { nombre: "Ubaldo Fillol", pais: "Argentina", liga: "Argentina", activo: false },
  { nombre: "Ricardo Bochini", pais: "Argentina", liga: "Argentina", activo: false },
  { nombre: "Óscar Ruggeri", pais: "Argentina", liga: "Argentina", activo: false },
  { nombre: "Claudio Caniggia", pais: "Argentina", liga: "Italia", activo: false },
  { nombre: "Javier Mascherano", pais: "Argentina", liga: "España", activo: false },
  { nombre: "Guillermo Barros Schelotto", pais: "Argentina", liga: "Argentina", activo: false },
  { nombre: "Gustavo Barros Schelotto", pais: "Argentina", liga: "Argentina", activo: false },
  { nombre: "Diego Milito", pais: "Argentina", liga: "Italia", activo: false },
  { nombre: "Gabriel Milito", pais: "Argentina", liga: "España", activo: false },
  { nombre: "Javier Zanetti", pais: "Argentina", liga: "Italia", activo: false },
  { nombre: "Leandro Paredes", pais: "Argentina", liga: "Italia", activo: true },
  { nombre: "Giovani Lo Celso", pais: "Argentina", liga: "Inglaterra", activo: true },
  { nombre: "Rodrigo De Paul", pais: "Argentina", liga: "España", activo: true },
  { nombre: "Nicolás Otamendi", pais: "Argentina", liga: "Portugal", activo: true },
  { nombre: "Lisandro Martínez", pais: "Argentina", liga: "Inglaterra", activo: true },
  { nombre: "Cristian Romero", pais: "Argentina", liga: "Inglaterra", activo: true },
  { nombre: "Alexis Mac Allister", pais: "Argentina", liga: "Inglaterra", activo: true },
  { nombre: "Enzo Fernández", pais: "Argentina", liga: "Inglaterra", activo: true },
  { nombre: "Thiago Almada", pais: "Argentina", liga: "Estados Unidos", activo: true },
  { nombre: "Valentín Barco", pais: "Argentina", liga: "Inglaterra", activo: true },
  { nombre: "Fernando Gago", pais: "Argentina", liga: "España", activo: false },
  { nombre: "Darío Benedetto", pais: "Argentina", liga: "Argentina", activo: true },
  { nombre: "Milton Casco", pais: "Argentina", liga: "Argentina", activo: true },
  { nombre: "Franco Armani", pais: "Argentina", liga: "Argentina", activo: true },
  { nombre: "Sergio Romero", pais: "Argentina", liga: "Argentina", activo: true },
  { nombre: "Agustín Marchesín", pais: "Argentina", liga: "Argentina", activo: true },
  { nombre: "Marcos Rojo", pais: "Argentina", liga: "Argentina", activo: true },
  { nombre: "Alejandro Garnacho", pais: "Argentina", liga: "Inglaterra", activo: true },
  { nombre: "Nicolás Tagliafico", pais: "Argentina", liga: "Francia", activo: true },
  { nombre: "Gonzalo Montiel", pais: "Argentina", liga: "Argentina", activo: true },
  { nombre: "Marcelo Gallardo", pais: "Argentina", liga: "Francia", activo: false },
  { nombre: "Ricardo Centurión", pais: "Argentina", liga: "Argentina", activo: true },
  { nombre: "Cristian Pavón", pais: "Argentina", liga: "Brasil", activo: true },
  { nombre: "Alan Varela", pais: "Argentina", liga: "Portugal", activo: true },
  { nombre: "Agustín Rossi", pais: "Argentina", liga: "Brasil", activo: true },
  { nombre: "Miguel Borja", pais: "Colombia", liga: "Argentina", activo: true },
  { nombre: "Lucas Blondel", pais: "Argentina", liga: "Argentina", activo: true },
  { nombre: "Cristian Lema", pais: "Argentina", liga: "Argentina", activo: true },
  { nombre: "Germán Cano", pais: "Argentina", liga: "Brasil", activo: true },
  { nombre: "Martín Demichelis", pais: "Argentina", liga: "Alemania", activo: false },
  { nombre: "Nicolás De La Cruz", pais: "Uruguay", liga: "Brasil", activo: true },
  { nombre: "Vicente Taborda", pais: "Argentina", liga: "Argentina", activo: true },
  { nombre: "Kevin Lomónaco", pais: "Argentina", liga: "Argentina", activo: true },
  { nombre: "Juan Ignacio Nardoni", pais: "Argentina", liga: "Argentina", activo: true },
  { nombre: "Cristian Medina", pais: "Argentina", liga: "Argentina", activo: true },
  { nombre: "Kevin Castaño", pais: "Colombia", liga: "Argentina", activo: true },
  { nombre: "Kevin Zenón", pais: "Argentina", liga: "Argentina", activo: true },
  { nombre: "Miguel Merentiel", pais: "Uruguay", liga: "Argentina", activo: true },
  { nombre: "Facundo Colidio", pais: "Argentina", liga: "Argentina", activo: true },
  { nombre: "Milton Delgado", pais: "Argentina", liga: "Argentina", activo: true },
  { nombre: "Éver Banega", pais: "Argentina", liga: "Argentina", activo: true },
  { nombre: "Eduardo Salvio", pais: "Argentina", liga: "Argentina", activo: true },
  { nombre: "Esequiel Zeballos", pais: "Argentina", liga: "Argentina", activo: true },
  { nombre: "Luis Advíncula", pais: "Perú", liga: "Argentina", activo: true },
  { nombre: "Marcos Rojo", pais: "Argentina", liga: "Argentina", activo: true },
  { nombre: "Jude Bellingham", pais: "Inglaterra", liga: "España", activo: true },
  { nombre: "Pedri", pais: "España", liga: "España", activo: true },
  { nombre: "Gavi", pais: "España", liga: "España", activo: true },
  { nombre: "Ferran Torres", pais: "España", liga: "España", activo: true },
  { nombre: "Ansu Fati", pais: "España", liga: "Francia", activo: true },
  { nombre: "Dani Olmo", pais: "España", liga: "España", activo: true },
  { nombre: "Memphis Depay", pais: "Países Bajos", liga: "Brasil", activo: true },
  { nombre: "João Félix", pais: "Portugal", liga: "Arabia Saudita", activo: true },
  { nombre: "Rafael Leão", pais: "Portugal", liga: "Italia", activo: true },
  { nombre: "Diogo Jota", pais: "Portugal", liga: "Inglaterra", activo: false },
  { nombre: "Darwin Núñez", pais: "Uruguay", liga: "Inglaterra", activo: true },
  { nombre: "Federico Valverde", pais: "Uruguay", liga: "España", activo: true },
  { nombre: "Rodrigo Bentancur", pais: "Uruguay", liga: "Inglaterra", activo: true },
  { nombre: "Gianluigi Donnarumma", pais: "Italia", liga: "Francia", activo: true },
  { nombre: "Sandro Tonali", pais: "Italia", liga: "Inglaterra", activo: true },
  { nombre: "Marcus Rashford", pais: "Inglaterra", liga: "Inglaterra", activo: true },
  { nombre: "Jack Grealish", pais: "Inglaterra", liga: "Inglaterra", activo: true },
  { nombre: "Trent Alexander-Arnold", pais: "Inglaterra", liga: "Inglaterra", activo: true },
  { nombre: "Kai Havertz", pais: "Alemania", liga: "Inglaterra", activo: true },
  { nombre: "Martin Ødegaard", pais: "Noruega", liga: "Inglaterra", activo: true },
  { nombre: "Erling Haaland", pais: "Noruega", liga: "Inglaterra", activo: true },
  { nombre: "Kevin De Bruyne", pais: "Bélgica", liga: "Inglaterra", activo: true },
  { nombre: "Toni Kroos", pais: "Alemania", liga: "España", activo: false },
  { nombre: "Thibaut Courtois", pais: "Bélgica", liga: "España", activo: true },
  { nombre: "Thibaut Courtois", pais: "Bélgica", liga: "España", activo: true },
  { nombre: "Ngolo Kanté", pais: "Francia", liga: "Arabia Saudita", activo: true },
  { nombre: "Son Heung-min", pais: "Corea del Sur", liga: "Inglaterra", activo: true },
]

let listaRondas = []
let listaFiltrada = [...listaMacro]
let jugadores = []
let idUnico = 0
let cantidadRondasConfig = 3
let cantidadJugadoresConfig = 4
let rondaActual = 0
let turnoRelativo = 0
let futbolistasUsados = []
let ordenJugadoresPorRonda = []

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
  guardarJugadorEnLocalStorage(jugador)
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

  futbolistasUsados = []

  for (let r = 0; r < cantRondas; r++) {
    const rondaJugadores = []
    for (let j = 0; j < jugadores.length; j++) {
      rondaJugadores.push({ id: jugadores[j].id, nombre: jugadores[j].nombre, futbolista: "" })
    }
    const impostorIndex = Math.floor(Math.random() * rondaJugadores.length)
    rondaJugadores[impostorIndex].futbolista = "Impostor"

    const futbolistasDisponibles = []
    for (let i = 0; i < listaFiltrada.length; i++) {
      let yaUsado = false
      for (let u = 0; u < futbolistasUsados.length; u++) {
        if (listaFiltrada[i].nombre === futbolistasUsados[u]) {
          yaUsado = true
          break
        }
      }
      if (!yaUsado) {
        futbolistasDisponibles.push(listaFiltrada[i])
      }
    }

    let elegido = null
    if (futbolistasDisponibles.length > 0) {
      const idx = Math.floor(Math.random() * futbolistasDisponibles.length)
      elegido = futbolistasDisponibles[idx].nombre
      futbolistasUsados.push(elegido)
    } else if (listaFiltrada.length > 0) {
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

  prepararOrdenJugadoresPorRonda()
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
  futbolistasUsados = []
  ordenJugadoresPorRonda = []
  reiniciarFiltrado()

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
  listaFiltrada = [...listaMacro]
  cargarJugadoresAgregados()
}

function initPaso1() {
  restaurarEstadoSimple()
  cargarJugadoresAgregados()

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

    guardarEstadoSimple()
    irA("nombres.html")
  })
}

function initNombres() {
  restaurarEstadoSimple()
  cargarJugadoresAgregados()

  const listaIzquierda = document.getElementById("listaNombresIzquierda")
  const selectorJugador = document.getElementById("selectorJugador")
  const inputNombre = document.getElementById("inputNombreJugador")

  if (jugadores.length === 0) {
    irA("paso1.html")
    return
  }

  function actualizarListaIzquierda() {
    let html = ""
    for (let i = 0; i < jugadores.length; i++) {
      html += `<div class="mb-2">Jugador ${i + 1}: ${jugadores[i].nombre}</div>`
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
        guardarEstadoSimple()
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
    guardarEstadoSimple()
    irA("filtros.html")
  })

  const btnSkip = document.getElementById("omitirNombres")
  btnSkip.addEventListener("click", () => {
    guardarEstadoSimple()
    irA("filtros.html")
  })
}

function initFutbolistas() {
  cargarJugadoresAgregados()

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

    mostrarAlertaInfo("Futbolista agregado correctamente.", "alertContainer")
    mostrarListaFutbolistas()
  })

  mostrarListaFutbolistas()
}

function initFiltros() {
  restaurarEstadoSimple()
  cargarJugadoresAgregados()

  reiniciarFiltrado()

  if (jugadores.length === 0) {
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

  function aplicarFiltrosAutomatico() {
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
    } else if (a === "0") {
      filtrarPorActivo(false)
    }
  }

  selPais.addEventListener("change", aplicarFiltrosAutomatico)
  selLiga.addEventListener("change", aplicarFiltrosAutomatico)
  selActivo.addEventListener("change", aplicarFiltrosAutomatico)

  document.getElementById("borrarFiltros").addEventListener("click", () => {
    selPais.selectedIndex = 0
    selLiga.selectedIndex = 0
    selActivo.selectedIndex = 0
    reiniciarFiltrado()
    mostrarAlerta("Filtros borrados", "alertContainer")
  })

  document.getElementById("agregarJugador").addEventListener("click", () => {
    irA("futbolistas.html")
  })

  document.getElementById("comenzarJuego").addEventListener("click", () => {
    if (jugadores.length === 0) {
      mostrarAlerta("No hay jugadores configurados", "alertContainer")
      return
    }

    generarRondas(cantidadRondasConfig)
    rondaActual = 0
    turnoRelativo = 0
    guardarEstadoSimple()
    irA("juego.html")
  })
}

function initJuego() {
  restaurarEstadoSimple()
  cargarJugadoresAgregados()

  if (listaRondas.length === 0) {
    irA("filtros.html")
    return
  }

  if (jugadores.length === 0) {
    irA("paso1.html")
    return
  }

  function jugadorIndexEnOrden() {
    if (ordenJugadoresPorRonda.length > rondaActual && ordenJugadoresPorRonda[rondaActual].length > turnoRelativo) {
      return ordenJugadoresPorRonda[rondaActual][turnoRelativo]
    }
    return turnoRelativo % jugadores.length
  }

  const tituloRonda = document.querySelector(".titulo-principal")
  if (tituloRonda) {
    tituloRonda.textContent = `Ronda ${rondaActual + 1} en curso`
  }

  function mostrarPantallaListo() {
    const idx = jugadorIndexEnOrden()
    if (idx < 0 || idx >= jugadores.length) {
      return
    }
    const j = jugadores[idx]
    const cont = document.getElementById("contenedorJuego")
    cont.innerHTML = ""
    let html = ""
    html += '<div class="pantalla-centro">'
    html += `<h1 class="titulo-principal mb-5">Ronda ${rondaActual + 1} en curso</h1>`
    html += "<h2>" + j.nombre + "</h2>"
    html += "<p class='texto-listo'>¿Listo para comenzar?</p>"
    html += '<button id="btnTickListo" class="btn btn-dark btn-lg mt-4">✔</button>'
    html += "</div>"
    cont.innerHTML = html

    document.getElementById("btnTickListo").addEventListener("click", () => {
      mostrarPantallaRevelar()
    })
  }

  function mostrarPantallaRevelar() {
    const idx = jugadorIndexEnOrden()
    if (idx < 0 || idx >= jugadores.length) {
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
    html += `<h1 class="titulo-principal mb-5">Ronda ${rondaActual + 1} en curso</h1>`
    html += "<h2>Tu palabra:</h2>"
    if (asignacion === "Impostor") {
      html += '<div class="tag-palabra impostor">IMPOSTOR</div>'
    } else {
      html += '<div class="tag-palabra">' + asignacion + "</div>"
    }
    html += '<div class="mt-4"><button id="btnContinuarTurno" class="btn btn-dark btn-lg">✔</button></div>'
    html += "</div>"
    cont.innerHTML = html

    document.getElementById("btnContinuarTurno").addEventListener("click", () => {
      turnoRelativo = turnoRelativo + 1
      guardarEstadoSimple()
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
    html += `<h1 class="titulo-principal mb-5">Ronda ${rondaActual + 1} en curso</h1>`
    html += "<h2>Resultado de la ronda " + (rondaActual + 1) + "</h2>"
    html += '<div class="checkboxes">'
    html +=
      '  <label style="font-family: \'Clash Grotesk\', \'Inter\', system-ui, sans-serif;"><input type="checkbox" id="impGano"> ¿El impostor ganó?</label>'
    html +=
      '  <label style="font-family: \'Clash Grotesk\', \'Inter\', system-ui, sans-serif;"><input type="checkbox" id="impPerdio"> ¿El impostor perdió?</label>'
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

      guardarEstadoSimple()

      if (rondaActual >= listaRondas.length) {
        irA("final.html")
      } else {
        mostrarPantallaListo()
      }
    })
  }

  mostrarPantallaListo()
}

function initFinal() {
  restaurarEstadoSimple()

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
    limpiarEstadoSimple()
    reiniciarYVolverInicio()
  })

  document.getElementById("btnRejugarFiltros").addEventListener("click", () => {
    rondaActual = 0
    turnoRelativo = 0
    listaRondas = []
    for (let i = 0; i < jugadores.length; i++) {
      jugadores[i].puntos = 0
    }
    guardarEstadoSimple()
    irA("filtros.html")
  })
}

window.initMenu = initMenu
window.initPaso1 = initPaso1
window.initNombres = initNombres
window.initFiltros = initFiltros
window.initJuego = initJuego
window.initFinal = initFinal

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
    Colombia: "🇨🇴",
    Serbia: "🇷🇸",
    Paraguay: "🇵🇾",
    Chile: "🇨🇱",
    Hungría: "🇭🇺",
    Rusia: "🇷🇺",
    Gales: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
    "Costa de Marfil": "🇨🇮",
    Camerún: "🇨🇲",
    Senegal: "🇸🇳",
    Gabón: "🇬🇦",
    Ucrania: "🇺🇦",
    "República Checa": "🇨🇿",
    Perú: "🇵🇪",
    "Corea del Sur": "🇰🇷",
    "Emiratos Árabes Unidos": "🇦🇪",
  }

  const ligaEmojis = {
    "Estados Unidos": "🇺🇸",
    Argentina: "🇦🇷",
    Inglaterra: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    España: "🇪🇸",
    Italia: "🇮🇹",
    Brasil: "🇧🇷",
    "Arabia Saudita": "🇸🇦",
    Francia: "🇫🇷",
    Alemania: "🇩🇪",
    Uruguay: "🇺🇾",
    Croacia: "🇭🇷",
    Bélgica: "🇧🇪",
    Dinamarca: "🇩🇰",
    Suecia: "🇸🇪",
    México: "🇲🇽",
    Colombia: "🇨🇴",
    Chile: "🇨🇱",
    Hungría: "🇭🇺",
    Rusia: "🇷🇺",
    Gales: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
    "Costa de Marfil": "🇨🇮",
    Camerún: "🇨🇲",
    Senegal: "🇸🇳",
    Gabón: "🇬🇦",
    Ucrania: "🇺🇦",
    "República Checa": "🇨🇿",
    Perú: "🇵🇪",
    "Corea del Sur": "🇰🇷",
    "Emiratos Árabes Unidos": "🇦🇪",
    Portugal: "🇵🇹",
    "Países Bajos": "🇳🇱",
    Polonia: "🇵🇱",
  }

  const paises = {}
  const ligas = {}
  for (let i = 0; i < listaMacro.length; i++) {
    paises[listaMacro[i].pais] = true
    ligas[listaMacro[i].liga] = true
  }

  selPais.innerHTML = '<option value="" disabled selected>Seleccionar país</option>'
  for (const p in paises) {
    const emoji = paisEmojis[p] || "🌍"
    selPais.innerHTML += `<option value="${p}">${emoji} ${p}</option>`
  }

  selLiga.innerHTML = '<option value="" disabled selected>Seleccionar liga</option>'
  for (const l in ligas) {
    const emoji = ligaEmojis[l] || "⚽"
    selLiga.innerHTML += `<option value="${l}">${emoji} ${l}</option>`
  }
}

function prepararOrdenJugadoresPorRonda() {
  ordenJugadoresPorRonda = []

  if (jugadores.length === 0) {
    return
  }

  const ordenInicial = []
  for (let i = 0; i < jugadores.length; i++) {
    ordenInicial.push(i)
  }

  for (let r = 0; r < listaRondas.length; r++) {
    const ordenRonda = []
    for (let j = 0; j < ordenInicial.length; j++) {
      const indiceRotado = (ordenInicial[j] + r) % jugadores.length
      ordenRonda.push(indiceRotado)
    }
    ordenJugadoresPorRonda.push(ordenRonda)
  }
}

function guardarEstadoSimple() {
  sessionStorage.setItem("cantidadRondas", cantidadRondasConfig.toString())
  sessionStorage.setItem("cantidadJugadores", cantidadJugadoresConfig.toString())
  sessionStorage.setItem("rondaActual", rondaActual.toString())
  sessionStorage.setItem("turnoRelativo", turnoRelativo.toString())

  let jugadoresStr = ""
  for (let i = 0; i < jugadores.length; i++) {
    if (i > 0) jugadoresStr += ","
    jugadoresStr += jugadores[i].id + "|" + jugadores[i].nombre + "|" + (jugadores[i].puntos || 0)
  }
  sessionStorage.setItem("jugadores", jugadoresStr)

  let rondasStr = ""
  for (let r = 0; r < listaRondas.length; r++) {
    if (r > 0) rondasStr += ";"
    const ronda = listaRondas[r]
    for (let j = 0; j < ronda.length; j++) {
      if (j > 0) rondasStr += ","
      rondasStr += ronda[j].id + "|" + ronda[j].nombre + "|" + ronda[j].futbolista
    }
  }
  sessionStorage.setItem("listaRondas", rondasStr)

  sessionStorage.setItem("futbolistasUsados", futbolistasUsados.join(","))

  let ordenStr = ""
  for (let r = 0; r < ordenJugadoresPorRonda.length; r++) {
    if (r > 0) ordenStr += ";"
    ordenStr += ordenJugadoresPorRonda[r].join(",")
  }
  sessionStorage.setItem("ordenJugadoresPorRonda", ordenStr)
}

function restaurarEstadoSimple() {
  const cantR = sessionStorage.getItem("cantidadRondas")
  const cantJ = sessionStorage.getItem("cantidadJugadores")
  const ronda = sessionStorage.getItem("rondaActual")
  const turno = sessionStorage.getItem("turnoRelativo")

  if (cantR) cantidadRondasConfig = Number.parseInt(cantR, 10)
  if (cantJ) cantidadJugadoresConfig = Number.parseInt(cantJ, 10)
  if (ronda) rondaActual = Number.parseInt(ronda, 10)
  if (turno) turnoRelativo = Number.parseInt(turno, 10)

  const jugadoresStr = sessionStorage.getItem("jugadores")
  if (jugadoresStr && jugadoresStr !== "") {
    jugadores = []
    const jugadoresArr = jugadoresStr.split(",")
    for (let i = 0; i < jugadoresArr.length; i++) {
      const partes = jugadoresArr[i].split("|")
      if (partes.length >= 3) {
        jugadores.push({
          id: Number.parseInt(partes[0], 10),
          nombre: partes[1],
          puntos: Number.parseInt(partes[2], 10),
        })
      }
    }
    if (jugadores.length > 0) {
      idUnico = Math.max(...jugadores.map((j) => j.id)) + 1
    }
  }

  const rondasStr = sessionStorage.getItem("listaRondas")
  if (rondasStr && rondasStr !== "") {
    listaRondas = []
    const rondasArr = rondasStr.split(";")
    for (let r = 0; r < rondasArr.length; r++) {
      const rondaStr = rondasArr[r]
      if (rondaStr === "") continue
      const ronda = []
      const jugadoresRonda = rondaStr.split(",")
      for (let j = 0; j < jugadoresRonda.length; j++) {
        const partes = jugadoresRonda[j].split("|")
        if (partes.length >= 3) {
          ronda.push({
            id: Number.parseInt(partes[0], 10),
            nombre: partes[1],
            futbolista: partes[2],
          })
        }
      }
      listaRondas.push(ronda)
    }
  }

  const futUsados = sessionStorage.getItem("futbolistasUsados")
  if (futUsados && futUsados !== "") {
    futbolistasUsados = futUsados.split(",")
  }

  const ordenStr = sessionStorage.getItem("ordenJugadoresPorRonda")
  if (ordenStr && ordenStr !== "") {
    ordenJugadoresPorRonda = []
    const rondasOrden = ordenStr.split(";")
    for (let r = 0; r < rondasOrden.length; r++) {
      if (rondasOrden[r] === "") continue
      const orden = rondasOrden[r].split(",").map((n) => Number.parseInt(n, 10))
      ordenJugadoresPorRonda.push(orden)
    }
  }
}

function limpiarEstadoSimple() {
  sessionStorage.removeItem("cantidadRondas")
  sessionStorage.removeItem("cantidadJugadores")
  sessionStorage.removeItem("rondaActual")
  sessionStorage.removeItem("turnoRelativo")
  sessionStorage.removeItem("jugadores")
  sessionStorage.removeItem("listaRondas")
  sessionStorage.removeItem("futbolistasUsados")
  sessionStorage.removeItem("ordenJugadoresPorRonda")
}

function guardarJugadorEnLocalStorage(jugador) {
  const count = localStorage.getItem("listaMacroCount") || "0"
  const index = Number.parseInt(count, 10)

  localStorage.setItem("jugador_" + index + "_nombre", jugador.nombre)
  localStorage.setItem("jugador_" + index + "_pais", jugador.pais)
  localStorage.setItem("jugador_" + index + "_liga", jugador.liga)
  localStorage.setItem("jugador_" + index + "_activo", jugador.activo ? "1" : "0")

  localStorage.setItem("listaMacroCount", (index + 1).toString())
}

function cargarJugadoresAgregados() {
  const count = localStorage.getItem("listaMacroCount")
  if (!count) return

  const total = Number.parseInt(count, 10)
  for (let i = 0; i < total; i++) {
    const nombre = localStorage.getItem("jugador_" + i + "_nombre")
    const pais = localStorage.getItem("jugador_" + i + "_pais")
    const liga = localStorage.getItem("jugador_" + i + "_liga")
    const activoStr = localStorage.getItem("jugador_" + i + "_activo")

    if (nombre && pais && liga) {
      const activo = activoStr === "1"
      listaMacro.push({ nombre, pais, liga, activo })
    }
  }
}

function mostrarListaFutbolistas() {
  const listaFutbolistas = document.getElementById("listaFutbolistas")
  if (!listaFutbolistas) {
    return
  }
  let html = '<div class="futbolista-grid">'
  for (let i = 0; i < listaMacro.length; i++) {
    const jugador = listaMacro[i]
    const estadoBadge = jugador.activo
      ? '<span class="futbolista-card-badge activo">✅ Activo</span>'
      : '<span class="futbolista-card-badge inactivo">❌ No activo</span>'

    const banderaEmoji = obtenerEmojiBandera(jugador.pais)
    const ligaEmoji = obtenerEmojiLiga(jugador.liga)

    html += `
      <div class="futbolista-card">
        <div class="futbolista-card-nombre">${jugador.nombre}</div>
        <div class="futbolista-card-info">
          <div>${banderaEmoji} ${jugador.pais}</div>
          <div>${ligaEmoji} ${jugador.liga}</div>
        </div>
        ${estadoBadge}
      </div>
    `
  }
  html += "</div>"
  listaFutbolistas.innerHTML = html
}

function obtenerEmojiBandera(pais) {
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
    Colombia: "🇨🇴",
    Serbia: "🇷🇸",
    Paraguay: "🇵🇾",
    Chile: "🇨🇱",
    Hungría: "🇭🇺",
    Rusia: "🇷🇺",
    Gales: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
    "Costa de Marfil": "🇨🇮",
    Camerún: "🇨🇲",
    Senegal: "🇸🇳",
    Gabón: "🇬🇦",
    Ucrania: "🇺🇦",
    "República Checa": "🇨🇿",
    Perú: "🇵🇪",
    "Corea del Sur": "🇰🇷",
    "Emiratos Árabes Unidos": "🇦🇪",
  }
  return paisEmojis[pais] || "🌍"
}

function obtenerEmojiLiga(liga) {
  const ligaEmojis = {
    "Estados Unidos": "🇺🇸",
    Argentina: "🇦🇷",
    Inglaterra: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    España: "🇪🇸",
    Italia: "🇮🇹",
    Brasil: "🇧🇷",
    "Arabia Saudita": "🇸🇦",
    Francia: "🇫🇷",
    Alemania: "🇩🇪",
    Uruguay: "🇺🇾",
    Croacia: "🇭🇷",
    Bélgica: "🇧🇪",
    Dinamarca: "🇩🇰",
    Suecia: "🇸🇪",
    México: "🇲🇽",
    Colombia: "🇨🇴",
    Chile: "🇨🇱",
    Hungría: "🇭🇺",
    Rusia: "🇷🇺",
    Gales: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
    "Costa de Marfil": "🇨🇮",
    Camerún: "🇨🇲",
    Senegal: "🇸🇳",
    Gabón: "🇬🇦",
    Ucrania: "🇺🇦",
    "República Checa": "🇨🇿",
    Perú: "🇵🇪",
    "Corea del Sur": "🇰🇷",
    "Emiratos Árabes Unidos": "🇦🇪",
    Portugal: "🇵🇹",
    "Países Bajos": "🇳🇱",
    Polonia: "🇵🇱",
  }
  return ligaEmojis[liga] || "⚽"
}
