import { Canal } from "./canal.js"
import { Categoria } from "./categoria.js"

export class Stream{
    nombre:string
    fecha:Date
    duracion:string

    canal:Canal
    categorias:Categoria[]

    constructor(nombre:string,fecha:Date, duracion:string, canal:Canal, categoria:Categoria){
        this.nombre=nombre
        this.fecha=fecha
        this.duracion=duracion
        this.canal=canal
        canal.agregarStream(this)
        this.categorias =[categoria]
    }

    agregarCategorias(categoria:Categoria){
        this.categorias.push(categoria)
    }
    detalleStream(){
        console.log("[+] Detalle del Stream")
        console.log("Nombre de la plataforma: "+this.nombre)
        console.log("Logo: "+this.fecha)
        console.log("Descripcion: "+this.duracion)
        console.log("Canal: "+this.canal)
    }
    listarCategorias(){
        console.log("[+] Lista de Categorías:")
        this.categorias.forEach((value) => {
            console.log("[-] "+value.nombre)
        })
    }
}