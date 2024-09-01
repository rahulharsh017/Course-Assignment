import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { markAsCompleted } from '../redux/studentSlice';

const StudentDashboard = () => {
  const dispatch = useDispatch();
  const enrolledCourses = useSelector(state => state.students.enrolledCourses);

  const handleMarkAsCompleted = (courseId) => {
    dispatch(markAsCompleted(courseId));
  };

  return (
    <div className="student-dashboard">
      <h2>Enrolled Courses</h2>
      {enrolledCourses.map(course => (
        <div key={course.id} className="enrolled-course">
          <h3>{course.name}</h3>
          <p>Instructor: {course.instructor}</p>
          <img src={course.thumbnail} alt={course.name} />
          <p>Due Date: {course.dueDate || "N/A"}</p>
          <p>Progress: {course.completed ? 'Completed' : 'In Progress'}</p>
          {!course.completed && (
            <button onClick={() => handleMarkAsCompleted(course.id)}>
              Mark as Completed
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default StudentDashboard;
