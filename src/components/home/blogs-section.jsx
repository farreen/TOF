import React, { useMemo, useState } from "react";
import CatagoryCards from "../common/catagory-card";
import { top4TOS } from "../../demo-data/home-data";
import useRedirect from "../../custom-hooks/common/useRedirect";
import { blogsListData } from "../../demo-data/blogs-data";

const colorsArray = [
  "Red",
  "Orange",
  "Amber",
  "Yellow",
  "Lime",
  "Green",
  "Emerald",
  "Teal",
  "Cyan",
  "Sky",
  "Blue",
  "Indigo",
  "Violet",
  "Purple",
  "Fuchsia",
  "Pink",
  "Rose ",
];
const BlogsSection = () => {
  const redirectTo = useRedirect();
  const redirectionHandler = (category = "") => redirectTo(`blogs/${category}`);
  return (
    <div className="rounded-lg m-2 md:m-8 p-4 bg-gray-100 hover:shadow-grey-600 hover:shadow-lg ">
      <div className="flex justify-between">
        <h1 className="text-3xl text-gray-700 font-semibold">Blogs</h1>
        <p
          className="flex justify-center content-center text-lg text-gray-700 font-semibold hover:text-green-500 fill-gray-700 hover:fill-green-500"
          onClick={() => redirectionHandler("")}
        >
          <span className="cursor-pointer">View more</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24">
            <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
          </svg>
        </p>
      </div>
      <p className="flex text-black-500 font-serif text-lg">
        Here are the lists of most exciting blogs in each of the industry
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 p-4 gap-4 cursor-pointer ">
        {blogsListData?.slice(0,3).map((callout, index) => (
          <div
            // data-aos="zoom-in"
            className="mt-4"
            onClick={() => redirectionHandler(callout.href)}
          >
            <div
              key={callout.name}
              className="group relative flex flex-col gap-4 justify-center hover:shadow-green-600 hover:shadow-xl rounded-lg "
            >
              <div
                className={`relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64`}
              >
                <img
                  src={callout.imageSrc}
                  alt={callout.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="w-full px-2 mb-2">
                <h3 className="text-base font-semibold text-black-900 text-start line-clamp-1">
                  {callout.name}
                </h3>
                <p className="mt-4 text-md font-serif text-grey-900 text-start line-clamp-2">
                  {callout.description1}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsSection;
