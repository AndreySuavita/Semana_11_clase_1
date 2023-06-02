import { Stream } from "./stream.js"

export class Categoria{
    nombre:string
    imagen:string
    descripcion:string

    streamings:Stream[]

    constructor(nombre:string,imagen:string,descripcion:string){
        this.nombre=nombre
        this.imagen=imagen
        this.descripcion=descripcion
        this.streamings = []
    }

    agregarStream(stream:Stream){
        this.streamings.push(stream)
    }
    listarStreamings(){
        console.log("[+] Lista de Streamings:")
        this.streamings.forEach((value) => {
            console.log("[-] "+value.nombre)
        })
    }
}