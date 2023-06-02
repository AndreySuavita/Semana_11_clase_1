export class Aplicacion {
    constructor(nombre, plataforma) {
        this.nombre = nombre;
        if (plataforma) {
            this.plataformas = [plataforma];
            plataforma.agregarAplicacion(this);
        }
        else {
            this.plataformas = [];
        }
    }
    agregarPlataforma(plataforma) {
        this.plataformas.push(plataforma);
        plataforma.agregarAplicacion(this);
    }
    listarPlataformas() {
        console.log("[+] Lista de plataformas:");
        this.plataformas.forEach((value) => {
            console.log("[-] " + value.nombre);
        });
    }
}
