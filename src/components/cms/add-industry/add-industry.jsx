import React, { useCallback, useState } from "react";
import Create from "./create";
import Published from "./published";
import Draft from "./draft";
import Trash from "./trash";

const AddIndustry = () => {
  const [activeTab, setActiveTab] = useState("Create");
  const tabHandler = useCallback(
    (tab) => {
      console.log("tab", tab);
      setActiveTab(tab);
    },
    [activeTab]
  );

  const activeTabHandler = (tab) => setActiveTab(tab);
  return (
    <>
      <ul class="flex flex-wrap justify-center -mb-px mt-4">
        <li class="mr-2" onClick={() => activeTabHandler("Create")}>
          <a
            class={`inline-block p-4 ${
              activeTab == "Create"
                ? "text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                : "border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            }`}
          >
            Create
          </a>
        </li>
        <li class="mr-2" onClick={() => activeTabHandler("Published")}>
          <a
            class={`inline-block p-4 ${
              activeTab == "Published"
                ? "text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                : "border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            }`}
            aria-current="page"
          >
            Published
          </a>
        </li>
        <li class="mr-2" onClick={() => activeTabHandler("Draft")}>
          <a
            class={`inline-block p-4 ${
              activeTab == "Draft"
                ? "text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                : "border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            }`}
          >
            Draft
          </a>
        </li>
        <li class="mr-2" onClick={() => activeTabHandler("Trash")}>
          <a
            class={`inline-block p-4 ${
              activeTab == "Trash"
                ? "text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                : "border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            }`}
          >
            Trash
          </a>
        </li>
      </ul>
      {activeTab == "Create" && (
        <Create type={activeTab} tabHandler={tabHandler} />
      )}
      {activeTab == "Published" && (
        <Published type={activeTab} tabHandler={tabHandler} />
      )}
      {activeTab == "Draft" && (
        <Draft type={activeTab} tabHandler={tabHandler} />
      )}
      {activeTab == "Trash" && (
        <Trash type={activeTab} tabHandler={tabHandler} />
      )}
    </>
  );
};

export default AddIndustry;
