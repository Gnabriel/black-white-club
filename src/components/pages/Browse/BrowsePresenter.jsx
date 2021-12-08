import { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import AssetSource from "../../../api/assetSource";
import BrowseView from "./BrowseView";

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
  let navigate = useNavigate();
  const urlParams = useParams();

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [assets, setAssets] = useState(null);
  const [currentPage, setCurrentPage] = useState(
    urlParams.page ? parseInt(urlParams.page) : 0
  );

  const numAssets = 24;

  const handlePaginationClick = ({ increment }) => {
    const newPage = increment
      ? parseInt(currentPage + 1)
      : parseInt(currentPage - 1);
    setCurrentPage(newPage);
    navigate(newPage === 0 ? "/browse" : "/browse/" + newPage);
  };

  useEffect(() => {
    const getAssetsParams = {
      offset: currentPage * numAssets,
      limit: numAssets,
      order_direction: "desc",
      collection: "the-fungible-by-pak",
      order_by: "sale_price",
    };

    setIsLoading(true);
    AssetSource.getAssets(getAssetsParams).then((data) => {
      setAssets(data);
      setIsLoading(false);
    });
  }, [currentPage]);

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
        handlePaginationClick={handlePaginationClick}
        currentPage={currentPage}
      />
    </Fragment>
  );
};

export default BrowsePresenter;
