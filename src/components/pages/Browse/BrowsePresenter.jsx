import { useState } from "react";
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
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <BrowseView
      filters={filters}
      subCategories={subCategories}
      mobileFiltersOpen={mobileFiltersOpen}
      setMobileFiltersOpen={setMobileFiltersOpen}
    />
  );
};

export default BrowsePresenter;
