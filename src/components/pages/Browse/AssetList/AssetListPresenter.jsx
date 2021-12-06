import AssetSource from "../../../../api/assetSource";
import AssetListView from "./AssetListView";
import { useState, useEffect } from "react";

export const AssetListPresenter = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [assets, setAssets] = useState(null);
  const params = {
    offset: 0,
    limit: 5,
    order_direction: "desc",
    collection: "the-fungible-by-pak",
    order_by: "sale_price",
  };
  useEffect(() => {
    setIsLoading(true);
    AssetSource.getAssets(params).then((data) => {
      setAssets(data);
      setIsLoading(false);
    });
  }, []);

  console.dir(assets);

  return isLoading ? <div>Loading...</div> : <AssetListView assets={assets} />;
};

export default AssetListPresenter;
