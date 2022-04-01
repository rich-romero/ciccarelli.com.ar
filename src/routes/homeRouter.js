let express = require('express') 
let router = express.Router() 
let controller = require('../controllers/homeController.js') 

router.get('/', controller.home) 
/* Links de nav - Empresa */
router.get('/sobre-nosotros', controller.sobreNosotros) 
router.get('/calidad', controller.calidad) 
router.get('/exportacion', controller.exportacion) 
router.get('/distribuidores', controller.distribuidores) // Falta completar

/* Links de nav - Competicion */
router.get('/competicion', controller.competicion) 

/* Links de nav - Productos */
router.get('/productos', controller.productos)

/* Links de nav - Catalogo */

/* Links de nav - Servicio */
router.get('/servicio', controller.servicio)
//falta newsletter 

/* Links de nav - Juntas */
router.get('/juntas', controller.juntas)

router.get('/noticias', controller.noticias) 

router.get('/noticias/:id/', controller.noticiaCuerpo) 


/* Links de nav - Contacto */






module.exports = router