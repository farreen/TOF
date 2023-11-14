import React from "react";
import TailsOfStartupCard from "../../../components/common/tails-of-startup-card";
import { TOSlistData } from "../../../demo-data/tails-of-startups-data";

const Details = () => {
  let catagoryName = window.location.href.split("/");
  let pathName = catagoryName[catagoryName.length - 1];
  let newPath = pathName.charAt(0).toUpperCase() + pathName.slice(1).toLowerCase();
  console.log("..", newPath);

  let filteredData = TOSlistData.filter((newVal) => {
    return newVal.industry === newPath;
    // console.log("vall",newVnewal.industry)
  });
  console.log("filtered_cards", filteredData);
  return (
    <>
      <div
        className="container mx-auto bg-gradient-to-r from-red-100 to-amber-200 rounded-xl shadow border p-8 m-10"
        data-aos="flip-up"
      >
        <p className="text-3xl text-gray-700 font-bold mb-5 capitalize">{catagoryName[catagoryName.length-1]}</p>
        <p className="text-gray-500 text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto p-8 m-10">
        {filteredData.map((item) => (
          <div className="m-4" data-aos="zoom-in">
            <TailsOfStartupCard item={item}/>
          </div>
        ))}
      </div>
      
    </>
  );
};

export default Details;
