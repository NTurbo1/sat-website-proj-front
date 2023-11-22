import { Route } from "react-router-dom";
import AuthenticatedRoute from "../../components/auth/authentication/AuthenticatedRoute";
import StudentAuthorized from "../../components/auth/authorization/StudentAuthorized";
import StudentEnrolledCoursePage from "../../components/Student/studentAccount/courses/coursePage/StudentEnrolledCoursePage";
import StudentCourseSectionPage from "../../components/Student/studentAccount/courses/coursePage/courseSection/StudentCourseSectionPage";
import StudentTopicPage from "../../components/Student/studentAccount/courses/coursePage/courseSection/topic/StudentTopicPage";
import StudentCourseSectionDescription from "../../components/Student/studentAccount/courses/coursePage/courseSection/StudentCourseSectionDescription";
import StudentEnrolledCourseIntroPage from "../../components/Student/studentAccount/courses/coursePage/StudentEnrolledCourseIntroPage";

const studentEnrolledCourseRoutes =
<Route 
  path="/sat-website-proj-front/student/account/course/:courseId"
  element={
    <AuthenticatedRoute>
      <StudentAuthorized>
        <StudentEnrolledCoursePage />
      </StudentAuthorized>
    </AuthenticatedRoute>
  }
>
  <Route index element={<StudentEnrolledCourseIntroPage />} />
  <Route 
    path="course-section/:courseSectionId" 
    element={<StudentCourseSectionPage />}
  >
    <Route index element={<StudentCourseSectionDescription />} />
    <Route path="topic/:topicId" element={<StudentTopicPage />}/>

  </Route>
</Route>

export default studentEnrolledCourseRoutes;