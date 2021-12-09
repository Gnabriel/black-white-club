import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  MenuIcon,
  HomeIcon,
  SpeakerphoneIcon,
  DocumentIcon,
  XIcon,
} from "@heroicons/react/outline";
import {
  ChevronDownIcon,
  DocumentIcon as DocumentIconSolid,
  CollectionIcon,
} from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const browsePages = [
  {
    name: "The Black",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    linkTo: "/browse",
    icon: DocumentIconSolid,
  },
  {
    name: "The White",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    linkTo: "/browse",
    icon: DocumentIcon,
  },
  {
    name: "Browse All",
    description: "Browse the whole Black White Club collection.",
    linkTo: "/browse",
    icon: CollectionIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavbarView = () => {
  return (
    <Popover className="relative bg-white">
      {/* <div className="mx-auto px-4 sm:px-6 border-b-2 border-gray-lighter"> */}
      <div className="mx-auto px-4 sm:px-6">
        <div className="py-2 flex justify-between items-center  md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link className="-mb-2 font-display text-2xl leading-none" to="/">
              BWC
            </Link>
          </div>

          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-darker hover:text-gray-dark hover:bg-gray-lighter focus:outline-none focus:ring-none">
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <Link
              className="py-2 px-4 text-base rounded-md font-medium text-gray-darker hover:text-black hover:bg-gray-lighter"
              to="/"
            >
              Home
            </Link>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-black" : "text-gray-darker",
                      "py-2 px-4 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-black hover:bg-gray-lighter focus:outline-none focus:ring-none"
                    )}
                  >
                    <span>Browse</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-black" : "text-gray-darker",
                        "ml-2 h-5 w-5 group-hover:text-black"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {browsePages.map((item) => (
                            <Link
                              key={item.name}
                              to={item.linkTo}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-lighter"
                            >
                              <item.icon
                                className="flex-shrink-0 h-6 w-6 text-black"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-darker">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <button className="py-2 px-4 text-base rounded-md font-medium text-gray-darker hover:text-black hover:bg-gray-lighter">
              Marketing
            </button>
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <button className="py-2 px-4 text-base rounded-md font-medium text-gray-darker hover:text-black hover:bg-gray-lighter whitespace-nowrap">
              Sign in
            </button>
            <button className="ml-8 py-2 px-4 whitespace-nowrap inline-flex items-center justify-center border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-black hover:bg-gray-darker">
              Sign up
            </button>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <button className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    <HomeIcon
                      className="flex-shrink-0 h-6 w-6 text-indigo-600"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Home
                    </span>
                  </button>
                  {browsePages.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <item.icon
                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </a>
                  ))}
                  <button className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    <SpeakerphoneIcon
                      className="flex-shrink-0 h-6 w-6 text-indigo-600"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Marketing
                    </span>
                  </button>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div>
                <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                  Sign up
                </button>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Already signed up?{" "}
                  <button className="text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </button>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default NavbarView;
