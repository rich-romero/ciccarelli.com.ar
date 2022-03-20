const { check, body } = require('express-validator')

module.exports = [
    check('titulo')
    .notEmpty()
    .withMessage('El campo titulo es obligatorio').bail()
    .isLength({ min: 4, max: 200 })
    .withMessage('El nombre tiene que tener entre 4 y 200 caracteres'),

    check('subtitulo')
    .notEmpty()
    .withMessage('El campo subtitulo es obligatorio').bail()
    .isLength({ min: 4, max: 200 })
    .withMessage('El nombre tiene que tener entre 4 y 200 caracteres'),
    
     check('descripcion')
     .isLength({ max: 5000 })
     .withMessage('El nombre tiene que tener hasta 5000 caracteres'),

     


]