import React from "react";
import StudentScheduler from "./StudentSchedule";
import TodaysTasksComponent from "./TodaysTasks";
import EnrolledCoursesSlider from "./EnrolledCoursesSlider";

const StudentAccountDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 w-4/5">

      <div className="flex-1 flex-col">
        <div className="flex py-10 justify-around">
          <TodaysTasksComponent />

          <div className="bg-white rounded-lg shadow-lg p-6">
            <StudentScheduler />
          </div>
        </div>


        <EnrolledCoursesSlider />

        <div className="flex flex-col gap-5 max-w-full p-10">

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Certificates</h2>
            <p>Your latest Certificates will appear here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentAccountDashboard;