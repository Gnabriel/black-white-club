import PostView from "./Post/PostView";

const PostListView = ({ posts }) => {
  return (
    <div className="p-10 flex flex-col gap-5 items-center rounded-xl bg-gray-lighter">
      {posts.map((post) => {
        return <PostView post={post} key={post.id + post.name + post.title} />;
      })}
    </div>
  );
};
export default PostListView;
