import React from 'react'
import { useAuth } from './authentication/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'
import pageUrls from '../../utils/pageUrls'

const ProtectedRoute = ({ children }) => {

  const { isLoggedIn, checkJwtTokenExpiration } = useAuth()
  const location = useLocation()

  checkJwtTokenExpiration();

  return isLoggedIn === true ? (
    children
  ) : (
    <Navigate to={pageUrls.login} replace state={{ from: location}} />
  )
}

export default ProtectedRoute