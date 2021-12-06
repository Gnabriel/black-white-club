import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BrowsePresenter from "./components/pages/Browse/BrowsePresenter";
import HomeView from "./components/pages/Home/HomeView";

function App() {
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
