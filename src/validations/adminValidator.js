let { check, body } = require('express-validator')
const db = require('../database/models')
const Users = db.User 
const bcrypt = require("bcryptjs");

module.exports = [ 
    check('email')
    .notEmpty()
    .withMessage("Ingresa un email").bail()
    .isEmail()
    .withMessage("Ingresa un email valido"),

    check('pass')
    .notEmpty()
    .withMessage("Debes escribir la contraseña"),

    
    body('pass')
    .custom((value, {req}) => {
        return db.User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then((user)=>{                
                if(value === user.dataValues.pass){
                    return true;
                }else{
                    return Promise.reject('Contraseña inválida.');
                }
        });
        
    })


        
      ]

      