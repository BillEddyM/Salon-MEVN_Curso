
import express from 'express' //esm modules javascript
import dotenv from 'dotenv' //
import { db } from './config/db.js'
import servicesRoutes from './routes/servicesRoutes.js'
import colors from 'colors'

dotenv.config() 

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
    console.log( colors.blue('El servidor se esta ejecutadon en el puerto:', PORT))
    
})


