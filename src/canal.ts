import { Plataforma } from "./plataforma.js"
import { Stream } from "./stream.js"
import { Streamer } from "./streamer.js"


export class Canal{
    nombre:string
    banner:string
    descripcion:string

    plataforma:Plataforma|undefined
    streamer:Streamer
    streamings:Stream[]

    constructor(nombre:string,banner:string,descripcion:string, streamer:Streamer){
        this.nombre = nombre
        this.banner = banner
        this.descripcion = descripcion
        this.streamer = streamer
        streamer.agregarCanal(this)
        this.streamings=[]

    }

    agregarPlataforma(plataforma:Plataforma){
        this.plataforma = plataforma

    }

    agregarStream(stream:Stream){
        this.streamings.push(stream)
    }

    detalleCanal(){
        console.log("[+] Detalle del canal")
        console.log("Nombre de la plataforma: "+this.nombre)
        console.log("Logo: "+this.banner)
        console.log("Descripcion: "+this.descripcion)
        console.log("Plataforma: "+this.plataforma?.nombre)
        console.log("Streamer: "+this.streamer.nickname)
    
    }
    listarStreamings(){
        console.log("[+] Lista de Streamings:")
        this.streamings.forEach((value) => {
            console.log("[-] "+value.nombre)
        })
    }
}