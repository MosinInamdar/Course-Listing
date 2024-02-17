import React from 'react';
import './CourseCard.css'; // Import the CSS file for CourseCard styling

const CourseCard = ({ course, onClick }) => {
  return (
    <div className="course-card" onClick={() => onClick(course.id)}>
      <img className="course-thumbnail" src={course.thumbnail} alt="Course Thumbnail" />
      <div className="course-details">
        <h3 className="course-title">{course.name}</h3>
        <p className="course-info">Instructor: {course.instructor}</p>
        <p className={`course-status ${course.enrollmentStatus === 'closed' ? 'closed' : ''}`}>
          Status: {course.enrollmentStatus}
        </p>
      </div>
    </div>
  );
};

export default CourseCard;
