// Contains the Firebase context and provider.
import React, { createContext, useEffect } from "react";
import firebaseConfig from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { useDispatch } from "react-redux";
import { setMarketingPosts } from "../redux/actions/marketingPostList";

// Create a React Context, for this to be accessible from a component later.
const FirebaseContext = createContext(null);
export { FirebaseContext };

const FirebaseProvider = ({ children }) => {
  const dispatch = useDispatch();

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // Function to query the marketing posts from the Firebase database and
  // fire a Redux action to update the items in real-time.
  const getMarketingPosts = () => {
    firebase
      .database()
      .ref("marketingPosts")
      .on("value", (snapshot) => {
        const vals = snapshot.val();
        let _records = [];
        for (var key in vals) {
          _records.push(...vals[key]);
        }
        // setMarketingPosts is a Redux action that updates the store
        // to the _records payload.
        dispatch(setMarketingPosts(_records));
      });
  };

  const addMarketingPosts = (post) => {
    console.log(firebase);
    firebase
      .database()
      .ref("marketingPosts")
      .push()
      .set(post)
      .then(() => {
        // Nothing to do here since we already have a
        // connection pulling updates to marketingPostList.
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const firebase = {
    app: app,
    database: db,
    api: {
      getMarketingPosts,
      addMarketingPosts,
    },
  };

  return (
    <FirebaseContext.Provider value={firebase}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
