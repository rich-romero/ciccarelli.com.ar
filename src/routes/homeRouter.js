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

/* Links de nav - Catalogo */

/* Links de nav - Servicio */
router.get('/servicio', controller.servicio)
//falta newsletter 

router.get('/noticias', controller.noticias) 

router.get('/noticias/:id/', controller.noticiaCuerpo) 


/* Links de nav - Contacto */






module.exports = router