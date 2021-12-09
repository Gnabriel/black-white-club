import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BrowsePresenter from "./components/pages/Browse/BrowsePresenter";
import AssetDetailsPresenter from "./components/pages/AssetDetails/AssetDetailsPresenter";
import HomeView from "./components/pages/Home/HomeView";
import NavbarView from "./components/common/Navbar/NavbarView";

function App() {
  return (
    <div className="selection:bg-gray text-black">
      <Router>
        <NavbarView />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/browse" element={<BrowsePresenter />} />
          <Route path="/browse/:page" element={<BrowsePresenter />} />
          <Route path="/assets/:id" element={<AssetDetailsPresenter />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
