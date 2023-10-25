const Router = require('express')
const router = new Router
const TypeController = require('../controllers/typeController')

router.post('/', TypeController.create)
router.get('/', TypeController.all)

module.exports = router