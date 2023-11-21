import { Route } from "react-router-dom";
import NewTopicForm from "../../components/Admin/adminAccount/courses/coursePage/courseSection/topic/NewTopicForm";
import UpdateTopicForm from "../../components/Admin/adminAccount/courses/coursePage/courseSection/topic/UpdateTopicForm";

const adminTopicRoute = 
<>
  <Route path="topics/new-topic" element={<NewTopicForm />} />
  <Route path="topic/:topicId/update-topic" element={<UpdateTopicForm />} />
</>

export default adminTopicRoute;