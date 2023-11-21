import { coursePageWithCourseIdAdminPath, updateCourseFormWithCourseIdPath,
  courseSectionByCourseIdAndCourseSectionIdAdminPath, 
  newCourseSectionFormPath, updateCourseSectionFormPath, topicAdminPath, allTopicsByCourseIdAndCourseSectionIdAdminPath, newTopicFormPath, updateTopicFormPath } 
  from "./dynamicAdminPageUrls"

const pageUrls = {
  home: "/sat-website-proj-front/home",

  about: "/sat-website-proj-front/home/about",
  contacts: "/sat-website-proj-front/home/contacts",
  services: "/sat-website-proj-front/home/services",
  login: "/sat-website-proj-front/home/login",
  register: "/sat-website-proj-front/home/register",
  availableCourses: "/sat-website-proj-front/home/courses",
  selfStudy: "/sat-website-proj-front/home/self-study",
  introductionToSat: "/sat-website-proj-front/home/self-study/introduction-to-sat",
  selfStudySatMath: "/sat-website-proj-front/home/self-study/sat-math",
  selfStudySatWriting: "/sat-website-proj-front/home/self-study/sat-writing",
  selfStudySatReading: "/sat-website-proj-front/home/self-study/sat-reading",

  studentAccount: "/sat-website-proj-front/student/account",
  studentDashboard: "/sat-website-proj-front/student/account/dashboard",
  studentMockTests: "/sat-website-proj-front/student/account/mock-tests",
  studentEnrolledCourses: "/sat-website-proj-front/student/account/courses",
  studentProfile: "/sat-website-proj-front/student/account/profile",

  adminAccount: "/sat-website-proj-front/admin/account",
  adminDashboard: "/sat-website-proj-front/admin/account/dashboard",
  adminProfile: "/sat-website-proj-front/admin/account/profile",
  allStudents: "/sat-website-proj-front/admin/account/students",
  courses: "/sat-website-proj-front/admin/account/courses",
  coursePageAdmin: coursePageWithCourseIdAdminPath,
  newCourseForm: "/sat-website-proj-front/admin/account/courses/new-course",
  updateCourseForm: updateCourseFormWithCourseIdPath,
  courseSectionPageAdmin: courseSectionByCourseIdAndCourseSectionIdAdminPath,
  newCourseSectionForm: newCourseSectionFormPath,
  updateCourseSectionForm: updateCourseSectionFormPath,
  topicPageAdmin: topicAdminPath,
  newTopicForm: newTopicFormPath,
  updateTopicForm: updateTopicFormPath,
  topicsByCourseIdAndCourseSectionIdAdmin: allTopicsByCourseIdAndCourseSectionIdAdminPath
}

export default pageUrls
