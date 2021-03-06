import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, FilterIcon } from "@heroicons/react/solid";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const SortView = ({ setMobileFiltersOpen }) => {
  return (
    <div className="flex items-center">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-darker hover:text-gray-dark">
            Sort
            <ChevronDownIcon
              className="flex-shrink-0 -mr-1 ml-1 h-5 w-5"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-gray-light ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {sortOptions.map((option) => (
                <Menu.Item key={option.name}>
                  {({ active }) => (
                    <a
                      href={option.href}
                      className={classNames(
                        option.current
                          ? "font-medium text-black"
                          : "text-gray-darker",
                        active ? "bg-gray-lighter" : "",
                        "block px-4 py-2 text-sm hover:bg-gray-lighter"
                      )}
                    >
                      {option.name}
                    </a>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>

      <button
        type="button"
        className="p-2 -m-2 ml-4 sm:ml-6 text-gray-darker hover:text-gray-dark lg:hidden"
        onClick={() => setMobileFiltersOpen(true)}
      >
        <FilterIcon className="w-5 h-5" aria-hidden="true" />
      </button>
    </div>
  );
};

export default SortView;
