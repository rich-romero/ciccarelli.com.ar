let express = require('express') //Llamamos express y enrutador
let router = express.Router() //Ejecutamos el metodo router de express
let controller = require('../controllers/homeController.js') // Requerimos el controlador para utilizarlo con router.get


// GET - Listado de productos
router.get('/', controller.home) // buscamos en el objeto controller el HOME
router.get('/sobre-nosotros', controller.sobreNosotros) 


module.exports = router