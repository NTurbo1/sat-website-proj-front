import { apiEndpoints } from "../../../../../utils/apiEndpoints";
import { courseStatus } from "./CourseConstants";


export const createCourse = async (course) => {
  try {
    const response = await fetch(
      apiEndpoints.allCourses,
      {
        method: "POST",
        body: JSON.stringify(
          {
            name: course.name,
            description: course.description,
            type: course.type,
            createdDate: Date.now(),
            status: course.status,
            price: course.price
          }
        ),
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("jwtToken"),
          'Content-type': 'application/json; charset=UTF-8',
        }
      }
    );

    if (response.ok) {
      return true;

    } else {
      console.error("Failed to create course " + course.name);
      console.error(response.statusText);

      return false;
    }

  } catch(error) {
    console.error("An error occured: " + error);
    return false;
  }
}

export const retrieveAllCourses = async (handleLogOut, status = null) => {

  let url = apiEndpoints.allCourses;
  let headers = {
    "Authorization": "Bearer " + localStorage.getItem("jwtToken"),
    'Content-type': 'application/json; charset=UTF-8',
  }

  if (status != null) {
    url += ("?status=" + status)
    if (status === courseStatus.active) {
      headers = {
        'Content-type': 'application/json; charset=UTF-8',
      }
    }
  }

  try {
    const response = await fetch(
      url,
      {
        method: "GET",
        headers: headers
      }
    );

    if (response.ok) {
      const data = await response.json();
      return data;

    } else {
      console.error("Failed to retrieve all courses.");
      console.error(response.statusText);

      return [];
    }
  } catch(error) {
    console.error("An error occured " + error);
    return [];
  }
}

export const retrieveAllCoursesByStudentId = async (studentId) => {

  try {
    const response = await fetch(
      apiEndpoints.allStudentEnrolledCourses(studentId),
      {
        method: "GET",
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("jwtToken"),
          'Content-type': 'application/json; charset=UTF-8',
        }
      }
    );

    if (response.ok) {
      const data = await response.json();
      return data;

    } else {
      console.error("Failed to retrieve all enrolled courses.");
      console.error(response.statusText);

      return [];
    }
  } catch(error) {
    console.error("An error occured " + error);
    return [];
  }
} 