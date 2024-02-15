
import express from 'express' //esm modules javascript
import { db } from './config/db.js'
import servicesRoutes from './routes/servicesRoutes.js'

// config la app 
const app = express()

//conectar a la DB
db()

//def ruta 
app.use('/api/services', servicesRoutes)

//defirin puerto 
const PORT = process.env.PORT || 4000


//arrancar app 
app.listen(PORT, () => {
    console.log('El servidor se esta ejecutadon en el puerto:', PORT)})