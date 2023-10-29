import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const StudentScheduler = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-5">Calendar</h2>
      <div style={{ maxWidth: "300px", width: "100%" }}>
        <Calendar
          onChange={onChange}
          value={date}
          style={{ width: "100%" }} // Customize the width
          calendarType="US" // Change the calendar type if necessary
        />
      </div>
    </div>
  );
};

export default StudentScheduler;