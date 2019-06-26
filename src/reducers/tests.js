export default function tests(state = [], action) {
  switch (action.type) {
    case "GET_TESTS_LIST":
      return state;
    default:
      return state;
  }
}
