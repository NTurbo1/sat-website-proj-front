const returnCoursePageWithCourseId = (courseId) => {
  return pageUrls.courses + "/course/" + courseId;
}

const returnUpdateCourseFormWithCourseId = (courseId) => {
  return pageUrls.courses + "/update-course/" + courseId;
}

const returnCourseSectionByCourseIdAndCourseSectionId = (courseId, courseSectionId) => {
  return returnCoursePageWithCourseId(courseId) + "/course-section/" + courseSectionId;
}

const returnNewCourseSectionForm = (courseId) => {
  return returnCoursePageWithCourseId(courseId) + "/course-sections/new-course-section";
}

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
  coursePage: returnCoursePageWithCourseId,
  newCourseForm: "/sat-website-proj-front/admin/account/courses/new-course",
  updateCourseForm: returnUpdateCourseFormWithCourseId,
  courseSectionPage: returnCourseSectionByCourseIdAndCourseSectionId,
  newCourseSectionForm: returnNewCourseSectionForm
}

export default pageUrls
