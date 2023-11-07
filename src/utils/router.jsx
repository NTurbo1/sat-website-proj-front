import AboutPage from '../components/Home/navBarComponents/AboutPage'
import ContactsPage from '../components/Home/navBarComponents/ContactsPage'
import ServicesPage from '../components/Home/navBarComponents/ServicesPage'
import LoginPage from '../components/Home/navBarComponents/LoginPage'
import RegisterPage from '../components/Home/navBarComponents/RegisterPage'
import { Navigate, Route, Routes } from 'react-router-dom'
import IntroToSAT from '../components/selfStudy/IntroToSAT'
import SatMathSelfStudy from '../components/selfStudy/satMath/SatMathSelfStudy'
import SatReadingSelfStudy from '../components/selfStudy/satReading/SatReadingSelfStudy'
import SatWritingSelfStudy from '../components/selfStudy/satWriting/SatWritingSelfStudy'
import HomeMainBody from '../components/Home/HomeMain/HomeMainBody'
import PageNotFound from '../components/errorComponents/PageNotFound'
import StudentAccountPage from '../components/Student/studentAccount/StudentAccountPage'
import StudentAccountDashboard from '../components/Student/studentAccount/dashboard/StudentAccountDashboard'
import MockTests from '../components/Student/studentAccount/MockTests'
import StudentCourses from '../components/Student/studentAccount/StudentCourses'
import StudentProfile from '../components/Student/studentAccount/StudentProfile'
import Home from '../components/Home/Home'
import AdminAccountPage from '../components/Admin/adminAccount/AdminAccountPage'
import AuthenticatedRoute from '../components/auth/authentication/AuthenticatedRoute'
import AdminAccountDashboard from '../components/Admin/adminAccount/AdminAccountDashboard'
import AllCourses from '../components/Admin/adminAccount/courses/AllCourses';
import AdminProfile from '../components/Admin/adminAccount/adminProfile/AdminProfile';
import AllStudents from '../components/Admin/adminAccount/students/AllStudents'
import AdminAuthorized from '../components/auth/authorization/AdminAuthorized'
import StudentAuthorized from '../components/auth/authorization/StudentAuthorized'
import pageUrls from './pageUrls'
import AvailableCourses from '../components/Home/navBarComponents/courses/AvailableCourses'
import NewCourseForm from '../components/Admin/adminAccount/courses/NewCourseForm'


const routes = <Routes>
  <Route path='/sat-website-proj-front'>

    <Route path='/sat-website-proj-front' 
      element={<Navigate to={"/sat-website-proj-front/home"} />}
    />

    <Route path='home' element={<Home />}>
      <Route index element={<HomeMainBody />} />
      <Route path='about' element={<AboutPage />} />
      <Route path='contacts' element={<ContactsPage />} />
      <Route path='services' element={<ServicesPage />} />
      <Route path='login' element={<LoginPage />} />
      <Route path='register' element={<RegisterPage />} />
      <Route path='courses' element={<AvailableCourses />} />
      <Route path='self-study'>
        <Route path='introduction-to-sat' element={<IntroToSAT />} />
        <Route path='sat-math' element={<SatMathSelfStudy />} />
        <Route path='sat-reading' element={<SatReadingSelfStudy />} />
        <Route path='sat-writing' element={<SatWritingSelfStudy />} />
      </Route>
    </Route>

    <Route path='student/account' 
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

    <Route path='admin/account' 
          element={
            <AuthenticatedRoute>
              <AdminAuthorized>
                <AdminAccountPage />
              </AdminAuthorized>
            </AuthenticatedRoute>
          }>
      <Route path={pageUrls.adminAccount} element={<Navigate to={pageUrls.adminDashboard}/>}/>
      <Route path='dashboard' element={<AdminAccountDashboard />} />
      <Route exact path='courses'>
        <Route index element={<AllCourses />}/>
        <Route exact path='new-course' element={<NewCourseForm />}/>
      </Route>
      <Route path='profile' element={<AdminProfile />} />
      <Route path='students' element={<AllStudents />} /> 
    </Route>
  </Route>

  <Route path='*' element={<PageNotFound />} />
</Routes>

export {
  routes
}