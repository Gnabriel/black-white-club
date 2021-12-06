import AssetSource from "./api/assetSource";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BrowsePresenter from "./components/pages/Browse/BrowsePresenter";
import HomeView from "./components/pages/Home/HomeView";

function App() {
  useEffect(() => {
    const params = {
      offset: 0,
      limit: 10,
      order_direction: "desc",
      collection: "the-fungible-by-pak",
      owner: "0x46bfa36e19d7e5baa0a039f7e5868b3592c85be2",
    };

    AssetSource.getAssets2(params);
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/browse" element={<BrowsePresenter />} />
      </Routes>
    </Router>
  );
}

export default App;
