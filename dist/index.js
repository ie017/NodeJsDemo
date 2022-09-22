"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const book_1 = __importDefault(require("./book/book"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.get("/", (req, resp) => {
    resp.send("hello Express");
});
app.listen(9876, () => {
    console.log("Server started");
});
/* URL to specify where is our server mongodb*/
const url = "mongodb://localhost:27017/books";
/* connect to mongodb using the function connect from mongoose*/
mongoose_1.default.connect(url, (error) => {
    if (error)
        console.log(error);
    else
        console.log("Connected to mongodb 200 OK");
});
/* Rest api for getting all books */
app.get("/books", (req, resp) => {
    book_1.default.find((error, books) => {
        if (error)
            resp.status(500);
        /* Send list of books to response */
        else
            resp.send(books);
    });
});
/* Node.js body parsing middleware Analysez les corps des requêtes entrantes dans un middleware
avant vos gestionnaires, disponibles sous la propriété req.body.*/
/* Renvoie le middleware qui analyse uniquement json et ne regarde que
les requêtes où l'en-tête Content-Type correspond à l'option type. Cet
analyseur accepte tout encodage Unicode du corps */
app.use(body_parser_1.default.json());
/* Rest api for setting book*/
app.post("/book", (req, resp) => {
    let book = new book_1.default(req.body);
    book.save((error) => {
        if (error)
            resp.status(500).send(error);
        else
            resp.send(book);
    });
});
app.get("/book/:id", (req, resp) => {
    book_1.default.findById(req.params.id, (error, book) => {
        if (error)
            resp.status(500);
        /* Send list of books to response */
        else
            resp.send(book);
    });
});
app.put("/book/:id", (req, resp) => {
    book_1.default.findByIdAndUpdate(req.params.id, req.body, (error) => {
        if (error)
            resp.status(500).send(error);
        else
            resp.send("Successfully updated book");
    });
});
app.delete("/book/:id", (req, resp) => {
    book_1.default.findByIdAndDelete(req.params.id, error => {
        if (error)
            resp.status(500);
        else
            resp.send("Successfully deleted book");
    });
});
/* Rest api with pagination*/
app.get("/pagination/books", (req, resp) => {
    let page = parseInt(String(req.query.page || 1) /* By default*/);
    let size = parseInt(String(req.query.size || 5) /* By default*/);
    book_1.default.paginate({ /*User if we have search operation for example*/}, { page: page, limit: size }, (error, result) => {
        if (error)
            resp.status(500).send(error);
        else
            resp.send(result);
    });
});
