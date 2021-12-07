import { Fragment, useEffect, useState } from "react";
import AssetSource from "../../../api/assetSource";
import BrowseView from "./BrowseView";
import PaginationView from "./Pagination/PaginationView";

const subCategories = [
  { name: "Subcategory #1", href: "#" },
  { name: "Subcategory #2", href: "#" },
  { name: "Subcategory #3", href: "#" },
  { name: "Subcategory #4", href: "#" },
  { name: "Subcategory #5", href: "#" },
];

const filters = [
  {
    id: "color",
    name: "Status",
    options: [
      { value: "buy-now", label: "Buy Now", checked: false },
      { value: "on-auction", label: "On Auction", checked: false },
      { value: "new", label: "New", checked: true },
      { value: "has-offers", label: "Has Offers", checked: false },
    ],
  },
];

const BrowsePresenter = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [assets, setAssets] = useState(null);
  const [currentOffset, setCurrentOffset] = useState(0);

  const numAssets = 10;

  const getAssetsParams = {
    offset: currentOffset,
    limit: numAssets,
    order_direction: "desc",
    collection: "the-fungible-by-pak",
    order_by: "sale_price",
  };

  const handlePaginationClick = ({ increment }) => {
    let newOffset = null;
    increment
      ? (newOffset = currentOffset + numAssets)
      : (newOffset = currentOffset - numAssets);

    newOffset < 0 ? setCurrentOffset(0) : setCurrentOffset(newOffset);
  };

  // const handlePaginationClick = (paginationOffset) => {
  //   console.log(paginationOffset);
  //   AssetSource.getAssets({
  //     ...getAssetsParams,
  //     offset: paginationOffset,
  //   }).then((data) => {
  //     setAssets(data);
  //   });
  // };

  useEffect(() => {
    setIsLoading(true);
    AssetSource.getAssets(getAssetsParams).then((data) => {
      setAssets(data);
      setIsLoading(false);
    });
  }, [currentOffset]);

  return (
    <Fragment>
      <BrowseView
        filters={filters}
        subCategories={subCategories}
        mobileFiltersOpen={mobileFiltersOpen}
        setMobileFiltersOpen={setMobileFiltersOpen}
        assets={assets}
        numAssets={numAssets}
        isLoading={isLoading}
      />
      <PaginationView
        handleClick={handlePaginationClick}
        currentOffset={currentOffset}
      />
    </Fragment>
  );
};

export default BrowsePresenter;
