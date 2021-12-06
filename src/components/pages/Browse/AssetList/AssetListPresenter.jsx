import AssetSource from "../../../../api/assetSource";
import AssetListView from "./AssetListView";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

export const AssetListPresenter = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [assets, setAssets] = useState(null);
  let navigate = useNavigate();

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
      console.dir(data);
    });
  }, []);

  const handleAssetClick = (assetId) => {
    navigate("/assets/" + assetId);
  };

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <AssetListView assets={assets} handleClick={handleAssetClick} />
  );
};

export default AssetListPresenter;
