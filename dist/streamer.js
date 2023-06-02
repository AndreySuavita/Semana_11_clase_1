export class Streamer {
    constructor(nickname, descripcion, redesSociales) {
        this.nickname = nickname;
        this.descripcion = descripcion;
        this.redesSociales = redesSociales;
        this.canales = [];
    }
    agregarCanal(canal) {
        this.canales.push(canal);
    }
    listarCanales() {
        console.log("[+] Lista de Canales:");
        this.canales.forEach((value) => {
            console.log("[+] " + value.nombre);
        });
    }
    detalleStreamer() {
        console.log("[+] Detalle de Streamer");
        console.log("Nombre de la plataforma: " + this.nickname);
        console.log("Logo: " + this.descripcion);
        console.log("Descripcion: " + this.redesSociales);
    }
}
