import NavbarView from "../../common/Navbar/NavbarView";
import PostListView from "./PostList/PostListView";

const MarketingView = ({ posts }) => {
  return (
    <div className="bg-white">
      <PostListView posts={posts} />
    </div>
  );
};
export default MarketingView;
