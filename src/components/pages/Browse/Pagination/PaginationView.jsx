import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const PaginationView = ({ handleClick, currentPage }) => {
  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden">
        <button className="relative inline-flex items-center px-4 py-2 border border-gray-light text-sm font-medium rounded-md text-gray-dark bg-white hover:bg-gray-lighter">
          Previous
        </button>
        <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-light text-sm font-medium rounded-md text-gray-dark bg-white hover:bg-gray-lighter">
          Next
        </button>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-center">
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <button
              onClick={() => handleClick({ increment: false })}
              disabled={currentPage <= 0}
              className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-light bg-white text-sm font-medium
              ${
                currentPage <= 0
                  ? "bg-gray-lighter text-gray-light cursor-default"
                  : "text-gray-dark hover:bg-gray-lighter"
              }`}
            >
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <div className="bg-white border-gray-light text-gray-dark hover:bg-gray-lighter relative inline-flex items-center px-4 py-2 border text-sm font-medium">
              {currentPage}
            </div>
            <button
              onClick={() => handleClick({ increment: true })}
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-light bg-white text-sm font-medium text-gray-dark hover:bg-gray-lighter"
            >
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default PaginationView;
