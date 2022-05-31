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
const url = 'mongodb://localhost:27017/MERN1'
mongoose.connect(url)

const db = mongoose.connection
db.on('open', ()=> {console.log("Conectado a MONGODB!")})
db.on('error', ()=> {console.log("Error conectadose a MONGODB!")})

export default db