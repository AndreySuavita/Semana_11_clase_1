
import { Aplicacion } from "./aplicacion.js";
import { Categoria } from "./categoria.js";
import { Plataforma } from "./plataforma.js";
import { Canal } from "./canal.js";
import { Streamer } from "./streamer.js";
import { Stream } from "./stream.js";

//crear objetos
const goluchas = new Plataforma("goluchas","logo","pagina para ver lucha libre","WWE")
const aplicacion1 = new Aplicacion("aplicacion1",goluchas)
const cara = new Streamer("cara","calvo gordo jugador de resident evil speedrun", "caradechiste.instagram") 
const caradechiste = new Canal("Caradechiste","banner1","Canal de videojuegos en speedrun",cara)
const speedrun = new Categoria("speedrun","imagen1","recorrer un juego tan rapido como séa posible")
const diabloVI = new Stream("DiabloVI",new Date("2023-02-06"),"16 horas",caradechiste,speedrun)

//9. agrear plataforma
goluchas.agregarCanal(caradechiste)

//10. agregar canal
// se agrega el canal a una plataforma en la funcion de agregarCanal

//11. agregar streamer
// como es una composición en la que cada canal solo posee un streamer, este se agrega cuando se crea un canal

//12. agregar un stream
caradechiste.agregarStream(diabloVI)
speedrun.agregarStream(diabloVI)

//13. agregar a un canal un streamer
// canal y streamer poseen una composición en la que un canal solo puede tener un streamer que se agrega cuando se crea el canal

//14. agregar un stream a un stream
//en este diseño la clase Stream no esta directamente relacionada con la clase Streamer pero si 
//esta relacionada con la clase Canal en cuyo caso se puede utilizar el metodo agregarStream


console.log("1. listar plataformas")
aplicacion1.listarPlataformas()

console.log("2. detalle de plataforma")
goluchas.detallePlataforma()

console.log("3.lista de canales")
goluchas.listarCanales()

console.log("4. Detalle de canal")
caradechiste.detalleCanal()

console.log("5. Listado de streamers")
goluchas.listarStreamer()

console.log("6. Detalle de un streamer")
cara.detalleStreamer()

console.log("7. listado de streams")
caradechiste.listarStreamings()

console.log("8. Detalle de stream")
diabloVI.detalleStream()











