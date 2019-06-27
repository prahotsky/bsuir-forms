export const createTest = test => dispatch => {
  dispatch({ type: "CREATE_TEST", payload: test });
};

export const deleteTest = id => dispatch => {
  dispatch({ type: "DELETE_TEST", payload: id });
};
