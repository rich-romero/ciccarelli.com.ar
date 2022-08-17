let express = require('express') 
let router = express.Router() 
let controller = require('../controllers/homeController.js') 

router.get('/', controller.home) 
/* Links de nav - Empresa */
router.get('/empresa', controller.empresa)

router.get('/distribuidores', controller.distribuidores) // Falta completar

/* Links de nav - Competicion */
router.get('/competicion', controller.competicion) 

/* Links de nav - Productos */
router.get('/newsletters', controller.productos)

router.get('/productos/:id/', controller.productosCuerpo)


/* Links de nav - Catalogo */

/* Links de nav - Servicio */
router.get('/servicio', controller.servicio)
//falta newsletter 

/* Links de nav - Juntas */
router.get('/productos', controller.juntas)

router.get('/newsletters', controller.productos)

router.get('/noticias', controller.noticias) 

router.get('/noticias/:id/', controller.noticiaCuerpo) 


/* Links de nav - Contacto */

/* Search noticias */
router.get('/search', controller.search)

/* Search productos */
router.get('/searchProducts', controller.searchProducts)





module.exports = router