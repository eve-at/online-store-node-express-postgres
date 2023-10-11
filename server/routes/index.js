const Router = require('express')
const router = new Router
const brandRouter = require('./brandRouter.js')
const deviceRouter = require('./deviceRouter.js')
const typeRouter = require('./typeRouter.js')
const userRouter = require('./userRouter.js')

router.use('/brand', brandRouter)
router.use('/device', deviceRouter)
router.use('/type', typeRouter)
router.use('/user', userRouter)

module.exports = router