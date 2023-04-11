import {check, validationResult} from 'express-validator'
import Usuario from '../models/Usuario.entity.js'

const formularioLogin = (req, res) => {
  res.render('auth/login', {
    pagina: 'Iniciar Sesion'
  })
}

const formularioRegistro = (req, res) => {
  res.render('auth/registro', {
    pagina: 'Crear Cuenta'
  })
}

const registrarFormulario = async (req, res) => {
  // Validacion
  await check('nombre').notEmpty().withMessage("El nombre es obligatorio").run(req)

  let resultado = validationResult(req)

  res.json(resultado.array)

  const usuario = await Usuario.create(req.body)

  res.json(usuario)
}

const formularioOlvidePassword = (req, res) => {
  res.render('auth/olvide-password', {
    pagina: 'Recupera tu acceso'
  })
}

export {
  formularioLogin,
  formularioRegistro,
  formularioOlvidePassword,
  registrarFormulario
}