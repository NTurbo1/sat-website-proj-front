import { apiEndpoints } from "../../../../../utils/api/apiEndpoints";

export const retrieveAllTopicsByCourseIdAndCourseSectionId = async (
  courseId, courseSectionId
) => {
  try {
    const response = await fetch(
      apiEndpoints.topicsByCourseIdAndCourseSectionId(courseId, courseSectionId),
      {
        method: "GET",
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("jwtToken"),
          'Content-type': 'application/json; charset=UTF-8'
        }
      }
    );

    if (response.ok) {
      const data = await response.json();
      return data;

    } else {
      console.error("Failed to retrieve all topics by course id = " + courseId + 
        "and course section id = " + courseSectionId);
      console.error(response.statusText);

      return [];
    }

  } catch(error) {
    console.error("An error occured " + error);
    return [];
  }
}

export const retrieveTopic = async (
  courseId, courseSectionId, topicId
) => {
  try {
    const response = await fetch(
      apiEndpoints.topicByCourseIdCourseSectionIdAndTopicId(
        courseId, courseSectionId, topicId),
      {
        method: "GET",
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("jwtToken"),
          'Content-type': 'application/json; charset=UTF-8'
        }
      }
    );

    if (response.ok) {
      const data = await response.json();
      return data;

    } else {
      console.error("Failed to retrieve a topic by course id = " + courseId + 
        ", course section id = " + courseSectionId + ", and topic id = " + 
        topicId);
      console.error(response.statusText);

      return null;
    }

  } catch(error) {
    console.error("An error occured " + error);
    return null;
  }
}

export const createTopic = async (courseId, courseSectionId, topic) => {

  try {
    const response = await fetch(
      apiEndpoints.topicsByCourseIdAndCourseSectionId(
        courseId, courseSectionId),
      {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("jwtToken"),
          'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
          name: topic.name,
          description: topic.description,
          text: topic.text
        })
      }
    );

    if (response.ok) {
      const createdTopic = await response.json();
      return createdTopic;

    } else {
      console.error("Failed to create topic with course id = " + courseId + 
        "and course section id = " + courseSectionId);
      console.error(response.statusText);

      return null;
    }

  } catch(error) {
    console.error("An error occured " + error);
    return null;
  }
}

export const updateTopic = async (courseId, courseSectionId, topicId, topic) => {

  try {
    const response = await fetch(
      apiEndpoints.topicByCourseIdCourseSectionIdAndTopicId(
        courseId, courseSectionId, topicId),
      {
        method: "PUT",
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("jwtToken"),
          'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
          name: topic.name,
          description: topic.description,
          text: topic.text
        })
      }
    );

    if (response.ok) {
      const updatedTopic = await response.json();
      return updatedTopic;

    } else {
      console.error("Failed to update topic with course id = " + courseId + 
        ", course section id = " + courseSectionId + ", and topic id = " + 
        topicId + ".");
      console.error(response.statusText);

      return null;
    }

  } catch(error) {
    console.error("An error occured " + error);
    return null;
  }
}

export const deleteTopic = async (courseId, courseSectionId, topicId) => {

  try {
    const response = await fetch(
      apiEndpoints.topicByCourseIdCourseSectionIdAndTopicId(
        courseId, courseSectionId, topicId),
      {
        method: "DELETE",
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("jwtToken"),
          'Content-type': 'application/json; charset=UTF-8'
        }
      }
    );

    if (response.ok) {
      return true;

    } else {
      console.error("Failed to delete topic with course id = " + courseId + 
        "and course section id = " + courseSectionId + ", and topic id = " + 
        topicId + ".");
      console.error(response.statusText);

      return false;
    }

  } catch(error) {
    console.error("An error occured " + error);
    return false;
  }
}