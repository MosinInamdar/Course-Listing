import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import EnrolledCourseCard from "./EnrolledCourseCard.js";
import "./Dashboard.css";
import {
  fetchCourses,
  updateCourseProgress,
} from "../../redux/actions/courseActions.js";

const Dashboard = () => {
  const [studentInfo, setStudentInfo] = useState(() => {
    // Retrieve student information from localStorage if available
    const storedStudentInfo = localStorage.getItem("studentInfo");
    return storedStudentInfo
      ? JSON.parse(storedStudentInfo)
      : { name: "", id: "" };
  });
  const [displayedStudent, setDisplayedStudent] = useState(null);
  const courses = useSelector((state) => state.courses.courses);
  const [course, setCourse] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetching courses data using Redux action
    dispatch(fetchCourses());

    // Retrieve displayed student from localStorage if available
    const storedDisplayedStudent = localStorage.getItem("displayedStudent");
    if (storedDisplayedStudent) {
      setDisplayedStudent(JSON.parse(storedDisplayedStudent));
    }
  }, [dispatch]);

  const handleStudentInfoSubmit = (e) => {
    e.preventDefault();
    if (!courses) return; // Ensure courses is initialized
    const foundStudent = courses
      .flatMap((course) => course.students || []) // Flatten students arrays, handling possible undefined
      .find((student) => student.id === parseInt(studentInfo.id));
    if (foundStudent) {
      setDisplayedStudent(foundStudent);
      // Store student information in localStorage
      localStorage.setItem("studentInfo", JSON.stringify(studentInfo));
    } else {
      alert("Student not found. Please enter a valid ID.");
    }
  };

  const markCompleted = (courseId) => {
    if (!courses || !displayedStudent) return; // Ensure courses and displayedStudent are initialized
    const updatedCourses = courses.map((course) => {
      if (course.students) {
        const updatedStudents = course.students.map((student) => {
          if (student.id === displayedStudent.id) {
            // Update the student's progress to 100
            return {
              ...student,
              progress: course.id === courseId ? 100 : student.progress, // Update progress only for the selected course
            };
          }
          return student;
        });

        // Dispatch an action to update the course progress in Redux state
        dispatch(updateCourseProgress(course.id, updatedStudents));

        // Return the updated course with modified student progress
        return { ...course, students: updatedStudents };
      }
      return course;
    });

    // Assuming your Redux reducer will handle the state update, you can setCourse to trigger re-rendering
    setCourse(updatedCourses);
  };

  const handleLogout = () => {
    setDisplayedStudent(null); // Clear displayedStudent to logout
    setStudentInfo({ name: "", id: "" }); // Clear studentInfo fields
    // Clear student information from localStorage
    localStorage.removeItem("studentInfo");
  };

  return (
    <div className="dashboard">
      <h1>Student Dashboard</h1>
      <form
        className={!displayedStudent ? "form-container" : "form-containerhide"}
        onSubmit={handleStudentInfoSubmit}
      >
        <label htmlFor="name">Enter Your Name:</label>
        <input
          className="form-input"
          type="text"
          id="name"
          value={studentInfo.name}
          onChange={(e) =>
            setStudentInfo({ ...studentInfo, name: e.target.value })
          }
          required
        />
        <label htmlFor="id">Enter Your ID:</label>
        <input
          className="form-input"
          type="number"
          id="id"
          value={studentInfo.id}
          onChange={(e) =>
            setStudentInfo({ ...studentInfo, id: e.target.value })
          }
          required
        />
        <button className="form-button" type="submit">
          Submit
        </button>
      </form>
      {displayedStudent && (
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      )}
      {displayedStudent && (
        <div className="student">
          <h3>Student Name: {displayedStudent.name}</h3>
          <h4>Courses Enrolled In:</h4>
          <div className="course-list">
            {courses &&
              courses
                .filter((course) =>
                  course.students.some(
                    (student) => student.id === displayedStudent.id
                  )
                )
                .map((course) => (
                  <EnrolledCourseCard
                    key={course.id}
                    course={course}
                    markCompleted={markCompleted}
                    loggedInStudentId={displayedStudent.id}
                  />
                ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
