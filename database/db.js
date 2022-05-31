//Para conexion por medio de MySQL.
/*import {Sequelize} from "sequelize";

const db = new Sequelize('database_app', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
        socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
    }
})

export default db*/

import mongoose from 'mongoose'
import 'dotenv/config'
const url = `mongodb+srv://${process.env.USERNAMEM}:${process.env.PASSWORD}@cluster0.zpjsu.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`
mongoose.connect(url)

const db = mongoose.connection
db.on('open', ()=> {console.log("Conectado a MONGODB!")})
db.on('error', ()=> {console.log("Error conectadose a MONGODB!")})

export default db