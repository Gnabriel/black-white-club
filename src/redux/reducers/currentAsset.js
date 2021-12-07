const currentAsset = (state = "ingen asset", action) => {
  if (action.type === "SET_ASSET") return action.id;
  return state;
};

export default currentAsset;
