import { Fragment } from "react";
import NavbarView from "../../common/Navbar/NavbarView";
import MarketingView from "./MarketingView";
import PostFormView from "./PostForm/PostFormView";

const MarketingPresenter = () => {
  return (
    <Fragment>
      <NavbarView />
      <PostFormView />
      <MarketingView />
    </Fragment>
  );
};
export default MarketingPresenter;
