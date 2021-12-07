import AssetSource from "../../../../api/assetSource";
import AssetListView from "./AssetListView";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { setCurrentAsset } from "../../../../redux/actions/currentAsset";
import { useDispatch, useSelector, connect } from "react-redux";

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

  const currentAsset = useSelector((state) => state.currentAsset);
  console.log(currentAsset);
  // const dispatch = useDispatch();
  // dispatch(setAssets(100));
  // const currentAsset2 = useSelector((state) => state.currentAsset);
  // console.log(currentAsset2);

  // useEffect(() => {
  //   setIsLoading(true);
  //   AssetSource.getAssets(params).then((data) => {
  //     setAssets(data);
  //     setIsLoading(false);
  //     //console.dir(data);
  //   });
  // }, []);

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
