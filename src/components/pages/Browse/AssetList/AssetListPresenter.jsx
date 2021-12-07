import AssetSource from "../../../../api/assetSource";
import AssetListView from "./AssetListView";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import setCurrentAsset from "../../../../redux/actions/currentAsset";
import { useDispatch } from "react-redux";

const AssetListPresenter = () => {
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

  const reduxDispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    AssetSource.getAssets(params).then((data) => {
      setAssets(data);
      setIsLoading(false);
    });
  }, []);

  const handleAssetClick = (asset) => {
    reduxDispatch(setCurrentAsset(asset));
    navigate("/assets/" + asset.id);
  };

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <AssetListView assets={assets} handleClick={handleAssetClick} />
  );
};

export default AssetListPresenter;
