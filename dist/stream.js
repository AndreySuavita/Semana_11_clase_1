export class Stream {
    constructor(nombre, fecha, duracion, canal, categoria) {
        this.nombre = nombre;
        this.fecha = fecha;
        this.duracion = duracion;
        this.canal = canal;
        canal.agregarStream(this);
        this.categorias = [categoria];
    }
    agregarCategorias(categoria) {
        this.categorias.push(categoria);
    }
    detalleStream() {
        console.log("[+] Detalle del Stream");
        console.log("Nombre de la plataforma: " + this.nombre);
        console.log("Logo: " + this.fecha);
        console.log("Descripcion: " + this.duracion);
        console.log("Canal: " + this.canal);
    }
    listarCategorias() {
        console.log("[+] Lista de Categorías:");
        this.categorias.forEach((value) => {
            console.log("[-] " + value.nombre);
        });
    }
}
