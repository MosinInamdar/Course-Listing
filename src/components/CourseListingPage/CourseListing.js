import React, { useState, useEffect } from "react";
import CourseCard from "./CourseCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchCourses } from "../../redux/actions/courseActions";
import { useNavigate } from "react-router-dom";
import "./CourseListingPage.css"; // Import CSS file

const CourseListing = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const handleCardClick = (id) => {
    navigate(`/course/${id}`);
    // Navigate to course details page with id
  };

  return (
    <div className="container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Course"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="course-listing">
        {courses
          .filter((course) =>
            `${course.name} ${course.instructor}`
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
          )
          .map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onClick={handleCardClick}
            />
          ))}
      </div>
    </div>
  );
};

export default CourseListing;
