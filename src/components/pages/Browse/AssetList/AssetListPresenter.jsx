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

  const params = {
    offset: 0,
    limit: 8,
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

  return <AssetListView assets={assets} numAssets={20} isLoading={isLoading} />;
};

export default AssetListPresenter;
