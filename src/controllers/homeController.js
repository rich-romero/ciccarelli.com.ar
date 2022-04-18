const {Op} = require('sequelize')
const db = require('../database/models');
const Noticias = db.Noticia;
const NoticiaImage = db.NoticiaImage
const Producto = db.Producto

let controller = {
    home: (req, res) => {
        Producto.findAll({
            order: [
                ['updatedAt','DESC']
            ],
            limit:3 
        })
        .then((producto) => {
            console.log(producto)
            res.render('home', {
                producto,
                session: req.session
            })
        })
    },

    empresa: (req, res) => {
        res.render('sobreNosotros', {
            session: req.session
        })
    },


    //Vista distribuidores no funciona en la pagina oficial lo cual no sabia que poner en esta vista, 
    ///la deje armada pero falta rellenar con lo que va.
    distribuidores: (req, res) => {
        res.render('distribuidores', {
            session: req.session
        })
    },

    competicion: (req, res) => {
        res.render('competicion', {
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

    productosCuerpo: (req, res) => {
         Producto.findOne({
                 where: {
                     id: req.params.id
                 },

             })
             .then((producto) => {
                 res.render('productoCuerpo', {
                     producto,
                     session: req.session
                 })
             })
             .catch(error => console.log(error))
    },

    servicio: (req, res) => {
        res.render('servicio', {
            session: req.session
        })
    },

    juntas: (req, res) => {
        res.render('juntas', {
            session: req.session
        })
    },

    noticias: (req, res) => {
        Noticias.findAll({
                    order: [
                        ['fecha', 'DESC'],
                    ]
                }

                /*  FALTA HACER FUNCIONAR   include: [{association: 'noticiaImages'}]*/

            )
            .then((noticia) => {
                res.render('noticias', {
                    noticia,
                    session: req.session
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


    },

    search: (req, res) => {
        Noticias.findAll({
            order: [
                ['fecha', 'DESC'],
            ],
            where : {
                titulo : {
                 [Op.substring]: req.query.keywords
                }
            }
        })
        .then((noticia) => {
            res.render('searchNoticias', {
                noticia,
                search: req.query.keywords,
                session: req.session
            })
        })
    },

    searchProducts: (req, res) =>{
          Producto.findAll({
                  order: [
                      ['createdAt', 'DESC'],
                  ],
                  where: {
                      nombre: {
                          [Op.substring]: req.query.keywordss
                      }
                  }
              })
              .then((producto) => {
                  res.render('searchProductos', {
                      producto,
                      search: req.query.keywordss,
                      session: req.session
                  })
              })
    }
    
         


}

module.exports = controller