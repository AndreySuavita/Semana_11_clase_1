export class Plataforma {
    constructor(nombre, logo, descripcion, patrocinador) {
        this.nombre = nombre;
        this.logo = logo;
        this.descripcion = descripcion;
        this.patrocinador = patrocinador;
        this.canales = [];
    }
    agregarCanal(canal) {
        this.canales.push(canal);
        canal.agregarPlataforma(this);
    }
    agregarAplicacion(aplicacion) {
        this.aplicacion = aplicacion;
    }
    detallePlataforma() {
        var _a;
        console.log("[+] Detalle de la plataforma");
        console.log("Nombre de la plataforma: " + this.nombre);
        console.log("Logo: " + this.logo);
        console.log("Descripcion: " + this.descripcion);
        console.log("Patrocinador: " + this.patrocinador);
        console.log("Aplicacion: " + ((_a = this.aplicacion) === null || _a === void 0 ? void 0 : _a.nombre));
    }
    listarCanales() {
        console.log("[+] Lista de Canales:");
        this.canales.forEach((value) => {
            console.log("[-] " + value.nombre);
        });
    }
    listarStreamer() {
        console.log("[+] Lista de Streamer:");
        this.canales.forEach((value) => {
            console.log("[-] " + value.streamer.nickname);
        });
    }
}
