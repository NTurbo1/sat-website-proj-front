export const studentEnrolledCoursePagePath = (courseId) => {
  return "/sat-website-proj-front/student/account/course/" + courseId;
}

export const studentCourseSectionPagePath = (courseId, courseSectionId) => {
  return studentEnrolledCoursePagePath(courseId) + "/course-section/" + 
    courseSectionId;
}

export const studentTopicPagePath = (courseId, courseSectionId, topicId) => {
  return studentCourseSectionPagePath(courseId, courseSectionId) + "/topic/" +
    topicId;
}