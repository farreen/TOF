import React, { useEffect, useState } from "react";
import useRedirect from "../../custom-hooks/common/useRedirect";
// import { HiMenu } from "react-icons/hi";
// import { RxCross2 } from "react-icons/rx";
import shortLogo from "../../assets/images/short-logo-tof.svg";

const navItems = [
  {
    id: 0,
    name: "home",
    path: "",
  },
  {
    id: 1,
    name: "Tales of Startups",
    path: "tales-of-startups",
  },
  {
    id: 2,
    name: "Infographics",
    path: "infographics",
  },
  {
    id: 3,
    name: "Glossary",
    path: "glossary",
  },
  {
    id: 4,
    name: "Blogs",
    path: "blogs",
  },
];

const NavBar = ({ toggleDarkMode, darkMode }) => {
  const redirectTo = useRedirect();
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const redirectionHandler = (page = "") => redirectTo(`${page}`);

  // Toggle the navbar
  const toggleNav = (name = []) => {
    setIsOpen(!isOpen);
    setActiveIndex(name === activeIndex ? null : name);
  };

  const navbarHandler = (page = "") => {
    redirectionHandler(page);
    setIsOpen(false);
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
// bg-gradient-to-r from-green-50 to-cyan-200
  return (
    <>
      <nav
        className={`bg-green-100 w-screen border-gray-200 mb-4 ${
          scrollPosition > 0
            // ? "fixed w-full z-20 top-0 left-0 dark:bg-green-500 opacity-100"
            ? "fixed w-full z-20 top-0 left-0 bg-gradient-to-r from-white to-green-500 opacity-100"
            : "bg-transparent"
        } transition-color duration-1000 ease-in`}
      >
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center">
            <img
              src={shortLogo}
              // src="https://flowbite.com/docs/images/logo.svg"
              className="h-12 mr-3"
              alt="Flowbite Logo"
            />
            {/* <span
              className={`self-center text-2xl font-semibold whitespace-nowrap ${
                scrollPosition > 0 ? "text-white" : "text-black"
              }`}
            >
              Tales of Finance
            </span> */}
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={toggleNav}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="50px"
                height="50px"
              >
                <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="50px"
                height="50px"
              >
                <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z" />
              </svg>
            )}
          </button>
          <div
            className={`${isOpen ? "" : "hidden"} w-full md:block md:w-auto `}
            id="navbar-default"
          >
            <ul
              className={`flex flex-col rounded-lg ${
                scrollPosition > 0 ? "bg-emerald-700" : "bg-emerald-100"
              } mt-2 p-2 md:flex-row md:space-x-8 md:bg-transparent md:border-0 transition-color duration-1000 ease-in`}
            >
              {navItems.map((_item) => (
                <li
                  key={_item}
                  className="flex justify-center"
                  // onClick={() => redirectionHandler(_item?.path)}
                  onClick={() => navbarHandler(_item?.path)}
                >
                  <a
                    className={`uppercase cursor-pointer ${
                      scrollPosition > 0
                        ? "text-white hover:text-black "
                        : "text-black hover:text-green-500"
                    }  font-bold transition-color duration-1000 md:duration-100 ease-in`}
                    aria-current="page"
                  >
                    {_item?.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
