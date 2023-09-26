import App from '../App'
import AboutPage from '../components/AboutPage'
import ContactsPage from '../components/ContactsPage'
import ServicesPage from '../components/ServicesPage'
import LoginPage from '../components/LoginPage'
import RegisterPage from '../components/RegisterPage'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/about',
        element: <AboutPage />
    },
    {
        path: 'contacts',
        element: <ContactsPage />
    },
    {
        path: 'services',
        element: <ServicesPage />
    },
    {
        path: 'login',
        element: <LoginPage />
    },
    {
        path: 'register',
        element: <RegisterPage />
    }
], {basename: "/sat-website-proj-front"})


export {
    router
}