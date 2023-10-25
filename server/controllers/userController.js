const ApiError = require('../error/apiError.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')

const generateJWT = (id, email, role) => {
    return jwt.sign({id, email, role}, process.env.SECRET_JWT_KEY, {expiresIn: '24h'})
}

class UserController {
    async registration(req, res, next) {
        const {email, password, role} = req.body

        if (!email || !password) {
            return next(ApiError.badRequest('Wrong / Missing email or password'))
        }

        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('This email is already registered'))
        }

        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, password: hashPassword})
        const basket = await Basket.create({userId: user.id})
        const token = generateJWT(user.id, email, role)

        return res.json({token})
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.internal('User not found or password is wrong'))
        }

        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('User not found or password is wrong'))
        }

        const token = generateJWT(user.id, user.email, user.role)

        return res.json({token})
    }

    async check(req, res, next) {
        const {id} = req.query

        if (!id) {
            return next(ApiError.badRequest('User ID is missing'))
        }

        res.json(`ID: ${id}`);
    }
}

module.exports = new UserController()