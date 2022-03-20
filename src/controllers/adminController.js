const {
    validationResult
} = require('express-validator')

const db = require('../database/models');
const Users = db.User;
const Noticias = db.Noticia;
const NoticiaImage = db.NoticiaImage
const Producto = db.Producto

let controller = {
    admin: (req, res) => {
        res.render('adminViews/admin', {
            session: req.session
        })
    },

    processAdminLogin: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
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

                    if (req.body.remember) {
                        const TIME_IN_MILISECONDS = 60000
                        res.cookie("userCicarelli", req.session.user, {
                            expires: new Date(Date.now() + TIME_IN_MILISECONDS),
                            httpOnly: true,
                            secure: true
                        })
                    }

                    res.locals.user = req.session.user;

                    res.redirect('/admin/dashboard')
                    console.log('Iniciaste seccion exitosamente!')
                })
                .catch(error => console.log(error))

        } else {
            res.render('adminViews/admin', {
                errors: errors.mapped(),
                session: req.session,
                old: req.body
            })
        }


    },

    dashboradAdmin: (req, res) => {
        res.render('adminViews/dashboradAdmin', {
            session: req.session
        })
    },

    dashboradAdminNoticias: (req,res) => {
        Noticias.findAll()
        .then((noticia) => {
            res.render('adminViews/dashboardAdminNoticias', {
                title: 'Ciccarelli - Admin',
                noticia,
                session: req.session
            })
        })
    },


    dashboardAdminProductos: (req, res) => {
        Producto.findAll()
        .then((productos) => {
            res.render('adminViews/dashboardAdminProductos', {
                productos,
                session: req.session
            })
        })
    },


    /* Crud noticias */

    noticiasCreate: (req, res) => {

        Noticias.findAll()
            .then((noticia) => {
                console.log(noticia)
                res.render('adminViews/noticiasCreate', {
                    noticia,
                    session: req.session
                })
            })
            .catch(error => console.log(error))

    },

    noticiasPost: (req, res) => {
        let errors = validationResult(req)
        console.log(errors)
        if (errors.isEmpty()) {
            const {
                titulo,
                subtitulo,
                descripcion
            } = req.body
            Noticias.create({
                    titulo,
                    subtitulo,
                    descripcion,
                    fecha: new Date()
                })
                .then((noticia) => {
                    NoticiaImage.create({
                            image: req.body.file ? req.file.filename : 'default-image.png',
                            noticiaId: noticia.id
                        })
                        .then(() => {
                            res.redirect('/admin/dashboard/noticias')
                            console.log('Se creo la noticia con exito')
                        })

                })
                .catch(error => console.log(error))
        } else {
            Noticias.findAll()
                .then((noticia) => {
                    res.render('adminViews/noticiasCreate', {
                        noticia,
                        session: req.session,
                        errors: errors.mapped(),
                        old: req.body
                    })
                })
        }
    },

    /* Editar noticia */

    editNoticia: (req, res) => {
        let noticiaId = Noticias.findByPk(req.params.id)
            .then((noticia) => {
                res.render('adminViews/noticiasEdit', {
                    noticia,
                    noticiaId,
                    session: req.session
                })
            })
    },

    updateNoticia: (req, res) => {
        Noticias.update({
            titulo : req.body.titulo,
            subtitulo : req.body.subtitulo,
            descripcion : req.body.descripcion,
        }, 
        { where: {id: req.params.id} })
        .then((noticia) => {
            res.redirect('/admin/dashboard/noticias')
            console.log(noticia)
        })
        .catch(error => console.log(error))
    },

    eliminarNoticia: (req, res) => {
        Noticias.destroy({
            where : { id: req.params.id}
        })

        res.redirect('/admin/dashboard/noticias')


    },


    /* CRUD PRODUCTOS */

    productoCreate: (req, res) => {
        Producto.findAll()
        .then((producto) => {
            res.render('adminViews/createProd', {
                producto,
                session : req.session
            })
        })
    },

    productoPost: (req, res) => {
        let errors = validationResult(req)
        if(errors.isEmpty()){
            Producto.create(
                {
                nombre: req.body.nombre,  
                marca: req.body.marca,
                modelo: req.body.modelo,
                motor: req.body.motor,
                cilindradas: req.body.cilindradas,
                piezas: req.body.piezas,
                image: req.file ? req.file.filename : 'default-image.png',
            })
            .then((product) => {
                console.log('Se creo el producto con exito')
                console.log(product)
                res.redirect('/admin/dashboard/productos')
            })
            .catch(error => console.log(error))
        }else{
            Producto.findAll()
            .then((product) => {
                res.render('adminViews/createProd', {
                    product,
                    errors: errors.mapped(),
                    old: req.body,
                    session: req.session
                })
            })
            .catch(error => console.log(error))
        }
        
    },

    editProducto: (req, res) => {
        let productoId = Producto.findByPk(req.params.id)
        .then((producto) => {
            res.render('adminViews/editProd', {
                producto,
                productoId,
                session: req.session
            })
        })
    },

    updateProducto: (req, res) => {
        Producto.update({
            nombre: req.body.nombre,  
            marca: req.body.marca,
            modelo: req.body.modelo,
            motor: req.body.motor,
            cilindradas: req.body.cilindradas,
            piezas: req.body.piezas,
        }, 
        { where: {id: req.params.id} })
        .then((producto) => {
            res.redirect('/admin/dashboard/productos')
            console.log(producto)
        })
        .catch(error => console.log(error))
    },


    eliminarProducto: (req, res) => {
        Producto.destroy({
            where : { id: req.params.id}
        })

        res.redirect('/admin/dashboard/productos')


    }
    

    




}

module.exports = controller