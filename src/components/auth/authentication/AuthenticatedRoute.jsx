import React, { useEffect } from 'react'
import { useAuth } from '../AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'
import pageUrls from '../../../utils/pageUrls/pageUrls'

const AuthenticatedRoute = ({ children }) => {

  const { isLoggedIn, checkJwtTokenExpiration } = useAuth()
  const location = useLocation()

  useEffect(() => {
    const checkToken = async () => {
      await checkJwtTokenExpiration();
    };

    checkToken();
  }, []);

  return isLoggedIn === true ? (
    children
  ) : (
    <Navigate to={pageUrls.login} replace state={{ from: location}} />
  )
}

export default AuthenticatedRoute