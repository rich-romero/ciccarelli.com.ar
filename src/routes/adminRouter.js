let express = require('express') 
let router = express.Router() 
let controller = require('../controllers/adminController.js')
let adminValidator = require('../validations/adminValidator');
let adminCheck = require('../middlewares/adminCheck');
const noticiasValidator = require('../validations/noticiasValidator.js');
let uploadImages = require('../middlewares/uploadImages')
let uploadImagesProducts = require('../middlewares/uploadImagesProducts')
let productsValidator = require('../validations/productsValidator')


/* Login de admin */
router.get('/', controller.admin) 
router.post('/', adminValidator, controller.processAdminLogin)

/* Dashboard admin */
router.get('/dashboard'/* , adminCheck */ ,controller.dashboradAdmin) 
router.get('/dashboard/noticias'/* , adminCheck */ ,controller.dashboradAdminNoticias) 
router.get('/dashboard/productos'/* adminCheck */,controller.dashboardAdminProductos)

/* ---- Crud Noticias ---- */

/* Crear noticia */
router.get('/crear/noticia'/* , adminCheck  */ ,controller.noticiasCreate) 
router.post('/crear/noticia', /* , adminCheck */ uploadImages.array('image') , noticiasValidator , controller.noticiasPost)

/* Editar noticia */
router.get('/editar/noticia/:id',/* , adminCheck */  controller.editNoticia)
router.put('/editar/noticia/:id', /* , adminCheck */ uploadImages.array('image'), noticiasValidator , controller.updateNoticia)


/* Eliminar noticia */
router.delete('/delete/noticia/:id', /* , adminCheck */ controller.eliminarNoticia) 

/* --- Crud Productos --- */

//Create
router.get('/crear/producto'/* , adminCheck  */ ,controller.productoCreate) 
router.post('/crear/producto', /* , adminCheck */ uploadImagesProducts.single('image') , productsValidator , controller.productoPost)

//Editar producto
router.get('/editar/producto/:id',/* , adminCheck */  controller.editProducto)
router.put('/editar/producto/:id', /* , adminCheck */ uploadImagesProducts.single('image'), productsValidator , controller.updateProducto)


//Eliminar producto
router.delete('/delete/producto/:id', /* , adminCheck */ controller.eliminarProducto) 





module.exports = router