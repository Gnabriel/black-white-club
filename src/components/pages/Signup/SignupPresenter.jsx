import SignupView from "./SignupView";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const SignupPresenter = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptGdpr, setAcceptGdpr] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState("");

  const auth = getAuth();

  const createUserWithEmail = () => {
    setAuthError("");
    acceptGdpr &&
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in.
          setIsAuthenticated(true);
        })
        .catch((error) => {
          // Signed out.
          if (error.code === "auth/email-already-in-use") {
            setAuthError("This email already exists.");
          }
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + ": " + errorMessage);
        });
  };

  return (
    <SignupView
      isAuthenticated={isAuthenticated}
      setEmail={setEmail}
      setPassword={setPassword}
      acceptGdpr={acceptGdpr}
      setAcceptGdpr={setAcceptGdpr}
      handleClick={() => createUserWithEmail()}
      authError={authError}
    />
  );
};
export default SignupPresenter;
