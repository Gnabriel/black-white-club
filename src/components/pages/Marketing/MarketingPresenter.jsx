import { Fragment, useState } from "react";
import MarketingView from "./MarketingView";
import PostFormView from "./PostForm/PostFormView";

const MarketingPresenter = () => {
  const [postName, setPostName] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [postId, setPostId] = useState("");
  const [postList, setPostList] = useState([]);

  const createPost = () => {
    setPostList([
      {
        name: postName,
        title: postTitle,
        text: postText,
        id: postId,
      },
      ...postList,
    ]);
  };
  const cutUrl = (url) => {
    const tweetId = url.substring(url.lastIndexOf("/") + 1, url.length);
    return tweetId;
  };

  return (
    <Fragment>
      <PostFormView
        onPostName={(name) => setPostName(name)}
        onPostTitle={(title) => setPostTitle(title)}
        onPostText={(text) => setPostText(text)}
        onPostUrl={(url) => setPostId(cutUrl(url))}
        onPost={() => createPost()}
      />
      <MarketingView posts={postList} />
    </Fragment>
  );
};
export default MarketingPresenter;