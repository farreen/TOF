import React from "react";
import ContentCard from "./content-card";

const Draft = ({ type,tabHandler }) => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
        <ContentCard type={type} tabHandler={tabHandler}/>
      ))}
    </>
  );
};

export default Draft;
