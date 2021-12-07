import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BrowsePresenter from "./components/pages/Browse/BrowsePresenter";
import AssetDetailsPresenter from "./components/pages/AssetDetails/AssetDetailsPresenter";
import HomeView from "./components/pages/Home/HomeView";

function App() {
  return (
    <div className="selection:bg-gray-400">
      <Router>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/browse" element={<BrowsePresenter />} />
          <Route path="/assets/:id" element={<AssetDetailsPresenter />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
