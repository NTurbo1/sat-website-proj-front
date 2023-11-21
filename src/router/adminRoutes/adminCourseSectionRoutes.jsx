import { Route } from "react-router-dom";

import NewCourseSectionForm from "../../components/Admin/adminAccount/courses/coursePage/courseSection/NewCourseSectionForm";
import UpdateCourseSectionForm from "../../components/Admin/adminAccount/courses/coursePage/courseSection/UpdateCourseSectionForm";
import CourseSectionPage from "../../components/Admin/adminAccount/courses/coursePage/courseSection/CourseSectionPage";
import adminTopicRoute from "./adminTopicRoutes";
import CourseSectionDescription from "../../components/Admin/adminAccount/courses/coursePage/courseSection/CourseSectionDescription";

const adminCourseSectionRoute = 
<Route path="course/:courseId">
  <Route path='course-sections/new-course-section'
    element={<NewCourseSectionForm />}
  />
  <Route 
    path={'course-sections/:courseSectionId' + 
      '/update-course-section'} 
    element={<UpdateCourseSectionForm />}   
  />
  <Route path='course-section/:courseSectionId' 
    element={<CourseSectionPage />}>
      <Route index element={<CourseSectionDescription />} />
      {adminTopicRoute}
  </Route>
</Route>

export default adminCourseSectionRoute;