const apiDomain = "https://6966-185-177-124-224.ngrok-free.app"
const apiRoot = apiDomain + "/api/v1"
const apiAuthRoot = apiRoot + "/auth"

const apiEndpoints = {
    "authenticate": apiAuthRoot + "/authenticate",
    "register": apiAuthRoot + "/register"
}

export {
    apiEndpoints
}