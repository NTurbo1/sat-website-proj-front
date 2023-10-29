import React, { useEffect, useState } from 'react';
import { handleRetrieveStudentById } from '../../Admin/adminAccount/students/StudentCRUD';
import { useAuth } from '../../auth/AuthProvider';

const StudentProfile = () => {

  const [student, setStudent] = useState({});
  const { handleLogOut } = useAuth();

  useEffect(() => {
    const fetchStudentById = async () => {
      const studentData = await handleRetrieveStudentById(
        localStorage.getItem("userId"),
        handleLogOut
      );

      setStudent(studentData);
    };

    fetchStudentById();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Student Profile</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and information.</p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">First name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{student.firstName}</dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Last name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{student.lastName}</dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Email address</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{student.email}</dd>
              </div>
              {/* Add more profile details as needed */}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;