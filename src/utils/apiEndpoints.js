const apiDomain = "http://localhost:8080";
const apiRoot = apiDomain + "/api/v1";
const apiAuthRoot = apiRoot + "/auth";
const allStudents = apiRoot + "/students";
const paymentRoot = apiRoot + "/payment"
const allCourses = apiRoot + "/courses";

const apiEndpoints = {
    "authenticate": apiAuthRoot + "/authenticate",
    "register": apiAuthRoot + "/register",
    "logout": apiAuthRoot + "/logout",
    "allStudents": allStudents,
    "paymentCharge": paymentRoot + "/charge",
    "allCourses": allCourses
};

export {
    apiEndpoints
};