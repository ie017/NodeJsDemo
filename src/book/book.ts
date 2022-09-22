import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";

/* Tout dans Mongoose commence par un schéma. Chaque schéma correspond
à une collection MongoDB et définit la forme des documents au sein de
 cette collection. */
let bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    price: Number,
    publishingDate: Date,
    available: Boolean,
    quantity: Number
});

bookSchema.plugin(mongoosePaginate); // plugin permet de faire la pagination

/* Pour utiliser notre définition de schéma, nous devons convertir notre blogSchema en
un modèle avec lequel nous pouvons travailler. Pour ce faire, nous le passons dans
mongoose.model(modelName, schema):*/

const Book = mongoose.model("Book", bookSchema);

export default Book;