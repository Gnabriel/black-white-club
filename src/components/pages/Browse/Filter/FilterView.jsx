import { Disclosure } from "@headlessui/react";
import { MinusSmIcon, PlusSmIcon } from "@heroicons/react/solid";

const FilterView = ({ filters, subCategories }) => {
  return (
    <form className="mt-4 border-t border-gray-200 lg:mt-0 lg: border-none">
      <h3 className="sr-only">Categories</h3>
      <ul className="px-2 py-3 lg:py-0 lg:pt-0 lg:pb-6 lg:space-y-4 text-sm lg:text-base font-medium text-gray-900 lg:border-b lg:border-gray-200">
        {subCategories.map((category) => (
          <li key={category.name}>
            <a href={category.href} className="block px-2 py-3 lg:p-0">
              {category.name}
            </a>
          </li>
        ))}
      </ul>

      {filters.map((section) => (
        <Disclosure
          as="div"
          key={section.id}
          className="px-4 py-6 lg:px-0 border-t lg:border-t-0 lg:border-b border-gray-200"
        >
          {({ open }) => (
            <>
              <h3 className="-mx-2 -my-3 lg:mx-0 flow-root">
                <Disclosure.Button className="px-2 py-3 lg:px-0 bg-white w-full flex items-center justify-between lg:text-sm text-gray-400 hover:text-gray-500">
                  <span className="font-medium text-gray-900">
                    {section.name}
                  </span>
                  <span className="ml-6 flex items-center">
                    {open ? (
                      <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                    )}
                  </span>
                </Disclosure.Button>
              </h3>
              <Disclosure.Panel className="pt-6">
                <div className="space-y-6 lg:space-y-4">
                  {section.options.map((option, optionIdx) => (
                    <div key={option.value} className="flex items-center">
                      <input
                        id={`filter-${section.id}-${optionIdx}`}
                        name={`${section.id}[]`}
                        defaultValue={option.value}
                        type="checkbox"
                        defaultChecked={option.checked}
                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor={`filter-${section.id}-${optionIdx}`}
                        className="ml-3 min-w-0 lg:min-w-min flex-1 lg:flex-none lg:text-sm text-gray-500 lg:text-gray-600"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </form>
  );
};

export default FilterView;
