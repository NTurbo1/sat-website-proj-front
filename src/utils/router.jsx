import AboutPage from '../components/Home/navBarComponents/AboutPage'
import ContactsPage from '../components/Home/navBarComponents/ContactsPage'
import ServicesPage from '../components/Home/navBarComponents/ServicesPage'
import LoginPage from '../components/Home/navBarComponents/LoginPage'
import RegisterPage from '../components/Home/navBarComponents/RegisterPage'
import { Navigate, Route, Routes } from 'react-router-dom'
import IntroToSAT from '../components/courses/IntroToSAT'
import SatMath from '../components/courses/SatMath'
import SatReading from '../components/courses/SatReading'
import SatWriting from '../components/courses/SatWriting'
import HomeMainBody from '../components/Home/HomeMain/HomeMainBody'
import PageNotFound from '../components/errorComponents/PageNotFound'
import StudentAccountPage from '../components/Student/studentAccount/StudentAccountPage'
import StudentAccountDashboard from '../components/Student/studentAccount/StudentAccountDashboard'
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


const routes = <Routes>
  <Route path='/' element={<Navigate to={"/home"} />} />

  <Route path='/home' element={<Home />}>
    <Route index element={<HomeMainBody />} />
    <Route path='about' element={<AboutPage />} />
    <Route path='contacts' element={<ContactsPage />} />
    <Route path='services' element={<ServicesPage />} />
    <Route path='login' element={<LoginPage />} />
    <Route path='register' element={<RegisterPage />} />
    <Route path='introduction-to-sat' element={<IntroToSAT />} />
    <Route path='courses'>
      <Route path='sat-math' element={<SatMath />} />
      <Route path='sat-reading' element={<SatReading />} />
      <Route path='sat-writing' element={<SatWriting />} />
    </Route>
  </Route>

  <Route path='/student/account' 
         element={
          <AuthenticatedRoute>
            <StudentAuthorized>
              <StudentAccountPage />
            </StudentAuthorized>
          </AuthenticatedRoute>
        }>
    <Route path='/student/account' element={<Navigate to={"/student/account/dashboard"}/>}/>
    <Route path='dashboard' element={<StudentAccountDashboard />} />
    <Route path='mock-tests' element={<MockTests />} />
    <Route path='courses' element={<StudentCourses />} />
    <Route path='profile' element={<StudentProfile />} />
  </Route>

  <Route path='/admin/account' 
        element={
          <AuthenticatedRoute>
            <AdminAuthorized>
              <AdminAccountPage />
            </AdminAuthorized>
          </AuthenticatedRoute>
        }>
    <Route path='/admin/account' element={<Navigate to={"/admin/account/dashboard"}/>}/>
    <Route path='dashboard' element={<AdminAccountDashboard />} />
    <Route path='courses' element={<AllCourses />} />
    <Route path='profile' element={<AdminProfile />} />
    <Route path='students' element={<AllStudents />} /> 
  </Route>

  <Route path='*' element={<PageNotFound />} />
</Routes>

export {
  routes
}