export class Categoria {
    constructor(nombre, imagen, descripcion) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.streamings = [];
    }
    agregarStream(stream) {
        this.streamings.push(stream);
    }
    listarStreamings() {
        console.log("[+] Lista de Streamings:");
        this.streamings.forEach((value) => {
            console.log("[-] " + value.nombre);
        });
    }
}
