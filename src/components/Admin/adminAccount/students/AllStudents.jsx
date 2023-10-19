import React, { useEffect, useState } from 'react'
import { apiEndpoints } from '../../../../utils/apiEndpoints';
import { useAuth } from '../../../auth/authentication/AuthProvider';
import StudentUpdateDropDown from './StudentUpdateDropDown';

const AllStudents = () => {

  const [students, setStudents] = useState([]);
  const { handleLogOut } = useAuth();

  const getAllStudents = async () => {

    try {
      const response = await fetch(
        apiEndpoints.allStudents,
        {
          method: "GET",
          headers: {
            "Authorization": "Bearer " + localStorage.getItem("jwtToken"),
          },
        }
      ); 

      if (response.ok) {
        const data = await response.json();
        return data;

      } else {
        console.log("response status: " + response.status)
        console.error("Failed to retrieve all students: " + response.statusText)
        if (response.status === 403) handleLogOut();
        return [];
      }

    } catch(error) {
      console.error("An error occurred:", error);
      return [];
    }
  }

  useEffect(() => {
    const fetchStudents = async () => {
      const studentsList = await getAllStudents();
      setStudents(studentsList);
    };

    fetchStudents();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Students</h1>
      <div className="shadow border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                User ID
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                First Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {students.map((user) => (
              <tr key={user.userId}>
                {}
                <td className="px-6 py-4 whitespace-nowrap">{user.userId}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.firstName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.lastName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{
                  <StudentUpdateDropDown 
                    user={user}
                  />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllStudents