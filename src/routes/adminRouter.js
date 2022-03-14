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

/* Crear noticia */
router.get('/crear/noticia'/* , adminCheck  */ ,controller.noticiasCreate) 
router.post('/crear/noticia',  uploadImages.array('image') , noticiasValidator , controller.noticiasPost)

module.exports = router