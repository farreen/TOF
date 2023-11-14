import React, { useCallback, useState } from "react";
import demo from "../../assets/images/demo.jpg";
import TailOfStartupsModal from "../modals/tail-of-startups-modal";

const TailsOfStartupCard = ({ item }) => {
  console.log("item.../", item)
  const [open, setOpen] = useState(false);
  const modalHandler = useCallback(() => setOpen(!open), [open]);
  return (
    <>
      <div class="max-w-sm bg-white border-2 border-gray-200 bg-gray-200 rounded-lg hover:shadow-2xl hover:shadow-green-600  hover:border-green-700 cursor-pointer" onClick={modalHandler}>
        <img class="rounded-t-lg object-cover w-full" src={item.startupLogo} alt="" />
        <div class="p-5">
          <h3 class="line-clamp-1 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black text-left">
            {item.startupName}
          </h3>
          <h4 class="mb-2 text-md line-clamp-1 tracking-tight text-gray-900 dark:text-black text-left">
            {item.legal_name}
          </h4>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left line-clamp-3">
            <span>
              {item.pSummary}
            </span>
          </p>
          <p class="mb-3 font-semibold text-black text-left">
            <span className="rounded-full bg-emerald-400 p-2 me-2">{item.industry}</span>
          </p>
          <span className="flex justify-end w-full">
            <a
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => modalHandler}
            >
              Read more
              <svg
                class="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </span>
        </div>
      </div>
      <TailOfStartupsModal open={open} onClose={modalHandler} item={item}/>
    </>
  );
};

export default TailsOfStartupCard;
