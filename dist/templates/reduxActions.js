export const ${componentName}ActionTypes = {
  FETCH_REQUEST: '${componentName}_FETCH_REQUEST',
  FETCH_SUCCESS: '${componentName}_FETCH_SUCCESS',
  FETCH_FAILURE: '${componentName}_FETCH_FAILURE',
};

export const fetch${componentName}Request = () => ({
  type: ${componentName}ActionTypes.FETCH_REQUEST,
});

export const fetch${componentName}Success = (data) => ({
  type: ${componentName}ActionTypes.FETCH_SUCCESS,
  payload: data,
});

export const fetch${componentName}Failure = (error) => ({
  type: ${componentName}ActionTypes.FETCH_FAILURE,
  payload: error,
});
