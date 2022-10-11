export default (state, action) => {
  switch (action.type) {
    case "incr":
      console.log("test");
      return {
        ...state,
        count: state.count + action.payload,
      };
      break;

    default:
      return state;
      break;
  }
};
