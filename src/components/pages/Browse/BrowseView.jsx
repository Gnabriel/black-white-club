import NavbarView from "../../common/Navbar/NavbarView";
import AssetListView from "./AssetList/AssetListView";
import SortView from "./Sort/SortView";
import FilterView from "./Filter/FilterView";
import FilterMobileView from "./Filter/FilterMobileView";
import PaginationView from "./Pagination/PaginationView";

export const BrowseView = ({
  filters,
  subCategories,
  mobileFiltersOpen,
  setMobileFiltersOpen,
  assets,
  numAssets,
  isLoading,
  currentPage,
  handlePaginationClick,
}) => {
  return (
    <div className="bg-white">
      <NavbarView />
      <div>
        {/* Mobile filter dialog */}
        <FilterMobileView
          mobileFiltersOpen={mobileFiltersOpen}
          setMobileFiltersOpen={setMobileFiltersOpen}
        >
          <FilterView filters={filters} subCategories={subCategories} />
        </FilterMobileView>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-lighter">
            <h1 className="text-4xl font-extrabold tracking-tight text-black">
              The collection
            </h1>
            <SortView setMobileFiltersOpen={setMobileFiltersOpen} />
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
              {/* Filters */}
              <div className="hidden lg:block">
                <FilterView filters={filters} subCategories={subCategories} />
              </div>

              {/* Product grid */}
              <div className="lg:col-span-3">
                <AssetListView
                  assets={assets}
                  numAssets={numAssets}
                  isLoading={isLoading}
                />
                <PaginationView
                  handleClick={handlePaginationClick}
                  currentPage={currentPage}
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default BrowseView;
