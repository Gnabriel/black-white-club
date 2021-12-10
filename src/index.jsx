import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/store";
import { Provider as ReduxProvider } from "react-redux";
import FirebaseProvider from "./firebase/firebase";

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <FirebaseProvider>
        <App />
      </FirebaseProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
