import express from 'express'
import usuarioRoutes from './routes/usuario.routes.js'
import db from './config/db.js'

// Crear la app
const app = express()

// Habilitar lectura de datos de formularios
app.use(express.urlencoded({extended: true}))

// Conexion a la base de datos
try {
  await db.authenticate()
  db.sync()
} catch (error) {
  console.log(error);
}

// Habilitar Pug
app.set('view engine', 'pug')
app.set('views', './views')

// Carpeta publica
app.use(express.static('public'))
// Routing
app.use('/auth', usuarioRoutes)

// Definir un puerto y arrancar el proyecto
const port = 3001

app.listen(port, () => {
  console.log(`El servidor esta funcionando en el puerto: ${port}`);
})