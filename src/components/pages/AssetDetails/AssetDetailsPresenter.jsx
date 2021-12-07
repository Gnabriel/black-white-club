import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import AssetSource from "../../../api/assetSource";
import AssetDetailsView from "./AssetDetailsView";

const DetailsPresenter = () => {
  const [assetData, setAssetData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const params = {
    token_ids: [useParams().id],
    collection: "the-fungible-by-pak",
  };

  const currentAsset = useSelector((state) => state.currentAsset);

  useEffect(() => {
    if (currentAsset) {
      setAssetData(currentAsset);
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    AssetSource.getAssets(params).then((data) => {
      if (data[0]) {
        setAssetData(data[0]);
      }
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <AssetDetailsView asset={assetData} />
  );
};

export default DetailsPresenter;
