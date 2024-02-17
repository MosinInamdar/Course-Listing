import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './CourseDetailsPage.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCourses } from '../../redux/actions/courseActions.js';

const CourseDetails = () => {
  const { id } = useParams(); // Get the id parameter from the URL
  const dispatch = useDispatch();
  const course = useSelector(state => {
    const courses = state.courses.courses;
    return courses.find(course => course.id === parseInt(id)); // Find the course with matching id
  });

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  if (!course) {
    return <div className="course-details">Loading...</div>;
  }

  return (
    <div className="course-details">
      <img className="course-thumbnail" src={course.thumbnail} alt="Course Thumbnail" />
      <h2 className="course-name">{course.name}</h2>
      <p className="instructor">Instructor: {course.instructor}</p>
      <p className="description">Description: {course.description}</p>
      <p className={`enrollment-status ${course.enrollmentStatus.toLowerCase()}`}>
        Enrollment Status: {course.enrollmentStatus}
      </p>
      <p className="duration">Duration: {course.duration}</p>
      <p className="schedule">Schedule: {course.schedule}</p>
      <p className="location">Location: {course.location}</p>
      <p className="prerequisites">Prerequisites: {course.prerequisites.join(', ')}</p>
      <details className="syllabus">
        <summary>Syllabus</summary>
        <ul>
          {course.syllabus.map((item) => (
            <li key={item.week}>
              <strong>Week {item.week}:</strong> {item.topic}
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
};

export default CourseDetails;
