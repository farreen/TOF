import React, { useState, useRef } from "react";
import useRedirect from "../../../custom-hooks/common/useRedirect";
import { blogsListData } from "../../../demo-data/blogs-data";
import { glossaryData } from "../../../demo-data/glosarry-data";
import AlphabeticalNav from "../../../components/common/AlphabeticalNav";
import { isMobile } from 'react-device-detect'
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
  const [isOpen, setIsOpen] = useState(false);
  const redirectTo = useRedirect();
  const redirectionHandler = (category = "") => redirectTo(`blog/${category}`);
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const scrollContainerRef = useRef(null);
  const toggleNav = (name = []) => {
    setIsOpen(!isOpen);
  };

  const scrollToLetter = (letter) => {
    const letterElement = document.getElementById(`letter-${letter}`);
    if (letterElement) {
      letterElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <>
      <div
        className="container mx-auto bg-gradient-to-r from-green-100 to-cyan-200 rounded-xl shadow border p-8 m-10"
        data-aos="flip-up"
      >
        <p className="text-3xl text-gray-700 font-bold mb-5">Glossary</p>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-1 gap-4 mx-auto p-1 m-5 ">

        {
          isMobile ?
            <>
              {
                isOpen ? (
                  <div className="fixed z-20  bottom-0" onClick={toggleNav}>
                    <AlphabeticalNav alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ" scrollToLetter={scrollToLetter} />
                  </div>
                ) : (
                  <div className="fixed z-20 right-2 bottom-0" onClick={toggleNav}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 100 100">
                      <text x="30" y="90" font-family="Arial" font-size="50" fill="black">A</text>
                    </svg>
                  </div>
                )
              }
            </> :
            <>
              <div className="fixed z-20 right-2 bottom-0" onClick={toggleNav}>
                <AlphabeticalNav alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ" scrollToLetter={scrollToLetter} />
              </div>
            </>
        }
        <div ref={scrollContainerRef}>
          {
            glossaryData?.map((glossary, index) => (
              <div data-aos="zoom-in" >
                <h2 key={index} className="text-3xl font-semibold text-gray-900 text-start line-clamp-2 mb-2">
                  #{glossary.letter}
                </h2>
                {glossary?.data?.map((_items, index) => (
                  <div data-aos="zoom-in" className="mt-4">
                    <h3 className="text-xl font-semibold text-gray-600 text-start line-clamp-2" id={`letter-${_items.name[0]}`}>
                      {_items.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 text-start">
                      {_items.description}
                    </p>
                  </div>
                ))}
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default Listing;
