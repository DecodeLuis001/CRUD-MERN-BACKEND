/*//Importamos la conexion a la base de datos.
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

const BlogModel = db.define('blogs', {
    nombre: { type: DataTypes.STRING},
    telefono: {type: DataTypes.STRING},
    origen: {type: DataTypes.STRING},
    destino: {type: DataTypes.STRING},
    tiempo: {type: DataTypes.STRING},
})

export default BlogModel*/

import mongoose from "mongoose";
const Schema = mongoose.Schema

const blogSchema = new Schema(
    {
      nombre: {type:String},
      telefono: {type:String},
      origen: {type:String},
      destino: {type:String},
      tiempo: {type:String},  
    },
    {collection: 'blogs'}
)

export default mongoose.model('BlogModel', blogSchema)