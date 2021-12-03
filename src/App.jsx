import AssetSource from "./api/assetSource";
import { useEffect } from "react";
import BrowsePresenter from "./components/pages/Browse/BrowsePresenter";

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
    <div className="App">
      <BrowsePresenter />
    </div>
  );
}

export default App;
