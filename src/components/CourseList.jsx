import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCourse } from '../redux/coursesSlice';
import CourseCard from './CourseCard';
import { useNavigate } from 'react-router-dom';

const CourseList = () => {
  const dispatch = useDispatch();
  const courses = useSelector(state => state.courses.courses);
  const navigate = useNavigate();

  const handleCourseClick = (course) => {
    dispatch(selectCourse(course));
    navigate('/details');
  };

  return (
    <div className="course-list">
      {courses.map(course => (
        <CourseCard
          key={course.id}
          course={course}
          onClick={() => handleCourseClick(course)}
        />
      ))}
    </div>
  );
};

export default CourseList;
