/* Instancier le serveur et le démarrer*/


import Server from "./server";

let server = new Server(8765);
server.start();