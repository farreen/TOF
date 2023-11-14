import React from "react";
import useRedirect from "../../../custom-hooks/common/useRedirect";
import { top4TOS } from "../../../demo-data/home-data";
import CatagoryCards from "../../../components/common/catagory-card";

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
    redirectTo(`tales-of-startups/${category}`);
  return (
    <>
      <div
        className="container mx-auto bg-gradient-to-r from-green-100 to-cyan-200 rounded-xl shadow border p-8 m-10"
        data-aos="flip-up"
      >
        <p className="text-3xl text-gray-700 font-bold mb-5">
          Tales of Startups
        </p>
        <p className="text-gray-500 text-lg">
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
        </p>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto p-8 m-10">
        {top4TOS.map((_) => (
          <div data-aos="zoom-in">
            <CatagoryCards _={_} />
          </div>
        ))}
        {top4TOS.map((_) => (
          <div data-aos="zoom-in">
            <CatagoryCards _={_} />
          </div>
        ))}
        {top4TOS.map((_) => (
          <div data-aos="zoom-in">
            <CatagoryCards _={_} />
          </div>
        ))}
        {top4TOS.map((_) => (
          <div data-aos="zoom-in">
            <CatagoryCards _={_} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Listing;
