import { Route } from "react-router-dom";
import Home from "../components/Home/Home";
import HomeMainBody from "../components/Home/HomeMain/HomeMainBody";
import AboutPage from "../components/Home/navBarComponents/AboutPage";
import ContactsPage from "../components/Home/navBarComponents/ContactsPage";
import ServicesPage from "../components/Home/navBarComponents/ServicesPage";
import LoginPage from "../components/Home/navBarComponents/LoginPage";
import RegisterPage from "../components/Home/navBarComponents/RegisterPage";
import AvailableCoursesProvider from "../components/Home/navBarComponents/courses/availableCourses/AvailableCoursesProvider";
import AvailableCourse from "../components/Home/navBarComponents/courses/availableCourses/AvailableCourse";
import AvailableCourses from "../components/Home/navBarComponents/courses/availableCourses/AvailableCourses";
import IntroToSAT from "../components/selfStudy/IntroToSAT";
import SatMathSelfStudy from "../components/selfStudy/satMath/SatMathSelfStudy";
import SatReadingSelfStudy from "../components/selfStudy/satReading/SatReadingSelfStudy";
import SatWritingSelfStudy from "../components/selfStudy/satWriting/SatWritingSelfStudy";
import pageUrls from "../utils/pageUrls/pageUrls";

const homeRoute = 
<Route path={pageUrls.home} element={<Home />}>
  <Route index element={<HomeMainBody />} />
  <Route path='about' element={<AboutPage />} />
  <Route path='contacts' element={<ContactsPage />} />
  <Route path='services' element={<ServicesPage />} />
  <Route path='login' element={<LoginPage />} />
  <Route path='register' element={<RegisterPage />} />
  <Route path='courses' element={<AvailableCoursesProvider />}>
    <Route index element={<AvailableCourses />} />
    <Route path=':courseId' element={<AvailableCourse />} />
  </Route>
  <Route path='self-study'>
    <Route path='introduction-to-sat' element={<IntroToSAT />} />
    <Route path='sat-math' element={<SatMathSelfStudy />} />
    <Route path='sat-reading' element={<SatReadingSelfStudy />} />
    <Route path='sat-writing' element={<SatWritingSelfStudy />} />
  </Route>
</Route>

export default homeRoute;