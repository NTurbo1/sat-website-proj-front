import { apiEndpoints } from "../../../../utils/api/apiEndpoints";

export const handleUpdate = async (user, handleLogOut) => {

  try {
    const response = await fetch(
      apiEndpoints.allStudents + "/" + user.userId,
      {
        method: "PUT",
        body: JSON.stringify({
          userId: user.userId,
          firstName: user.firstName,
          lastName: user.lastName,
          userPassword: user.userPassword,
          email: user.email
        }),
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("jwtToken"),
        }
      }
    );

    if (response.ok) {
      return true;
    } else {
      console.error("Failed to update the user with id = " + user.userId);
      console.error(response.statusText);
      if (response.status === 403) handleLogOut();
      return false;
    }
  } catch(error) {
    console.error("An error occured: " + error);
    return false;
  }
}

export const handleDelete = async (userId, handleLogOut) => {
  console.log("DELETE Called");

  try {
    const response = await fetch(
      apiEndpoints.allStudents + "/" + userId,
      {
        method: "DELETE",
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("jwtToken"),
        }
      }
    );

    if (response.ok) {
      return true;
    } else {
      console.error("Failed to delete the user with id = " + userId);
      console.error(response.statusText);
      if (response.status === 403) handleLogOut();
      return false;
    }
  } catch(error) {
    console.error("An error occured: " + error);
    return false;
  }
}

export const handleRetrieveAllStudents = async (handleLogOut) => {

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

export const handleRetrieveStudentById = async (userId, handleLogOut) => {

  try {
    const response = await fetch(
      apiEndpoints.allStudents + "/" + userId,
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