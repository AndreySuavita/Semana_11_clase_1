import { Aplicacion } from "./aplicacion.js"
import { Canal } from "./canal.js"

export class Plataforma{
    nombre:string
    logo:string
    descripcion:string
    patrocinador:string

    aplicacion:Aplicacion|undefined
    canales : Canal[]

    constructor(nombre:string, logo:string, descripcion:string, patrocinador:string){
        this.nombre=nombre
        this.logo = logo
        this.descripcion = descripcion
        this.patrocinador = patrocinador
        this.canales = []

    }

    agregarCanal(canal:Canal){
        this.canales.push(canal)
        canal.agregarPlataforma(this)
    }

    agregarAplicacion(aplicacion:Aplicacion){
        this.aplicacion = aplicacion
    }

    detallePlataforma(){
            console.log("[+] Detalle de la plataforma")
            console.log("Nombre de la plataforma: "+this.nombre)
            console.log("Logo: "+this.logo)
            console.log("Descripcion: "+this.descripcion)
            console.log("Patrocinador: "+this.patrocinador)
            console.log("Aplicacion: "+this.aplicacion?.nombre)

    }

    listarCanales(){
        console.log("[+] Lista de Canales:")
        this.canales.forEach((value) => {
            console.log("[-] "+value.nombre)
        })
    }

    listarStreamer(){
        console.log("[+] Lista de Streamer:")
        this.canales.forEach((value) => {
            console.log("[-] "+value.streamer.nickname)
        })
    }
}