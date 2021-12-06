const sortingOptions = (state = {}, action) => {
  if (action.type === "SET_SORTING") return action.options;
  return state;
};

export default sortingOptions;
