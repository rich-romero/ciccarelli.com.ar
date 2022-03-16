let express = require('express') 
let router = express.Router() 
let controller = require('../controllers/adminController.js')
let adminValidator = require('../validations/adminValidator');
let adminCheck = require('../middlewares/adminCheck');
const noticiasValidator = require('../validations/noticiasValidator.js');
let uploadImages = require('../middlewares/uploadImages')


router.get('/', controller.admin) 

/* Recibe datos del registro */
router.post('/', adminValidator, controller.processAdminLogin)

router.get('/dashboard'/* , adminCheck */ ,controller.dashboradAdmin) 

/* Todas las noticias dashboard */
router.get('/dashboard/noticias'/* , adminCheck */ ,controller.dashboradAdminNoticias) 


/* Crear noticia */
router.get('/crear/noticia'/* , adminCheck  */ ,controller.noticiasCreate) 
router.post('/crear/noticia', /* , adminCheck */ uploadImages.array('image') , noticiasValidator , controller.noticiasPost)

/* Editar noticia */
router.get('/editar/noticia/:id',/* , adminCheck */  controller.editNoticia)
router.put('/editar/noticia/:id', /* , adminCheck */ uploadImages.array('image'), noticiasValidator , controller.updateNoticia)



/* Eliminar noticia */
 router.delete('/delete/noticia/:id', /* , adminCheck */ controller.eliminarNoticia) 

module.exports = router