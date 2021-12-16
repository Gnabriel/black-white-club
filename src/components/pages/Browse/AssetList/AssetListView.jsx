import AssetListItemView from "./Asset/AssetListItemView";

export const AssetListView = ({
  assets,
  numAssets,
  isLoading,
  handleAssetClick,
}) => {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {isLoading
            ? [...Array(numAssets)].map((e, i) => (
                <div key={"temp-loading-asset-" + i}>
                  {/* <AssetListItemPresenter isLoading={isLoading} /> */}
                  <AssetListItemView
                    handleClick={handleAssetClick}
                    isLoading={isLoading}
                  />
                </div>
              ))
            : assets.map((asset) => (
                <div key={asset.id}>
                  {/* <AssetListItemPresenter asset={asset} isLoading={isLoading} /> */}
                  <AssetListItemView
                    asset={asset}
                    handleClick={handleAssetClick}
                    isLoading={isLoading}
                  />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default AssetListView;
