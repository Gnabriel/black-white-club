import { useEffect, useState } from "react";
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

  useEffect(() => {
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
