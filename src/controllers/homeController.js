const db = require('../database/models');
const Noticias = db.Noticia;
const NoticiaImage = db.NoticiaImage

let controller = {
    home: (req,res) => {
         res.render('home',{
            session: req.session
         })
},

sobreNosotros: (req, res) => {
    res.render('sobreNosotros',{
        session: req.session
     })
},

calidad: (req, res) => {
    res.render('calidad',{
        session: req.session
     })
},
exportacion: (req, res) => {
    res.render('exportacion',{
            session: req.session
         })
},
//Vista distribuidores no funciona en la pagina oficial lo cual no sabia que poner en esta vista, 
///la deje armada pero falta rellenar con lo que va.
distribuidores: (req, res) => {
    res.render('distribuidores',{
            session: req.session
         })
},

competicion: (req, res) => {
    res.render('competicion',{
            session: req.session
         })
},

servicio: (req, res) => {
    res.render('servicio',{
            session: req.session
         })
},

noticias: (req, res) => {
    Noticias.findAll({
        include: [{association: 'noticiaImages'}]
    })
    .then((noticia)=> {
        res.render('noticias', {
            noticia,
            session:req.session
        })
    })
},

noticiaCuerpo: (req, res) => {
    
    res.render('noticiaCuerpo', {
        session:req.session
    })
}


}

module.exports = controller

