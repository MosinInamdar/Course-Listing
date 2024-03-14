import courses from "../courses.js";

export const fetchCourses = () => {
  return (dispatch) => {
    dispatch(fetchCoursesRequest());
    // Simulate fetching data from backend (replace with actual HTTP request)

    dispatch(fetchCoursesSuccess(courses));
    if (courses === "") {
      dispatch(fetchCoursesFailure("No Courses"));
    }
  };
};

const fetchCoursesRequest = () => {
  return {
    type: "FETCH_COURSES_REQUEST", // Updated action type
  };
};

const fetchCoursesSuccess = (data) => {
  return {
    type: "FETCH_COURSES_SUCCESS", // Updated action type
    payload: data,
  };
};

const fetchCoursesFailure = (error) => {
  return {
    type: "FETCH_COURSES_FAILURE", // Updated action type
    payload: error,
  };
};

export const updateCourseProgress = (courseId, updatedStudents) => {
  return {
    type: "UPDATE_COURSE_PROGRESS",
    payload: { courseId, updatedStudents },
  };
};
