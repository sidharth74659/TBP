const STATUS_CODES = {
    CREATED: 201,
    OK: 200,    // or SUCCESS
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504
}

module.exports = {
    STATUS_CODES
}