import React from 'react';
import './EnrolledCourseCard.css'

const EnrolledCourseCard = ({ course, markCompleted, loggedInStudentId }) => {
  const handleMarkCompleted = () => {
    // Call the markCompleted function passed from the parent component
    markCompleted(course.id);
  };

  // Find the logged-in student in the course
  const loggedInStudent = course.students.find(student => student.id === loggedInStudentId);

  return (
    <div className="enrolled-course-card">
      <img src={course.thumbnail} alt="Course Thumbnail" />
      <h3>{course.name}</h3>
      <p>Instructor: {course.instructor}</p>
      <p>Due Date: {course.dueDate}</p>
      {loggedInStudent && (
        <div>
          <p>Your Progress: {loggedInStudent.progress}%</p>
          <progress value={loggedInStudent.progress} max="100" />
        </div>
      )}
      <button onClick={handleMarkCompleted}>Mark Completed</button>
    </div>
  );
};

export default EnrolledCourseCard;
