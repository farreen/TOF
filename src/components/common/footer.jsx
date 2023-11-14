import React from "react";
import useRedirect from "../../custom-hooks/common/useRedirect";
import shortLogo from "../../assets/images/short-logo-tof.svg";

const Footer = () => {
  const redirectTo = useRedirect();
  const redirectionHandler = (page = "") => redirectTo(`${page}`);
  return (
    <>
      {/* <footer class="bg-white shadow dark:bg-green-500"> */}
      {/* <footer class="bg-white shadow bg-gradient-to-r from-cyan-200 to-green-500"> */}
      <footer class="bg-white shadow ">

        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a
              href="/"
              class="flex items-center mb-4 sm:mb-0"
            >
              <img
                src={shortLogo}
                // src="https://flowbite.com/docs/images/logo.svg"
                class="h-20 mr-3"
                alt="Flowbite Logo"
              />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-green-600">
              Tales of Finance
              </span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              {/* <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">
                  About
                </a>
              </li> */}
              <li>
                <a
                  href="#"
                  class="mr-4 text-green-600 hover:text-black font-bold md:mr-6"
                  onClick={()=>redirectionHandler('privacy-policy')}
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="mr-4 text-green-600 hover:text-black font-bold md:mr-6"
                  onClick={()=>redirectionHandler('terms-conditions')}
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="mr-4 text-green-600 hover:text-black font-bold md:mr-6"
                  onClick={()=>redirectionHandler('contact-us')}
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-black sm:text-center dark:text-black">
            © 2023{" "}
            <a href="/" class="hover:underline" onClick={()=>redirectionHandler('')}>
              Tales of Finance
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
