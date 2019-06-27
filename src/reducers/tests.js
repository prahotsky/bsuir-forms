export default function tests(state = [], action) {
  switch (action.type) {
    case "GET_TESTS_LIST":
      return state;
    case "CREATE_TEST":
      return [...state, action.payload];
    default:
      return state;
  }
}
