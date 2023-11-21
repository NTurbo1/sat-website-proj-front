import { apiAuthRoot, allStudents, paymentRoot, allCourses } from "./apiEndpointConstants";

import { 
  allStudentEnrolledCoursesURL, courseByCourseIdUrl,
  courseSectionsByCourseIdURL, courseSectionByCourseIdAndCourseSectionIdURL,
  topicsByCourseIdAndCourseSectionIdURL, 
  topicByCourseIdCourseSectionIdAndTopicIdURL
} 
from "./dynamicApiEndpoints";

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
    "courseSectionByCourseIdAndCourseSectionId": courseSectionByCourseIdAndCourseSectionIdURL,
    "topicsByCourseIdAndCourseSectionId": topicsByCourseIdAndCourseSectionIdURL,
    "topicByCourseIdCourseSectionIdAndTopicId": topicByCourseIdCourseSectionIdAndTopicIdURL
};

export {
    apiEndpoints
};