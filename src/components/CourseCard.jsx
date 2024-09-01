import React from 'react';

const CourseCard = ({ course, onClick }) => (
  <div className="course-card" onClick={onClick}>
    <img src={course.thumbnail} alt={course.name} />
    <h3>{course.name}</h3>
    <p>Instructor: {course.instructor}</p>
    <p>Status: {course.enrollmentStatus}</p>
    <p>Duration: {course.duration}</p>
    <p>Location: {course.location}</p>
  </div>
);

export default CourseCard;
