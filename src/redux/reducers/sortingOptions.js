const sortingOptions = (state = {}, action) => {
  if (action.type === "SET_SORTING_OPTIONS") return action.options;
  return state;
};

export default sortingOptions;
