const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs');
const db = require('../database/models');
const Users = db.User;

let controller = {
    admin: (req,res) => {
         res.render('admin', {
            session: req.session
         }
         )
},

processAdminLogin: (req, res) => {
    let errors = validationResult(req);
    if(errors.isEmpty()){
        Users.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(user => {
            req.session.user = {
                id: user.id,
                email: user.email,
                rol: user.rol
            }

           if(req.body.remember){
               const TIME_IN_MILISECONDS = 60000
               res.cookie("userCicarelli", req.session.user, {
                   expires: new Date(Date.now() + TIME_IN_MILISECONDS),
                   httpOnly: true,
                   secure: true
               })
           }

            res.locals.user = req.session.user;

            res.redirect('/')
            console.log('Iniciaste seccion exitosamente!')
        })
    }else{
        res.render('admin', {
            errors: errors.mapped(),
            session: req.session,
            old: req.body
        })
    }
   
}




}

module.exports = controller