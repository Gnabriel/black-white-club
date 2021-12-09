import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MarketingView from "./MarketingView";
import PostFormView from "./PostForm/PostFormView";
import { addMarketingPost } from "../../../redux/actions/marketingPostList";

const MarketingPresenter = () => {
  const [postName, setPostName] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [postId, setPostId] = useState("");
  const [posts, setPosts] = useState(
    useSelector((state) => state.marketingPostList)
  );

  const dispatch = useDispatch();

  const createPost = () => {
    const newPost = {
      name: postName,
      title: postTitle,
      text: postText,
      id: postId,
    };
    const newPosts = [newPost, ...posts];
    setPosts(newPosts);
    dispatch(addMarketingPost(newPost));
  };

  const getIdFromUrl = (url) => {
    const tweetId = url.substring(url.lastIndexOf("/") + 1, url.length);
    return tweetId;
  };

  return (
    <Fragment>
      <PostFormView
        onPostName={(name) => setPostName(name)}
        onPostTitle={(title) => setPostTitle(title)}
        onPostText={(text) => setPostText(text)}
        onPostUrl={(url) => setPostId(getIdFromUrl(url))}
        onPost={() => createPost()}
      />
      <MarketingView posts={posts} />
    </Fragment>
  );
};
export default MarketingPresenter;
