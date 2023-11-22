import { Navigate, Route, Routes } from 'react-router-dom'
import PageNotFound from '../components/errorComponents/PageNotFound'
import homeRoute from './homeRoute'
import studentRoute from './studentRoutes/studentRoute'
import adminRoute from './adminRoutes/adminRoute'

const routes = <Routes>
  <Route path='/sat-website-proj-front' 
    element={<Navigate to={"/sat-website-proj-front/home"} />}
  />

  {homeRoute}

  {studentRoute}

  {adminRoute}

  <Route path='*' element={<PageNotFound />} />
</Routes>

export {
  routes
}