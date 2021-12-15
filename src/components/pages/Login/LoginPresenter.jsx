import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import LoginView from "./LoginView";
import { useState } from "react";

const LoginPresenter = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState("");

  const auth = getAuth();

  const signInWithEmail = () => {
    setAuthError("");
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setIsAuthenticated(true);
      })
      .catch((error) => {
        setAuthError("Wrong username or password.");
      });
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in.
      setIsAuthenticated(true);
    } else {
      // User is signed out.
      setIsAuthenticated(false);
    }
  });

  return (
    <LoginView
      setEmail={setEmail}
      setPassword={setPassword}
      handleClick={() => signInWithEmail()}
      isAuthenticated={isAuthenticated}
      authError={authError}
    />
  );
};
export default LoginPresenter;
