import { allCourses, allStudents } from "./apiEndpointConstants";

export const allStudentEnrolledCoursesURL = (studentId) => {
  return allStudents + "/" + studentId + "/courses";
}

export const courseByCourseIdUrl = (courseId) => {
  return allCourses + "/" + courseId;
}

export const courseSectionsByCourseIdURL = (courseId) => {
  return courseByCourseIdUrl(courseId) + "/course-sections";
}

export const courseSectionByCourseIdAndCourseSectionIdURL = (courseId, courseSectionId) => {
  return courseSectionsByCourseIdURL(courseId) + "/" + courseSectionId;
}

export const topicsByCourseIdAndCourseSectionIdURL = (courseId, courseSectionId) => {
  return courseSectionByCourseIdAndCourseSectionIdURL(courseId, courseSectionId) +
    "/topics";
}

export const topicByCourseIdCourseSectionIdAndTopicIdURL = (
  courseId, courseSectionId, topicId) => {
    return topicsByCourseIdAndCourseSectionIdURL(courseId, courseSectionId) +
      "/" + topicId;
}