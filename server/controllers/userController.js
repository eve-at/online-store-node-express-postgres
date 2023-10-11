class UserController {
    async registration(req, res) {
        
    }

    async login(req, res) {

    }

    async check(req, res) {
        res.json('User check')
    }
}

module.exports = new UserController()