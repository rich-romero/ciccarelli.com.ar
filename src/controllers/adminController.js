const { validationResult } = require('express-validator')

const db = require('../database/models');
const Users = db.User;
const Noticias = db.Noticia;
const NoticiaImage = db.NoticiaImage


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
        .catch(error => console.log(error))

    }else{
        res.render('admin', {
            errors: errors.mapped(),
            session: req.session,
            old: req.body
        })
    }  
    
   
},

dashboradAdmin: (req, res) => {
    res.render('dashboradAdmin', {
        session: req.session
    })
},

/* Crud noticias */

noticiasCreate: (req, res) => {

    Noticias.findAll()
    .then((noticia) => {
        console.log(noticia)
        res.render('noticiasCreate', {
            noticia,
            session: req.session
        })
    })
    .catch(error => console.log(error))

},

noticiasPost: (req, res) => {
    let errors = validationResult(req)
    console.log(errors)
    if (errors.isEmpty()){
        const { titulo, subtitulo, descripcion,} = req.body
        Noticias.create({
            titulo,
            subtitulo,
            descripcion,
        })
        .then((noticia) =>{
            NoticiaImage.create({
                image: req.file ? req.file.filename : 'default-image.png',
                noticiaId: noticia.id
            })
                .then(()=> {
                    res.redirect('/')
                    console.log('Se creo la noticia con exito')
                })
          
        }) 
        .catch(error => console.log(error))
    }else{
         Noticias.findAll()
        .then((noticia) => {
            res.render('noticiasCreate', {
                noticia,
                session:req.session,
                errors: errors.mapped(),
                old: req.body
            })
        })
    }
}




}

module.exports = controller