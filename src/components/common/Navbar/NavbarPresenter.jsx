import NavbarView from "./NavbarView";
// import { DocumentIcon } from "@heroicons/react/outline";
import {
  // DocumentIcon as DocumentIconSolid,
  CollectionIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/solid";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react";

const browsePages = [
  // {
  //   name: "The Black",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  //   linkTo: "/browse",
  //   icon: DocumentIconSolid,
  // },
  // {
  //   name: "The White",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  //   linkTo: "/browse",
  //   icon: DocumentIcon,
  // },
  {
    name: "Browse All",
    description: "Browse the whole Black White Club collection.",
    linkTo: "/browse",
    icon: CollectionIcon,
  },
  {
    name: "(Coming soon)",
    description: "Stay tuned for more collections!",
    linkTo: "#",
    icon: QuestionMarkCircleIcon,
  },
];

const NavbarPresenter = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const auth = getAuth();
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
    <NavbarView
      browsePages={browsePages}
      isAuthenticated={isAuthenticated}
      handleLogout={() => signOut(auth)}
    />
  );
};

export default NavbarPresenter;
