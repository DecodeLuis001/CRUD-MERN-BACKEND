import express from "express"
import cors from 'cors'
//Se importa la conexion con la base de datos.
import db from "./database/db.js"
//se importa el enrutador.
import blogRoutes from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/blogs', blogRoutes)

/* Esto es relacionado a la base de datos en sql.
//Se asegura la conexion con la base de datos.
try{
    await db.authenticate()
    console.log('Conexion exitosa a la base de datos.')
} catch(error){
    console.log(`El error de conexion es: ${error}`)
}

app.get('/', (req, res)=>{
    res.send('Hola mundo')
})*/

app.listen(8000, ()=>{
    console.log('Servidor corriendo en: http://localhost:8000/')
})

