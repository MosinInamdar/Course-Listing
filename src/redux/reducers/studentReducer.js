const initialState = {
  courses: [], // Ensure courses is initialized as an empty array
  loading: false,
  error: null,
};

const studentReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export default studentReducer;
