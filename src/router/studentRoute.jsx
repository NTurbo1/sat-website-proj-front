import { Navigate } from "react-router-dom";
import pageUrls from "../utils/pageUrls";
import { Route } from "react-router-dom";

import AuthenticatedRoute from "../components/auth/authentication/AuthenticatedRoute";
import StudentAuthorized from "../components/auth/authorization/StudentAuthorized";
import StudentAccountPage from "../components/Student/studentAccount/StudentAccountPage";
import StudentAccountDashboard from "../components/Student/studentAccount/dashboard/StudentAccountDashboard";
import MockTests from "../components/Student/studentAccount/MockTests";
import StudentCourses from "../components/Student/studentAccount/StudentCourses";
import StudentProfile from "../components/Student/studentAccount/StudentProfile";

const studentRoute = 
<Route path={pageUrls.studentAccount} 
  element={
    <AuthenticatedRoute>
      <StudentAuthorized>
        <StudentAccountPage />
      </StudentAuthorized>
    </AuthenticatedRoute>
  }>
  <Route path={pageUrls.studentAccount} element={<Navigate to={pageUrls.studentDashboard}/>}/>
  <Route path='dashboard' element={<StudentAccountDashboard />} />
  <Route path='mock-tests' element={<MockTests />} />
  <Route path='courses' element={<StudentCourses />} />
  <Route path='profile' element={<StudentProfile />} />
</Route>

export default studentRoute;