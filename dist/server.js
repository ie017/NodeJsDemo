"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Pour utiliser le framework express
const express_1 = __importDefault(require("express"));
class Server {
    constructor(port) {
        this.port = port;
    }
    /* ou :
    private port: number;
    constructor(port:number) {
        this.port = port;
    }
     */
    start() {
        const app = (0, express_1.default)();
        app.get("/", (req, resp) => {
            resp.send("Hello express !!!");
        });
        app.listen(this.port, () => {
            console.log("Server Started");
        });
    }
}
exports.default = Server;
/* Avec default on peut exporter la classe par défaut*/ 
