// Pour utiliser le framework express
import express, {Request, Response} from "express";

export default class Server{
    constructor(private port:number) {
    }
    /* ou :
    private port: number;
    constructor(port:number) {
        this.port = port;
    }
     */
    public start(): void{
        const app = express();
        app.get("/",(req: Request, resp: Response)=>{
            resp.send("Hello express !!!");
        });
        app.listen(this.port, ()=>{
            console.log("Server Started");
        })
    }
}

/* Avec default on peut exporter la classe par défaut*/