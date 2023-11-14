import React, { useState } from "react";
import useRedirect from "../../../custom-hooks/common/useRedirect";
import { blogsListData } from "../../../demo-data/blogs-data";
import { glossaryData } from "../../../demo-data/glosarry-data";
import AlphabeticalNav from "../../../components/common/AlphabeticalNav";

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
  const [data, setData] = useState(glossaryData)
  const [filteredData, setFilterdData] = useState([]);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [unAvailableData, setUnavailableData] = useState("")
  const redirectTo = useRedirect();
  const redirectionHandler = (category = "") => redirectTo(`blog/${category}`);
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const handleLetterClick = (letter) => {
    console.log("dadada", data)
    // if no letter selected set all default data
    if (!letter) {
      setFilterdData([])
      setIsFilterActive(false);
    } else {
      // Implement the logic to handle the click on a specific letter
      console.log(`Clicked on letter: ${letter}`);
      let filteredData = data.filter((item) => {
        return item.letter === letter
      })
      if (filteredData.length === 0) {
        setUnavailableData(`No data available for ${letter}.`);
        setFilterdData([])
      } else {
        console.log("filterd", filteredData)
        setFilterdData(filteredData)
        setIsFilterActive(true);
        setUnavailableData("");
      }
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
      <span>{unAvailableData}</span>
      <div className="container grid grid-cols-1 md:grid-cols-1 gap-4 mx-auto p-1 m-5 ">
        <div className="fixed z-20 top-84 right-2">
          <AlphabeticalNav letters={alphabet} onLetterClick={handleLetterClick} />
        </div>
        {isFilterActive ? filteredData?.map((glossary, index) => (
          <div data-aos="zoom-in">
            <h2 className="text-3xl font-semibold text-gray-900 text-start line-clamp-2 mb-2">
              #{glossary.letter}
            </h2>
            {glossary?.data?.map((_items, index) => (
              <div data-aos="zoom-in" className="mt-4">
                <h3 className="text-xl font-semibold text-gray-600 text-start line-clamp-2">
                  {_items.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500 text-start">
                  {_items.description}
                </p>
              </div>
            ))}
          </div>
        )) :
          (
            data?.map((glossary, index) => (
              <div data-aos="zoom-in">
                <h2 className="text-3xl font-semibold text-gray-900 text-start line-clamp-2 mb-2">
                  #{glossary.letter}
                </h2>
                {glossary?.data?.map((_items, index) => (
                  <div data-aos="zoom-in" className="mt-4">
                    <h3 className="text-xl font-semibold text-gray-600 text-start line-clamp-2">
                      {_items.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 text-start">
                      {_items.description}
                    </p>
                  </div>
                ))}
              </div>
            ))
          )
        }
      </div>
    </>
  );
};

export default Listing;
