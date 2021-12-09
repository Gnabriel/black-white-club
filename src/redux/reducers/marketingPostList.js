const marketingPostList = (state = [], action) => {
  if (action.type === "ADD_MARKETING_POST")
    return [action.marketingPost, ...state];
  if (action.type === "SET_MARKETING_POSTS") return action.marketingPosts;
  return state;
};

export default marketingPostList;
