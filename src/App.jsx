import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BrowsePresenter from "./components/pages/Browse/BrowsePresenter";
import AssetDetailsPresenter from "./components/pages/AssetDetails/AssetDetailsPresenter";
import HomeView from "./components/pages/Home/HomeView";
import LoginPresenter from "./components/pages/Login-Registration/LoginPresenter";
import RegisterPresenter from "./components/pages/Login-Registration/RegisterPresenter";
import MarketingPresenter from "./components/pages/Marketing/MarketingPresenter";

function App() {
  return (
    <div className="selection:bg-gray">
      <Router>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/browse" element={<BrowsePresenter />} />
          <Route path="/browse/:page" element={<BrowsePresenter />} />
          <Route path="/assets/:id" element={<AssetDetailsPresenter />} />
          <Route path="/login" element={<LoginPresenter />} />
          <Route path="/register" element={<RegisterPresenter />} />
          <Route path="/marketing" element={<MarketingPresenter />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
