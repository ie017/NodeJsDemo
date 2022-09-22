"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
/* Tout dans Mongoose commence par un schéma. Chaque schéma correspond
à une collection MongoDB et définit la forme des documents au sein de
 cette collection. */
let bookSchema = new mongoose_1.default.Schema({
    title: String,
    author: String,
    price: Number,
    publishingDate: Date,
    available: Boolean,
    quantity: Number
});
bookSchema.plugin(mongoose_paginate_1.default); // plugin permet de faire la pagination
/* Pour utiliser notre définition de schéma, nous devons convertir notre blogSchema en
un modèle avec lequel nous pouvons travailler. Pour ce faire, nous le passons dans
mongoose.model(modelName, schema):*/
const Book = mongoose_1.default.model("Book", bookSchema);
exports.default = Book;
