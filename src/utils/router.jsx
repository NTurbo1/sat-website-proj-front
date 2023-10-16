import AboutPage from '../components/Home/navBarComponents/AboutPage'
import ContactsPage from '../components/Home/navBarComponents/ContactsPage'
import ServicesPage from '../components/Home/navBarComponents/ServicesPage'
import LoginPage from '../components/Home/navBarComponents/LoginPage'
import RegisterPage from '../components/Home/navBarComponents/RegisterPage'
import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import IntroToSAT from '../components/courses/IntroToSAT'
import SatMath from '../components/courses/SatMath'
import SatReading from '../components/courses/SatReading'
import SatWriting from '../components/courses/SatWriting'
import HomeMainBody from '../components/Home/HomeMain/HomeMainBody'
import PageNotFound from '../components/errorComponents/PageNotFound'
import StudentAccountPage from '../components/Student/studentAccount/StudentAccountPage'
import StudentAccountContent from '../components/Student/studentAccount/StudentAccountContent'
import MockTests from '../components/Student/studentAccount/MockTests'
import StudentCourses from '../components/Student/studentAccount/StudentCourses'
import StudentProfile from '../components/Student/studentAccount/StudentProfile'
import Home from '../components/Home/Home'
import AdminAccountPage from '../components/Admin/adminAccount/AdminAccountPage'


const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path='/' element={<Navigate to={"/home"} />}></Route>,
    <Route path='home' element={<Home />}>
      <Route index element={<HomeMainBody />}></Route>
      <Route path='about' element={<AboutPage />}></Route>
      <Route path='contacts' element={<ContactsPage />}></Route>
      <Route path='services' element={<ServicesPage />}></Route>
      <Route path='login' element={<LoginPage />}></Route>
      <Route path='register' element={<RegisterPage />}></Route>
      <Route path='introduction-to-sat' element={<IntroToSAT />}></Route>
      <Route path='courses'>
        <Route path='sat-math' element={<SatMath />}></Route>
        <Route path='sat-reading' element={<SatReading />}></Route>
        <Route path='sat-writing' element={<SatWriting />}></Route>
      </Route>
    </Route>,

    <Route path='/student/account' element={<StudentAccountPage />}>
      <Route index element={<StudentAccountContent />}></Route>
      <Route path='mock-tests' element={<MockTests />}></Route>
      <Route path='courses' element={<StudentCourses />}></Route>
      <Route path='profile' element={<StudentProfile />}></Route>
    </Route>,

    <Route path='/admin/account' element={<AdminAccountPage />}></Route>,

    <Route path='*' element={<PageNotFound />}></Route>
  ]
  ), { basename: "/sat-website-proj-front"}
)

export {
  router
}