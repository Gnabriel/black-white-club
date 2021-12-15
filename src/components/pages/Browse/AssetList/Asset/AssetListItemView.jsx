const AssetListItemView = ({ asset, handleClick, isLoading }) => {
  return (
    <div className="group">
      <div
        className={`w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8
        ${isLoading ? "bg-transparent" : "bg-gray-light"}`}
      >
        <div className="h-60">
          {isLoading ? (
            <div className="w-full h-full bg-gray animate-pulse"></div>
          ) : (
            <img
              src={asset.imageUrl}
              alt={asset.name}
              className="w-full h-full object-center object-cover cursor-pointer group-hover:opacity-75"
              onClick={() => handleClick(asset)}
            />
          )}
        </div>
      </div>
      {isLoading ? (
        <div className="animate-pulse">
          <div className="mt-4 w-36 h-5 bg-gray rounded-sm"></div>
          <div className="mt-1 w-12 h-5 bg-gray rounded-sm"></div>
        </div>
      ) : (
        <div>
          <h3
            className="mt-4 text-sm text-gray-dark cursor-pointer"
            onClick={() => handleClick(asset)}
          >
            {asset.name}
          </h3>
          <p className="mt-1 text-lg font-medium text-gray-darker">
            {asset.ethPrice
              ? Math.round(asset.ethPrice * 1000) / 1000 + " ETH"
              : "Not for sale"}
          </p>
        </div>
      )}
    </div>
  );
};

export default AssetListItemView;
