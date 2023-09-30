const apiDomain = "http://localhost:8080"
const apiRoot = apiDomain + "/api/v1"
const apiAuthRoot = apiRoot + "/auth"

const apiEndpoints = {
    "authenticate": apiAuthRoot + "/authenticate",
    "register": apiAuthRoot + "/register"
}

export {
    apiEndpoints
}