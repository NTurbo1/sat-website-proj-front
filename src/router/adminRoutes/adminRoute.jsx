import { Route } from "react-router-dom";
import pageUrls from "../../utils/pageUrls/pageUrls";
import { Navigate } from "react-router-dom";

import AuthenticatedRoute from "../../components/auth/authentication/AuthenticatedRoute";
import AdminAuthorized from "../../components/auth/authorization/AdminAuthorized";
import AdminAccountPage from "../../components/Admin/adminAccount/AdminAccountPage";
import AdminAccountDashboard from "../../components/Admin/adminAccount/AdminAccountDashboard";
import AdminProfile from "../../components/Admin/adminAccount/adminProfile/AdminProfile";
import AllStudents from "../../components/Admin/adminAccount/students/AllStudents";
import AllCoursesPage from "../../components/Admin/adminAccount/courses/AllCoursesPage";
import AllCourses from "../../components/Admin/adminAccount/courses/AllCourses";
import NewCourseForm from "../../components/Admin/adminAccount/courses/NewCourseForm";
import UpdateCourseForm from "../../components/Admin/adminAccount/courses/coursePage/UpdateCourseForm";
import CoursePage from "../../components/Admin/adminAccount/courses/coursePage/CoursePage";
import adminCourseSectionRoute from "./adminCourseSectionRoutes";


const adminRoute = 
<>
  <Route path={pageUrls.adminAccount} 
    element={
      <AuthenticatedRoute>
        <AdminAuthorized>
          <AdminAccountPage />
        </AdminAuthorized>
      </AuthenticatedRoute>
  }>
    <Route path={pageUrls.adminAccount} element={<Navigate to={pageUrls.adminDashboard}/>}/>
    <Route path='dashboard' element={<AdminAccountDashboard />} />
    <Route path='profile' element={<AdminProfile />} />
    <Route path='students' element={<AllStudents />} /> 
  </Route>

  <Route exact path={pageUrls.courses} element={
    <AuthenticatedRoute>
      <AdminAuthorized>
        <AllCoursesPage />
      </AdminAuthorized>
    </AuthenticatedRoute>
  }>
    <Route index element={<AllCourses />}/>
    <Route path='new-course' element={<NewCourseForm />}/>
    <Route path='update-course/:courseId' element={<UpdateCourseForm />} />
    <Route path='course/:courseId' element={<CoursePage />} />
    
    {adminCourseSectionRoute}
  </Route>
</>

export default adminRoute;