import React, { useMemo, useState } from "react";
import CatagoryCards from "../common/catagory-card";
import { top4TOS } from "../../demo-data/home-data";
import useRedirect from "../../custom-hooks/common/useRedirect";

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
const TalesOfStartups = () => {
  const redirectTo = useRedirect();
  const redirectionHandler = (category = "") =>
    redirectTo(`tales-of-startups/${category}`);
  return (
    <div className="rounded-lg m-2 md:m-8 p-4 bg-gray-100 hover:shadow-grey-600 hover:shadow-lg">
      <div className="flex justify-between">
        <h1 className="text-3xl text-gray-700 font-semibold">
          Tales of Startup
        </h1>
        <p
          className="flex justify-center content-center text-lg text-gray-700 font-semibold hover:text-green-500 fill-gray-700 hover:fill-green-500"
          onClick={() => redirectionHandler("")}
        >
          <span className="cursor-pointer">View more</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
          </svg>
        </p>
      </div>
      <p className="flex font-serif text-black-500 text-lg">
        Here are the lists of most exciting startups in each of the industry
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 p-4 cardContainer">
        {top4TOS.map((_) => (
          <CatagoryCards _={_} />
        ))}
      </div>
    </div>
  );
};

export default TalesOfStartups;
