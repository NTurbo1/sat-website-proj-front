import React from 'react'
import { useAuth } from '../AuthProvider'
import { Navigate } from 'react-router-dom';
import pageUrls from '../../../utils/pageUrls';
import PageNotFound from '../../errorComponents/PageNotFound';

const AdminAuthorized = ({ children }) => {

  const { checkAdminAuthorization } =  useAuth()

  const isAuthorized = checkAdminAuthorization();

  return isAuthorized === true ? (
    children
  ) : (
    <PageNotFound />
  );
}

export default AdminAuthorized