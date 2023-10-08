import App from '../App'
import AboutPage from '../components/navBarComponents/AboutPage'
import ContactsPage from '../components/navBarComponents/ContactsPage'
import ServicesPage from '../components/navBarComponents/ServicesPage'
import LoginPage from '../components/navBarComponents/LoginPage'
import RegisterPage from '../components/navBarComponents/RegisterPage'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import IntroToSAT from '../components/courses/IntroToSAT'
import SatMath from '../components/courses/SatMath'
import SatReading from '../components/courses/SatReading'
import SatWriting from '../components/courses/SatWriting'
import HomeMainBody from '../components/HomeMainBody'

// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <App />
//     },
//     {
//         path: '/about',
//         element: <AboutPage />
//     },
//     {
//         path: '/contacts',
//         element: <ContactsPage />
//     },
//     {
//         path: '/services',
//         element: <ServicesPage />
//     },
//     {
//         path: '/login',
//         element: <LoginPage />
//     },
//     {
//         path: '/register',
//         element: <RegisterPage />
//     },
//     {
//         path: '/introduction-to-sat',
//         element: <IntroToSAT />
//     },
//     {
//         path: '/courses/sat-math',
//         element: <SatMath />
//     },
//     {
//         path: '/courses/sat-reading',
//         element: <SatReading />
//     },
//     {
//         path: '/courses/sat-writing',
//         element: <SatWriting />
//     }
//     ], {basename: "/"})

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
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
    </Route>
  ), { basename: "/sat-website-proj-front"}
)

export {
  router
}