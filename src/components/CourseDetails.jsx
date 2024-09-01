import React from 'react';
import { useSelector } from 'react-redux';

const CourseDetails = () => {
  const selectedCourse = useSelector(state => state.courses.selectedCourse);

  if (!selectedCourse) {
    return <div>Please select a course to view details.</div>;
  }

  return (
    <div className="course-details">
      <h2>{selectedCourse.name}</h2>
      <p>Instructor: {selectedCourse.instructor}</p>
      <p>Description: {selectedCourse.description}</p>
      <p>Status: {selectedCourse.enrollmentStatus}</p>
      <p>Duration: {selectedCourse.duration}</p>
      <p>Location: {selectedCourse.location}</p>
      <h3>Syllabus:</h3>
      <ul>
        {selectedCourse.syllabus.map((week, index) => (
          <li key={index}>
            Week {week.week}: {week.topic} - {week.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetails;
