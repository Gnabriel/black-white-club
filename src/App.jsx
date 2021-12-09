import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BrowsePresenter from "./components/pages/Browse/BrowsePresenter";
import AssetDetailsPresenter from "./components/pages/AssetDetails/AssetDetailsPresenter";
import HomeView from "./components/pages/Home/HomeView";
import NavbarView from "./components/common/Navbar/NavbarView";
import LoginPresenter from "./components/pages/Login/LoginPresenter";
import SignupPresenter from "./components/pages/Signup/SignupPresenter";
import MarketingPresenter from "./components/pages/Marketing/MarketingPresenter";
import { FirebaseContext } from "./firebase/firebase";
import { useContext, useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
  const { app, api } = useContext(FirebaseContext);
  const marketingPostList = useSelector((state) => state.marketingPostList);

  useEffect(() => {
    api.addMarketingPosts({ test: "hejsan" });
    api.getMarketingPosts();
  }, []);

  return (
    <div className="selection:bg-gray text-black">
      <Router>
        <NavbarView />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/browse" element={<BrowsePresenter />} />
          <Route path="/browse/:page" element={<BrowsePresenter />} />
          <Route path="/assets/:id" element={<AssetDetailsPresenter />} />
          <Route path="/login" element={<LoginPresenter />} />
          <Route path="/signup" element={<SignupPresenter />} />
          <Route path="/marketing" element={<MarketingPresenter />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
