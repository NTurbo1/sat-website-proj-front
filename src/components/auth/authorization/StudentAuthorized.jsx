import React from 'react'
import { useAuth } from '../AuthProvider';
import PageNotFound from '../../errorComponents/PageNotFound';

const StudentAuthorized = ({ children }) => {

  const { checkStudentAuthorization } =  useAuth()

  const isAuthorized = checkStudentAuthorization();

  return isAuthorized === true ? (
    children
  ) : (
    <PageNotFound />
  );
}

export default StudentAuthorized