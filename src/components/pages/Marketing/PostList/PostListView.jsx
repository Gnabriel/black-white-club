import PostView from "./Post/PostView";

const PostListView = ({ posts }) => {
  return posts.map((post) => {
    return <PostView post={post} key={post.id} />;
  });
};
export default PostListView;
