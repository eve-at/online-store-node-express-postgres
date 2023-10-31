class ApiError extends Error {
    constructor(status, message) {
        super()

        this.status = status
        this.message = message
    }

    static badRequest(message, code = 404) {
        return new ApiError(code, message)
    }

    static internal(message) {
        return new ApiError(500, message)
    }

    static forbidden(message) {
        return new ApiError(403, message)
    }
}

module.exports = ApiError