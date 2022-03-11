let express = require('express') 
let router = express.Router() 
let controller = require('../controllers/adminController.js')
let adminValidator = require('../validations/adminValidator');



router.get('/', controller.admin) 

/* Recibe datos del registro */
router.post('/', adminValidator, controller.processAdminLogin)

module.exports = router