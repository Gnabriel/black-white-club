import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import AssetSource from "../../../api/assetSource";
import AssetDetailsView from "./AssetDetailsView";

const DetailsPresenter = () => {
  const [assetData, setAssetData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const currentId = useParams().id;

  const currentAsset = useSelector((state) => state.currentAsset);

  useEffect(() => {
    const params = {
      token_ids: [currentId],
      collection: "the-fungible-by-pak",
    };

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
  }, [currentId, currentAsset]);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <AssetDetailsView asset={assetData} />
  );
};

export default DetailsPresenter;
