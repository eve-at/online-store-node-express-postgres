const Router = require('express')
const router = new Router
const TypeController = require('../controllers/typeController')
const checkRole = require('../middlewares/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), TypeController.create)
router.get('/', TypeController.all)

module.exports = router