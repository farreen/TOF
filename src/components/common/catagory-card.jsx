import React from "react";
import useRedirect from "../../custom-hooks/common/useRedirect";
import IndianFlag from "./svg-icons/indian-flag";
import Earth from "./svg-icons/earth";
import CurvedUpArrow from "./svg-icons/curved-up-arrow";
import FintechIcon from "./svg-icons/fintech-icon";

const CatagoryCards = ({ _ }) => {
  const redirectTo = useRedirect();
  const redirectionHandler = (category = "") =>
    redirectTo(`tales-of-startups/${category}`);
  return (
    <div
      className={`flex flex-col items-start rounded-lg m-2 p-4 bg-gray-200 hover:shadow-green-600 hover:shadow-xl  cardItem cursor-pointer`}
      onClick={() =>
        redirectionHandler(_?.industryName.toLocaleLowerCase() ?? "")
      }
    >
      <div className="flex justify-between items-start w-full">
        <div className=" grow flex flex-col gap-4">
          <div className="flex justify-between w-full">
            <h3 className="text-xl text-gray-700 font-semibold">
              {_.industryName ?? ""}
            </h3>
            {/* <span
              onClick={() =>
                redirectionHandler(_?.industryName.toLocaleLowerCase() ?? "")
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="fill-gray-700 hover:fill-green-500"
              >
                <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z" />
                <path d="M9.293 8.707 12.586 12l-3.293 3.293 1.414 1.414L15.414 12l-4.707-4.707-1.414 1.414z" />
              </svg>
            </span> */}
          </div>
          <div className="flex justify-start items-start">
            <p className="grow flex justify-start items-center gap-2 text-gray-500 text-lg">
              <CurvedUpArrow height={24} width={24} />{" "}
              <span>{_?.cagr}% CAGR</span>
            </p>
            <p className="grow flex justify-start items-center gap-2 text-gray-500 text-lg">
              <IndianFlag height={24} width={24} />{" "}
              <span>{_?.size?.india} Billon</span>
            </p>
            <p className="grow flex justify-start items-center gap-2 text-gray-500 text-lg">
              <Earth height={24} width={24} />
              <span> {_?.size?.global} Billon</span>
            </p>
          </div>
          <div className="flex flex-wrap justify-start gap-2">
            {_?.bigPlayers?.map((_i) => (
              <span
                className={`px-2 rounded-3xl bg-green-800 shadow-xl text-white text-md font-semibold`}
              >
                {_i}
              </span>
            ))}
          </div>
        </div>
        <FintechIcon height={150} width={150} />
        <span
          onClick={() =>
            redirectionHandler(_?.industryName.toLocaleLowerCase() ?? "")
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className="fill-gray-700 hover:fill-green-500"
          >
            <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z" />
            <path d="M9.293 8.707 12.586 12l-3.293 3.293 1.414 1.414L15.414 12l-4.707-4.707-1.414 1.414z" />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default CatagoryCards;
