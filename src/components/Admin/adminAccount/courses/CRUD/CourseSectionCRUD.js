import { apiEndpoints } from "../../../../../utils/api/apiEndpoints";

export const retrieveAllCourseSectionsByCourseId = async (courseId) => {

  try {
    const response = await fetch(apiEndpoints.courseSectionsByCourseId(courseId),
      {
        method: "GET",
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("jwtToken"),
          'Content-type': 'application/json; charset=UTF-8'
        }
      });

    if (response.ok) {
      const data = await response.json();
      return data;

    } else {
      console.error("Failed to retrieve all courseSections by course id = " + courseId + ".");
      console.error(response.statusText);

      return [];
    }

  } catch(error) {
    console.error("An error occured " + error);
    return [];
  }

}

export const retrieveCourseSectionByCourseIdAndCourseSectionId = 
  async (courseId, courseSectionId) => {
  
  try {
    const response = await fetch(
      apiEndpoints.courseSectionByCourseIdAndCourseSectionId(
        courseId, courseSectionId),
      {
        method: "GET",
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("jwtToken"),
          'Content-type': 'application/json; charset=UTF-8'
        }
      });

    if (response.ok) {
      const data = await response.json();
      return data;

    } else {
      console.error("Failed to retrieve a courseSection by course id = " + courseId + 
        " and course section id = " + courseSectionId);
      console.error(response.statusText);

      return null;
    }

  } catch(error) {
    console.error("An error occured " + error);
    return null;
  }
}

export const createCourseSection = async (courseId, courseSection) => {

  try {
    const response = await fetch(
      apiEndpoints.courseSectionsByCourseId(courseId),
      {
        method: "POST",
        body: JSON.stringify(
          {
            name: courseSection.name,
            description: courseSection.description
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
      console.error("Failed to create course section " + courseSection.name + 
        "with course id = " + courseId);
      console.error(response.statusText);

      return false;
    }

  } catch(error) {
    console.error("An error occured: " + error);
    return false;
  }
}

export const updateCourseSection = async (
  courseId, courseSectionId, courseSection) => {

  try {
    const response = await fetch(
      apiEndpoints.courseSectionByCourseIdAndCourseSectionId(
        courseId, courseSectionId),
      {
        method: "PUT",
        body: JSON.stringify(
          {
            name: courseSection.name,
            description: courseSection.description
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
      console.error("Failed to update course section " + courseSection.name + 
        "with course id = " + courseId);
      console.error(response.statusText);

      return false;
    }

  } catch(error) {
    console.error("An error occured: " + error);
    return false;
  }
}

export const deleteCourseSection = async (courseId, courseSectionId) => {

  try {
    const response = await fetch(
      apiEndpoints.courseSectionByCourseIdAndCourseSectionId(
        courseId, courseSectionId),
      {
        method: "DELETE",
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("jwtToken"),
          'Content-type': 'application/json; charset=UTF-8',
        }
      }
    );

    if (response.ok) {
      return true;

    } else {
      console.error("Failed to delete course section with id = " + courseSectionId + 
        "and with course id = " + courseId);
      console.error(response.statusText);

      return false;
    }

  } catch(error) {
    console.error("An error occured: " + error);
    return false;
  }
}