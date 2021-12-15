import { useContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MarketingView from "./MarketingView";
import PostFormView from "./PostForm/PostFormView";
import { addMarketingPost } from "../../../redux/actions/marketingPostList";
import { FirebaseContext } from "../../../firebase/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const MarketingPresenter = () => {
  const [postName, setPostName] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [postId, setPostId] = useState("");
  const [posts, setPosts] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in.
        setIsAuthenticated(true);
      } else {
        // User is signed out.
        setIsAuthenticated(false);
      }
    });
    return () => unsubscribe();
  }, [auth]);

  const { api } = useContext(FirebaseContext);

  const dispatch = useDispatch();

  const postList = useSelector((state) => state.marketingPostList);

  const createPost = () => {
    if (isAuthenticated && postName && postTitle && postText && postId) {
      const newPost = {
        name: postName,
        title: postTitle,
        text: postText,
        id: postId,
      };
      const newPosts = [newPost, ...posts];
      setPosts(newPosts);
      dispatch(addMarketingPost(newPost));
      api.addMarketingPost(newPost);
    }
  };

  const getIdFromUrl = (url) => {
    const tweetId = url.substring(url.lastIndexOf("/") + 1, url.length);
    return tweetId;
  };

  useEffect(() => {
    setPosts(postList.reverse());
  }, [postList]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-6 flex flex-col gap-5">
      {!isAuthenticated || (
        <PostFormView
          onPostName={(name) => setPostName(name)}
          onPostTitle={(title) => setPostTitle(title)}
          onPostText={(text) => setPostText(text)}
          onPostUrl={(url) => setPostId(getIdFromUrl(url))}
          onPost={() => createPost()}
        />
      )}
      <MarketingView posts={posts} />
    </div>
  );
};
export default MarketingPresenter;
