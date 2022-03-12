let express = require('express') 
let router = express.Router() 
let controller = require('../controllers/adminController.js')
let adminValidator = require('../validations/adminValidator');
let adminCheck = require('../middlewares/adminCheck')


router.get('/', controller.admin) 

/* Recibe datos del registro */
router.post('/', adminValidator, controller.processAdminLogin)

router.get('/dashboard', adminCheck ,controller.dashboradAdmin) 


module.exports = router