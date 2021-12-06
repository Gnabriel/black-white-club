import AssetSource from "../../../../api/assetSource";
import AssetListView from "./AssetListView";
import { useState, useEffect } from "react";

export const AssetListPresenter = () => {
  const [isLoading, setIsLoading] = useState(false);
  const assets = AssetSource.getAssets2();
  const assets2 = Array.from(assets);
  console.dir(assets);
  console.dir(assets2);

  return isLoading ? <div>Loading...</div> : <AssetListView assets={assets2} />;
};

export default AssetListPresenter;
