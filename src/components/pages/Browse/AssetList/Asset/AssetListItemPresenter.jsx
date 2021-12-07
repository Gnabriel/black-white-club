import AssetListItemView from "./AssetListItemView";
import { useNavigate } from "react-router";
import setCurrentAsset from "../../../../../redux/actions/currentAsset";
import { useDispatch } from "react-redux";

const AssetListItemPresenter = ({ asset, isLoading }) => {
  let navigate = useNavigate();
  const reduxDispatch = useDispatch();

  const handleAssetClick = (asset) => {
    reduxDispatch(setCurrentAsset(asset));
    navigate("/assets/" + asset.id);
  };

  return (
    <AssetListItemView
      asset={asset}
      handleClick={handleAssetClick}
      isLoading={isLoading}
    />
  );
};

export default AssetListItemPresenter;
