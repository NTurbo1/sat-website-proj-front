import pageUrls from "./pageUrls";

export const coursePageWithCourseIdAdminPath = (courseId) => {
  return pageUrls.courses + "/course/" + courseId;
}

export const updateCourseFormWithCourseIdPath = (courseId) => {
  return pageUrls.courses + "/update-course/" + courseId;
}

export const courseSectionByCourseIdAndCourseSectionIdAdminPath = (courseId, courseSectionId) => {
  return coursePageWithCourseIdAdminPath(courseId) + "/course-section/" + courseSectionId;
}

export const newCourseSectionFormPath = (courseId) => {
  return coursePageWithCourseIdAdminPath(courseId) + "/course-sections/new-course-section";
}

export const updateCourseSectionFormPath = (courseId, courseSectionId) => {
  return coursePageWithCourseIdAdminPath(courseId) + "/course-sections/" +
    courseSectionId + "/update-course-section";
}

export const topicAdminPath = (courseId, courseSectionId, topicId) => {
  return courseSectionByCourseIdAndCourseSectionIdAdminPath(
    courseId, courseSectionId) + "/topic/" + topicId;
}

export const allTopicsByCourseIdAndCourseSectionIdAdminPath = (courseId, 
  courseSectionId) => {
  return courseSectionByCourseIdAndCourseSectionIdAdminPath(
    courseId, courseSectionId) + "/topics";
}

export const newTopicFormPath = (courseId, courseSectionId) => {
  return allTopicsByCourseIdAndCourseSectionIdAdminPath(
    courseId, courseSectionId) + "/new-topic";
}

export const updateTopicFormPath = (courseId, courseSectionId, topicId) => {
  return courseSectionByCourseIdAndCourseSectionIdAdminPath(
    courseId, courseSectionId) + "/topic/" + topicId + "/update-topic";
}