const currentAsset = (state = null, action) => {
  if (action.type === "SET_ASSET") return action.asset;
  return state;
};

export default currentAsset;
