const db = require('../database/models');
const Noticias = db.Noticia;
const NoticiaImage = db.NoticiaImage
const Producto = db.Producto

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

productos: (req, res) => {
    Producto.findAll()
    .then((producto) => {
        res.render('productos', {
            producto,
            session: req.session
        })
    })
},

servicio: (req, res) => {
    res.render('servicio',{
            session: req.session
         })
},

noticias: (req, res) => {
    Noticias.findAll(
      {  order: [
            ['fecha', 'DESC'],
        ]}
        
        /*  FALTA HACER FUNCIONAR   include: [{association: 'noticiaImages'}]*/   
        
)
    .then((noticia)=> {
        res.render('noticias', {
            noticia,
            session:req.session
        })
    })
},


/*  Prueba 2 no funciono, mismo error.
noticias: (req, res) => {
    let noticia = Noticias.findAll()
     let noticiaimage =  NoticiaImage.findAll()
     Promise.all([noticia, noticiaimage])
     .then((noticia, noticiaimage)=> {
         res.render('noticias', {
             noticia,
             noticiaimage,
             session:req.session
         })
     })
 },
  */

noticiaCuerpo: (req, res) => {

    Noticias.findOne({
        where: {
            id: req.params.id
        },
      /* no funciona   
      include: [{
            association: 'noticiaImages'
        }] */
    })
    .then((noticia) => {
        res.render('noticiaCuerpo', {
            noticia,
            session: req.session
        })
    })
    .catch(error => console.log(error))


}


}

module.exports = controller

