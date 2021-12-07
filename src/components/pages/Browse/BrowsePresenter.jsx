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

  const handlePaginationClick = (offset) => {
    console.log(offset);
    const params = {
      offset: offset,
      limit: 8,
      order_direction: "desc",
      collection: "the-fungible-by-pak",
      order_by: "sale_price",
    };
    AssetSource.getAssets(params).then((data) => {
      setAssets(data);
      console.dir(data);
    });
  };

  return (
    <Fragment>
      <BrowseView
        filters={filters}
        subCategories={subCategories}
        mobileFiltersOpen={mobileFiltersOpen}
        setMobileFiltersOpen={setMobileFiltersOpen}
      />
      <PaginationView handleClick={handlePaginationClick} />
    </Fragment>
  );
};

export default BrowsePresenter;
