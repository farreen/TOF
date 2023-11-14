import React from "react";
import PreviewCatagoryCard from "./preview-catagory-card";

const Draft = ({ type, tabHandler }) => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
        <div className="flex justify-center my-12" data-aos="zoom-in">
          <PreviewCatagoryCard />
        </div>
      ))}
    </>
  );
};

export default Draft;
