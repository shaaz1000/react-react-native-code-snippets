import { ${componentName}ActionTypes } from './${componentName}Actions';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const ${componentName}Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ${componentName}ActionTypes.FETCH_REQUEST:
      return { ...state, loading: true, error: null };
    case ${componentName}ActionTypes.FETCH_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case ${componentName}ActionTypes.FETCH_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default ${componentName}Reducer;
