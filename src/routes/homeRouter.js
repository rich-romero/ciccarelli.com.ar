let express = require('express') //Llamamos express y enrutador
let router = express.Router() //Ejecutamos el metodo router de express
let controller = require('../controllers/homeController.js') // Requerimos el controlador para utilizarlo con router.get


// GET - Listado de productos
router.get('/', controller.home) // buscamos en el objeto controller el HOME
/* Links de nav - Empresa */
router.get('/sobre-nosotros', controller.sobreNosotros) 
router.get('/calidad', controller.calidad) 
router.get('/exportacion', controller.exportacion) 
router.get('/distribuidores', controller.distribuidores) 

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