export class Canal {
    constructor(nombre, banner, descripcion, streamer) {
        this.nombre = nombre;
        this.banner = banner;
        this.descripcion = descripcion;
        this.streamer = streamer;
        streamer.agregarCanal(this);
        this.streamings = [];
    }
    agregarPlataforma(plataforma) {
        this.plataforma = plataforma;
    }
    agregarStream(stream) {
        this.streamings.push(stream);
    }
    detalleCanal() {
        var _a;
        console.log("[+] Detalle del canal");
        console.log("Nombre de la plataforma: " + this.nombre);
        console.log("Logo: " + this.banner);
        console.log("Descripcion: " + this.descripcion);
        console.log("Plataforma: " + ((_a = this.plataforma) === null || _a === void 0 ? void 0 : _a.nombre));
        console.log("Streamer: " + this.streamer.nickname);
    }
    listarStreamings() {
        console.log("[+] Lista de Streamings:");
        this.streamings.forEach((value) => {
            console.log("[-] " + value.nombre);
        });
    }
}
