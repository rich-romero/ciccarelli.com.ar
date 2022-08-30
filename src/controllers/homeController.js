const { Op, DataTypes } = require('sequelize');
const { Sequelize } = require('../database/models');
const db = require('../database/models');
const Noticias = db.Noticia;
const NoticiaImage = db.NoticiaImage
const Producto = db.Producto

let controller = {
    home: (req, res) => {
        Producto.findAll({
                order: [
                    ['updatedAt', 'DESC']
                ],
                limit: 3
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

    searchNoticias: (req, res) => {
        Noticias.findAll({
                order: [
                    ['fecha', 'DESC'],
                ],
                where: {
                    [Op.or]: [{
                            titulo: {
                                [Op.substring]: req.query.keywords
                            },
                        },
                        {
                            descripcion: {
                                [Op.substring]: req.query.keywords
                            },
                        },
                        {
                            fecha: {
                                [Op.substring]: req.query.keywords
                            }
                        }
                    ]
                }
            })
            .then((noticia) => {
                res.render('searchNoticias', {
                    noticia,
                    search: req.query.keywords,
                    session: req.session
                })
            })
        console.log(req.query.keywords)
    },

    searchProductos: (req, res) => {

        Producto.findAll({
                where: {
                    modelo: {
                        [Op.substring]: req.query.keywords
                    }
                },
                order: [
                    ['marca', 'DESC'],
                ]
            })
            .then((producto) => {
                res.render('searchProductos', {
                    producto,
                    search: req.query.keywords,
                    session: req.session
                })
            }),
            console.log(req.query.keywords.split(" "));
        console.log(JSON.stringify(Producto));
        /* req.query.keywords.split(" ").forEach(palabra => {

            } */
        /* queryInterface.addColumn('Producto', 'FULLTEXT', { type: DataTypes.STRING }); */

    }


}


module.exports = controller


/* where: {
        [Op.or]: [{
                marca: {
                    [Op.substring]: req.query.keywords
                },
            },
            {
                modelo: {
                    [Op.substring]: req.query.keywords
                },
            },
            {
                motor: {
                    [Op.substring]: req.query.keywords
                }
            },
            {
                cilindradas: {
                    [Op.substring]: req.query.keywords
                }
            }
        ]
    } */


/* 

//buscador anterior solo por nombre
   
    searchProducts: (req, res) => {
            Producto.findAll({
                    order: [
                        ['createdAt', 'DESC'],
                    ],
                    where: {
                        nombre {
                            [Op.substring]: req.query.keywords
                        }
                    }
                })
                .then((producto) => {
                    res.render('searchProductos', {
                        producto,
                        search: req.query.keywords,
                        session: req.session
                    })
                })
        } */

/* where: Sequelize.literal('ALTER TABLE `Productos` ADD `FULLTEXT` VARCHAR(255)'), */
/*  where: Sequelize.literal(
     'MATCH (nombre) ' +
     'AGAINST ("' +
     req.query.keywords + '")'
 ),
 order: [
         ['count', 'DESC']
     ] */
/* where: {
    nombre: {
        [Op.like]: req.query.keywords
    }
} */

/* buscarproductos: (req, res) => {
        Producto.classMethods
            .search(req.query.keywords)
            .success(function(posts) {
                // do something with the posts
                res.render('buscarproductos', {
                    producto,
                    search: req.query.keywords,
                    session: req.session
                })
            }).error(function(err) {
                // do something with the error
                console.log("Falló buscarproductos en home controller")
            });
        console.log(req.query.keywords)

    } */