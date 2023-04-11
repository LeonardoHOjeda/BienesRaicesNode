import express from 'express'
import { formularioLogin, formularioRegistro, formularioOlvidePassword, registrarFormulario } from '../controllers/usuario.controller.js'

const router = express.Router()

router.get('/login', formularioLogin)

router.get('/registro', formularioRegistro)
router.post('/registro', registrarFormulario)

router.get('/olvide-password', formularioOlvidePassword)

export default router