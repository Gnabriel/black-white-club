const marketingPostList = (state = [], action) => {
  if (action.type === "ADD_MARKETING_POST")
    return [...state, action.marketingPost];
  if (action.type === "SET_MARKETING_POSTS") return action.marketingPosts;
  return state;
};

export default marketingPostList;
