import React from "react";
import useRedirect from "../../../custom-hooks/common/useRedirect";
import slide1 from "../../../assets/images/contact-us/contactUsImg.jpeg";
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
  const redirectionHandler = (category = "") => redirectTo(`blog/${category}`);
  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-1 gap-4 mx-auto p-4 m-10 ">
        <div
          className={`flex relative overflow-hidden rounded-lg bg-white m-2 mx-auto`}
        >
          <img
            src={slide1}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </>
  );
};

export default Listing;
