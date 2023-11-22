import { Route } from "react-router-dom";
import NewTopicForm from "../../components/Admin/adminAccount/courses/coursePage/courseSection/topic/NewTopicForm";
import UpdateTopicForm from "../../components/Admin/adminAccount/courses/coursePage/courseSection/topic/UpdateTopicForm";
import TopicPage from "../../components/Admin/adminAccount/courses/coursePage/courseSection/topic/TopicPage";

const adminTopicRoute = 
<>
  <Route path="topics/new-topic" element={<NewTopicForm />} />
  <Route path="topic/:topicId/update-topic" element={<UpdateTopicForm />} />
  <Route path="topic/:topicId" element={<TopicPage />}/>
</>

export default adminTopicRoute;