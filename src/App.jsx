import AssetSource from "./api/assetSource";
import { useEffect } from "react";
import BrowsePresenter from "./components/pages/Browse/BrowsePresenter";

function App() {
  useEffect(() => {
    const params = {
      offset: 1,
      limit: 10,
      order_direction: "desc",
      collection: "the-fungible-by-pak",
    };
    AssetSource.getAssets1(params);
    AssetSource.getAssets2(params);
    AssetSource.getCollection("the-fungible-by-pak");
  }, []);
  return (
    <div className="App">
      <BrowsePresenter />
    </div>
  );
}

export default App;
