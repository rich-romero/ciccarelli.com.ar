const { check } = require('express-validator')

module.exports = [
  
    check('marca')
    .notEmpty()
    .withMessage('El campo marca es obligatorio').bail()
    .isLength({ min: 4, max: 60 })
    .withMessage('El nombre tiene que tener entre 4 y 60 caracteres'),
    
    check('motor')
    .notEmpty()
    .withMessage('El campo motor es obligatorio').bail()
    .isLength({ min: 4, max: 60 })
    .withMessage('El nombre tiene que tener entre 4 y 60 caracteres'),     

    check('modelo')
    .notEmpty()
    .withMessage('El campo modelo es obligatorio').bail()
    .isLength({ min: 4, max: 70 })
    .withMessage('El nombre tiene que tener entre 4 y 70 caracteres'),

    check('piezas')
    .notEmpty()
    .withMessage('El campo piezas es obligatorio').bail()
    .isLength({ min: 4, max: 500 })
    .withMessage('El nombre tiene que tener entre 4 y 500 caracteres'),

    check('cilindradas')
    .notEmpty()
    .withMessage('El campo cilindradas es obligatorio').bail()
    .isLength({ min: 4, max: 60 })
    .withMessage('El nombre tiene que tener entre 4 y 60 caracteres'),

     
     


]