const apiDomain = "http://localhost:8080";
const apiRoot = apiDomain + "/api/v1";
const apiAuthRoot = apiRoot + "/auth";
const allStudents = apiRoot + "/students";
const paymentRoot = apiRoot + "/payment"
const allCourses = apiRoot + "/courses";

const allStudentEnrolledCoursesURL = (studentId) => {
  return allStudents + "/" + studentId + "/courses";
}

const courseByCourseIdUrl = (courseId) => {
  return allCourses + "/" + courseId;
}

const courseSectionsByCourseIdURL = (courseId) => {
  return courseByCourseIdUrl(courseId) + "/course-sections";
}

const courseSectionByCourseIdAndCourseSectionIdURL = (courseId, courseSectionId) => {
  return courseSectionsByCourseIdURL(courseId) + "/" + courseSectionId;
}

const apiEndpoints = {
    "authenticate": apiAuthRoot + "/authenticate",
    "register": apiAuthRoot + "/register",
    "logout": apiAuthRoot + "/logout",
    "allStudents": allStudents,
    "paymentCharge": paymentRoot + "/charge",
    "allCourses": allCourses,
    "allStudentEnrolledCourses": allStudentEnrolledCoursesURL,
    "courseByCourseId": courseByCourseIdUrl,
    "courseSectionsByCourseId": courseSectionsByCourseIdURL,
    "courseSectionByCourseIdAndCourseSectionId": courseSectionByCourseIdAndCourseSectionIdURL
};

export {
    apiEndpoints
};