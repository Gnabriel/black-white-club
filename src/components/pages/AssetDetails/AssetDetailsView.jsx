import { Link } from "react-router-dom";

const AssetDetailsView = ({ asset }) => {
  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
            <li>
              <div className="flex items-center">
                <Link
                  to="/browse"
                  className="mr-2 text-sm font-medium text-gray-darker"
                >
                  Browse
                </Link>
                <svg
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-4 h-5 text-gray"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>

            <li className="text-sm">
              <span aria-current="page" className="font-medium text-gray">
                {asset.name}
              </span>
            </li>
          </ol>
        </nav>

        {/* Media */}
        <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
            <video autoPlay muted loop>
              <source src={asset.animationUrl} type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Product info */}
        <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-lighter lg:pr-8">
            <h1 className="text-2xl font-extrabold tracking-tight text-black sm:text-3xl">
              {asset.name}
            </h1>
          </div>

          {/* Price & owner */}
          <div className="mt-4 lg:mt-0 lg:row-span-3">
            <p className="text-3xl text-black">
              {asset.usdPrice ? "$" + asset.usdPrice : "Not for sale"}
            </p>

            <div className="mt-6">
              <p className="text-sm font-medium">
                Owned by{" "}
                <span className="text-gray-dark font-bold">{asset.owner}</span>
              </p>
            </div>

            <a
              className="mt-10 w-full bg-black border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-darker focus:outline-none focus:ring-transparent"
              href={asset.openseaLink}
              target="_blank"
              rel="noreferrer"
            >
              View on OpenSea
            </a>
          </div>

          <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-lighter lg:pr-8">
            {/* Description and details */}
            <div>
              <div className="space-y-6">
                <p className="text-base text-black">{asset.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-black">Highlights</h3>

              <div className="mt-4">
                <ul className="pl-4 list-disc text-sm space-y-2">
                  {["Lorem", "Ipsum", "Dolor", "Sit", "Amet"].map(
                    (highlight) => (
                      <li key={highlight} className="text-gray">
                        <span className="text-gray-darker">{highlight}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-black">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-darker">
                  Number of sales: {asset.numSales}
                </p>
                <p className="text-sm text-gray-darker">
                  Last sale:{" "}
                  {asset.lastSale.date.toDateString() +
                    " " +
                    asset.lastSale.date.toTimeString()}
                </p>
                <p className="text-sm text-gray-darker">
                  Last sale price (USD): {asset.lastSale.usdPrice}
                </p>
                <p className="text-sm text-gray-darker">
                  Last sale price (ETH): {asset.lastSale.ethPrice}
                </p>
                <p className="text-sm text-gray-darker">
                  Top bid: {asset.topBid || "none"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetDetailsView;
