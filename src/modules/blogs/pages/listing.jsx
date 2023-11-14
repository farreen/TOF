import React from "react";
import useRedirect from "../../../custom-hooks/common/useRedirect";
import { blogsListData } from "../../../demo-data/blogs-data";

const colorsArray = [
  "bg-red-200",
  "bg-orange-200",
  "bg-amber-200",
  "bg-yellow-200",
  "bg-lime-200",
  "bg-green-200",
  "bg-emerald-200",
  "bg-teal-200",
  "bg-cyan-200",
  "bg-sky-200",
  "bg-blue-200",
  "bg-indigo-200",
  "bg-violet-200",
  "bg-purple-200",
  "bg-fuchsia-200",
  "bg-pink-200",
  "bg-rose-200",
];

const Listing = () => {
  const redirectTo = useRedirect();
  const redirectionHandler = (category = "") =>
    redirectTo(`blogs/${category}`);
  return (
    <>
      <div
        className="container mx-auto bg-gradient-to-r from-green-100 to-cyan-200 rounded-xl shadow border p-8 m-10"
        data-aos="flip-up"
      >
        <p className="text-3xl text-gray-700 font-bold mb-5">
          Blogs
        </p>
        {/* <p className="text-gray-500 text-lg">
          Welcome to our comprehensive database of startups, both in India and
          on a global scale. Dive into the dynamic world of entrepreneurship and
          innovation with our curated collection of startup profiles. From
          founders and year of incorporation to the number of employees, funding
          rounds, and headquarters, we've gathered a wealth of information to
          satisfy your curiosity about the thriving startup ecosystem. Whether
          you're an aspiring entrepreneur, an investor, or simply someone eager
          to gain insights into the ever-evolving landscape of startups, our
          database is your one-stop resource for in-depth knowledge and
          exploration.
        </p> */}
      </div>
      <div className="container grid grid-cols-1 gap-4 mx-auto p-8 m-10 cursor-pointer">
        {blogsListData?.map((callout, index) => (
          <div data-aos="zoom-in" className="mt-4" onClick={() => redirectionHandler(callout.href)}>
            <div
              key={callout.name}
              className="group relative flex gap-4 justify-center"
            >
              <div
                className={`${index} relative h-80 w-1/2 overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64 ${index % 2 == 0 ? "order-last" : ""
                  }`}
              >
                <img
                  src={callout.imageSrc}
                  alt={callout.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="w-1/2">
                <h3 className="text-base font-semibold text-lg text-black-900 font-serif text-start line-clamp-2">
                  {callout.name}
                </h3>
                <div className="flex mt-6">
                  <div class="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                    <img src={callout.imageSrc} alt="Your Name" class="w-6 h-6 rounded-full" />
                    {/* <p className="mt-2 text-sm text-gray-500 text-start">
                      15/1/2022 by admin
                    </p> */}
                  </div>
                  <div className="grid grid-cols-2">
                    <a className="text-sm ml-3 mt-1 text-black"> Nitin Kumar</a>
                    <span className="  text-gray-500 mt-1 text-sm">12-may</span>
                  </div>
                </div>

                <p className="mt-6 text-lg text-black-500 font-serif text-start line-clamp-6">
                  {callout.description1}
                </p>

              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Listing;
