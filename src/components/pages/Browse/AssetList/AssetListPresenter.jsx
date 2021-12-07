import AssetSource from "../../../../api/assetSource";
import AssetListView from "./AssetListView";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import setCurrentAsset from "../../../../redux/actions/currentAsset";
import { useDispatch, useSelector } from "react-redux";
import PaginationView from "../Pagination/PaginationView";

const AssetListPresenter = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [assets, setAssets] = useState(null);
  let navigate = useNavigate();

  const params = {
    offset: 0,
    limit: 8,
    order_direction: "desc",
    collection: "the-fungible-by-pak",
    order_by: "sale_price",
  };

  const currentAsset = useSelector((state) => state.currentAsset);
  const reduxDispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    AssetSource.getAssets(params).then((data) => {
      setAssets(data);
      setIsLoading(false);

      reduxDispatch(setCurrentAsset(data[0]));
    });
  }, []);

  useEffect(() => {
    console.log(currentAsset);
  }, [currentAsset]);

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
