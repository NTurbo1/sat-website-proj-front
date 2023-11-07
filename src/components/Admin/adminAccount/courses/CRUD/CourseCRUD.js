import { apiEndpoints } from "../../../../../utils/apiEndpoints";


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