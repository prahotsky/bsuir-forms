export const createTest = test => dispatch => {
  dispatch({ type: "CREATE_TEST", payload: test });
};
