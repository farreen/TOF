import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

import demo from "../../assets/images/demo.jpg";
import { TOSlistData } from "../../demo-data/tails-of-startups-data";

const TailOfStartupsModal = ({ open = false, onClose = () => {}, item }) => {
  // let item = TOSlistData[0];
  return (
<>
  <Dialog open={open} onClose={onClose} className="relative z-50">
    {/* The backdrop, rendered as a fixed sibling to the panel container */}
    <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

    {/* Full-screen scrollable container */}
    <div className="fixed inset-0 max-w-screen-md overflow-y-auto lg:left-64">
      {/* Container to center the panel */}
      <div className="flex min-h-full items-center justify-center p-4 max-w-screen-md">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="mx-auto max-w-screen-md rounded-lg bg-white">
          <img className="rounded-t-lg object-cover w-full" src={item.startupLogo} alt="" />
          {item && (
            <h3 className="font-serif text-3xl text-gray-700 font-bold mb-5 w-full m-4">
              {item.startupName}
            </h3>
          )}
          {item?.legal_name && (
            <h4 className="font-serif text-lg text-gray-700 font-bold mb-5 w-full m-4">
              {item.legal_name}
            </h4>
          )}
          {item.pSummary && (
            <p className="text-gray-500 text-lg m-4 font-serif">{item.pSummary}</p>
          )}
          <table className="font-serif table-auto m-4 overflow-y-auto h-32">
            <tbody>
              {item.legal_name && (
                <tr>
                  <td className="font-serif text-lg text-gray-700 font-semibold">
                    Legal name
                  </td>
                  <td  className="font-serif text-gray-500 text-md px-16">{item.legal_name}</td>
                </tr>
              )}
              {item.basedOutOf && (
                <tr>
                  <td className="font-serif text-lg text-gray-700 font-semibold">
                  Based Out Of
                  </td>
                  <td className="text-gray-500 text-md px-16 font-serif">
                    {item.basedOutOf}
                  </td>
                </tr>
              )}
              {item && (
                <tr>
                  <td className="text-lg text-gray-700 font-semibold">
                    Business model
                  </td>
                  <td className="text-gray-500 text-md px-16">
                    {item.business_model}
                  </td>
                </tr>
              )}
              {item && (
                <tr>
                  <td className="text-lg text-gray-700 font-semibold">
                    Founding date
                  </td>
                  <td className="text-gray-500 text-md px-16">
                    {item.founding_date}
                  </td>
                </tr>
              )}
              {item && (
                <tr>
                  <td className="text-lg text-gray-700 font-semibold">
                    Employee count
                  </td>
                  <td className="text-gray-500 text-md px-16">
                    {item.employee_headcount}
                  </td>
                </tr>
              )}
              {item.revenue_stream && (
                <tr>
                  <td className="text-lg text-gray-700 font-semibold">
                    Revenue stream
                  </td>
                  <td className="text-gray-500 text-md px-16">
                    {item.revenue_stream}
                  </td>
                </tr>
              )}
              {item.clientBusinessStructure && (
                <tr>
                  <td className="text-lg text-gray-700 font-semibold">
                    Client Business Structure
                  </td>
                  <td className="text-gray-500 text-md px-16">
                    {item.clientBusinessStructure}
                  </td>
                </tr>
              )}
              {item.target_companies && (
                <tr>
                  <td className="text-lg text-gray-700 font-semibold">
                    Target companies
                  </td>
                  <td className="text-gray-500 text-md px-16">
                    {item.target_companies}
                  </td>
                </tr>
              )}
              {item.target_geography && (
                <tr>
                  <td className="text-lg text-gray-700 font-semibold">
                    Target companies
                  </td>
                  <td className="text-gray-500 text-md px-16">
                    {item.target_geography}
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <span
              type="button"
              className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto cursor-pointer"
              onClick={onClose}
            >
              Close
            </span>
          </div>
        </Dialog.Panel>
      </div>
    </div>
  </Dialog>
</>
  );
};

export default TailOfStartupsModal;


