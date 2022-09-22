import express, {Request, Response} from "express"
import mongoose from "mongoose";
import Book from "./book/book";
import bodyParser from "body-parser"

const app = express();
app.get("/", (req,resp)=>{
    resp.send("hello Express");
});
app.listen(9876,()=>{
    console.log("Server started");
});

/* URL to specify where is our server mongodb*/
const url: string = "mongodb://localhost:27017/books";

/* connect to mongodb using the function connect from mongoose*/
mongoose.connect(url, (error)=>{
   if (error) console.log(error);
   else console.log("Connected to mongodb 200 OK");
});

/* Rest api for getting all books */
app.get("/books", (req:Request, resp:Response)=>{
    Book.find((error,books)=>{
        if (error) resp.status(500);
        /* Send list of books to response */
        else resp.send(books);
    });
});

/* Node.js body parsing middleware Analysez les corps des requêtes entrantes dans un middleware
avant vos gestionnaires, disponibles sous la propriété req.body.*/

/* Renvoie le middleware qui analyse uniquement json et ne regarde que
les requêtes où l'en-tête Content-Type correspond à l'option type. Cet
analyseur accepte tout encodage Unicode du corps */

app.use(bodyParser.json());

/* Rest api for setting book*/
app.post("/book", (req:Request, resp:Response) => {
    let book = new Book(req.body);
    book.save((error) => {
        if (error)
            resp.status(500).send(error);
        else
            resp.send(book);
    });
});

app.get("/book/:id", (req:Request, resp:Response)=>{
    Book.findById(req.params.id, (error, book) => {
        if (error) resp.status(500);
        /* Send list of books to response */
        else resp.send(book);
    });
});

app.put("/book/:id", (req:Request, resp:Response) => {
    Book.findByIdAndUpdate(req.params.id, req.body, (error)=> {
        if (error)
            resp.status(500).send(error);
        else
            resp.send("Successfully updated book");
    });
});

app.delete("/book/:id", (req, resp)=>{
    Book.findByIdAndDelete(req.params.id, error => {
        if (error) resp.status(500);
        else resp.send("Successfully deleted book");
    });
});

/* Rest api with pagination*/
app.get("/pagination/books", (req, resp)=>{
   let page: number = parseInt(String(req.query.page || 1) /* By default*/);
   let size: number = parseInt(String(req.query.size || 5) /* By default*/);
   Book.paginate({/*User if we have search operation for example*/}, {page: page, limit: size}, (error, result)=>{
      if (error) resp.status(500).send(error);
      else resp.send(result);
   });
});