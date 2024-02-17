const initialState = {
  courses: [], // Ensure courses is initialized as an empty array
  loading: false,
  error: null,
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COURSES_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_COURSES_SUCCESS":
      return {
        ...state,
        loading: false,
        courses: action.payload,
      };
    case "FETCH_COURSES_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "UPDATE_COURSE_PROGRESS":
      const { courseId, updatedStudents } = action.payload;
      return {
        ...state,
        courses: state.courses.map((course) => {
          if (course.id === courseId) {
            return { ...course, students: updatedStudents };
          }
          return course;
        }),
      };
    default:
      return state;
  }
};

export default courseReducer;
