class DeviceController {
    async create(req, res) {
        
    }

    async all(req, res) {
        
    }

    async get(req, res) {
        const query = req.query
        res.json(query)
    }
}

module.exports = new DeviceController()