import { Fragment } from "react";
import NavbarView from "../../common/Navbar/NavbarView";
import MarketingView from "./MarketingView";

const MarketingPresenter = () => {
  return (
    <Fragment>
      <NavbarView />
      <MarketingView />
    </Fragment>
  );
};
export default MarketingPresenter;
