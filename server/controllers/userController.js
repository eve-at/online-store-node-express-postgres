const ApiError = require('../error/apiError.js')

class UserController {
    async registration(req, res) {
        
    }

    async login(req, res) {

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