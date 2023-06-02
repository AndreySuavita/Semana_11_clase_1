
import {Plataforma} from "./plataforma.js"
export class Aplicacion{
    nombre:string
    plataformas:Plataforma[]

    constructor(nombre:string,plataforma?:Plataforma){
        this.nombre=nombre
        if(plataforma){
            this.plataformas = [plataforma]
            plataforma.agregarAplicacion(this)
        }else{
            this.plataformas = []
        }
    }

    agregarPlataforma(plataforma:Plataforma){
        this.plataformas.push(plataforma)
        plataforma.agregarAplicacion(this)
    }

    listarPlataformas(){
        console.log("[+] Lista de plataformas:")
        this.plataformas.forEach((value) => {
            console.log("[-] "+value.nombre)
        })
    }


}