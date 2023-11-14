import React, { useState } from "react";
import { indianStates } from "../../../demo-data/cms-data";
import Select from "react-select";
import Preview from "./preview";
import useRedirect from "../../../custom-hooks/common/useRedirect";

const Create = ({ activeTab, tabHandler }) => {
  const [coreTeamList, setCoreTeamList] = useState([1]);
  const [targetMarketList, setTargetMarketList] = useState([1]);
  const [investorList, setInvestorList] = useState([1]);
  const [isPreview, setIsPreview] = useState(false);
  const [targetMarket, setTargetMarket] = useState([
    { label: "B2B", value: 1 },
  ]);

  const targetMarketHandler = (value, idx) => {
    let modifiedList = targetMarket.map((_i, index) => {
      if (index == idx) {
        return value;
      }
      return _i;
    });
    setTargetMarket(modifiedList);
  };
  const previewHandler = () => setIsPreview(!isPreview);

  const addMoreCoreTeam = () => {
    let addItem = coreTeamList.length + 1;
    setCoreTeamList([...coreTeamList, addItem]);
  };
  const deleteCoreTeam = (id) => {
    const modiedfilter = coreTeamList.filter((_i) => _i != id + 1);
    setCoreTeamList(modiedfilter);
  };

  const addMoreTargetMarket = () => {
    let addItem = targetMarketList.length + 1;
    setTargetMarketList([...targetMarketList, addItem]);
    setTargetMarket([
      ...targetMarket,
      { label: "B2B", value: targetMarket.length + 1 },
    ]);
  };
  const deleteTargetMarket = (id) => {
    const modiedfilter = targetMarketList.filter((_i) => _i != id + 1);
    setTargetMarketList(modiedfilter);
  };

  const addMoreInvestort = () => {
    let addItem = investorList.length + 1;
    setInvestorList([...investorList, addItem]);
  };
  const deleteInvestor = (id) => {
    const modiedfilter = investorList.filter((_i) => _i != id + 1);
    setInvestorList(modiedfilter);
  };
  console.log("targetMarket", targetMarket);
  return (
    <>
      <div className="flex justify-end gap-4 align-center mt-4 me-4">
        {!isPreview && (
          <div class="flex items-center">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-checkbox"
              class="ml-2 text-sm font-medium text-black"
            >
              make it feature
            </label>
          </div>
        )}
        <span
          className={`text-white bg-gradient-to-r ${
            isPreview ? "from-blue-400" : "from-green-400"
          } ${isPreview ? "via-blue-500" : "via-green-500"} ${
            isPreview ? "to-blue-600" : "to-green-600"
          } hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:${
            isPreview ? "ring-blue-300" : "ring-green-300"
          } dark:focus:${
            isPreview ? "ring-blue-800" : "ring-green-800"
          } shadow-lg ${
            isPreview ? "shadow-blue-500/50" : "shadow-green-500/50"
          } dark:shadow-lg dark:${
            isPreview ? "shadow-blue-800/80" : "shadow-green-800/80"
          } font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
          onClick={previewHandler}
        >
          {isPreview ? "Back to edit" : "Preview"}
        </span>
      </div>
      {isPreview ? (
        <div className="p-12 md:p-auto">
          <Preview />
        </div>
      ) : (
        <>
          <div className="rounded-lg m-2 md:m-8 p-4 bg-gradient-to-r from-green-50 to-cyan-200">
            <h2 className="text-3xl text-gray-700 font-bold mb-5 text-left">
              Basic informations
            </h2>
            <div className="flex flex-wrap justify-start gap-4 mb-4">
              <label class="grow block">
                <span class="block text-sm font-medium text-slate-700 text-left">
                  Startup name
                </span>
                <input
                  type="text"
                  name="startup_name"
                  class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Ex: BYJUS"
                />
              </label>
              <label class="grow block">
                <span class="block text-sm font-medium text-slate-700 text-left">
                  Startup Link
                </span>
                <input
                  type="text"
                  name="startup_link"
                  class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Ex: https://xyz.com"
                />
              </label>
              <label class="grow block">
                <span class="block text-sm font-medium text-slate-700 text-left">
                  Legal name
                </span>
                <input
                  type="text"
                  name="legal_name"
                  class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Ex: BYJUS"
                />
              </label>
            </div>
            <div className="flex flex-wrap justify-start gap-4 mb-4">
              <label class="grow block">
                <span class="block text-sm font-medium text-slate-700 text-left">
                  Startup infornation
                </span>
                <textarea
                  rows="5"
                  type="text"
                  name="startup_name"
                  class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 resize-y"
                  placeholder="Enter startup description"
                />
              </label>
            </div>
            <div className="flex flex-wrap justify-start gap-4 mb-4">
              <label class="grow block">
                <span class="block text-sm font-medium text-slate-700 text-left">
                  Headquarter
                </span>
                <Select
                  isMulti
                  name="headquarter"
                  placeholder={
                    <div className="text-left">Please select headquarters</div>
                  }
                  options={indianStates}
                  className="basic-multi-select w-full mt-1 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1 text-left"
                  classNamePrefix="select"
                  menuPlacement="bottom"
                />
              </label>

              <label class="grow block">
                <span class="block text-sm font-medium text-slate-700 text-left">
                  Founding Date
                </span>
                <input
                  type="date"
                  name="legal_name"
                  class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  // placeholder="Ex: https://xyz.com"
                />
              </label>
              <label class="grow block">
                <span class="block text-sm font-medium text-slate-700 text-left">
                  No. of Employees
                </span>
                <input
                  type="number"
                  name="legal_name"
                  class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Ex: 10"
                />
              </label>
            </div>
          </div>
          <div className="rounded-lg m-2 md:m-8 p-4 bg-gradient-to-r from-cyan-50 to-indigo-200">
            <h2 className="text-3xl text-gray-700 font-bold mb-5 text-left">
              Core Team
            </h2>
            {coreTeamList.map((_c, idx) => (
              <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
                <div className="flex flex-wrap justify-start gap-4 mb-4">
                  <label class="grow block">
                    <span class="block text-sm font-medium text-slate-700 text-left">
                      Team Member 1
                    </span>
                    <input
                      type="text"
                      name="startup_name"
                      class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      placeholder="Ex: Mohit Rajput"
                    />
                  </label>
                  <label class="grow block">
                    <span class="block text-sm font-medium text-slate-700 text-left">
                      Designation
                    </span>
                    <input
                      type="text"
                      name="startup_link"
                      class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      placeholder="Ex: CEO"
                    />
                  </label>
                  <label class="grow block">
                    <span class="block text-sm font-medium text-slate-700 text-left">
                      Profile Link
                    </span>
                    <input
                      type="text"
                      name="legal_name"
                      class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      placeholder="Ex: https://xyz.com"
                    />
                  </label>
                  <label class="grow block">
                    <span class="block text-sm font-medium text-slate-700 text-left">
                      Revenue Stream
                    </span>
                    <input
                      type="text"
                      name="legal_name"
                      class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      placeholder="Ex: E-commerce product"
                    />
                  </label>
                </div>
                <div className="flex justify-end gap-4">
                  {!(coreTeamList.length - 1 == idx) && (
                    <button onClick={() => deleteCoreTeam(idx)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        className="fill-red-600"
                      >
                        <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
                      </svg>
                    </button>
                  )}
                  {coreTeamList.length - 1 == idx && (
                    <button
                      className="rounded-md bg-blue-500 p-1 px-2 text-white"
                      onClick={addMoreCoreTeam}
                    >
                      Add more
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-lg m-2 md:m-8 p-4 bg-gradient-to-r from-purple-50 to-rose-200">
            <h2 className="text-3xl text-gray-700 font-bold mb-5 text-left">
              Target Market
            </h2>
            {targetMarketList.map((_c, idx) => (
              <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
                <div className="flex flex-wrap justify-start gap-4 mb-4">
                  <label class="grow block">
                    <span class="block text-sm font-medium text-slate-700 text-left">
                      Business Model
                    </span>
                    <Select
                      name="headquarter"
                      defaultValue={[{ label: "B2B", value: 0 }]}
                      placeholder={
                        <div className="text-left">
                          Please select business model
                        </div>
                      }
                      options={[
                        { label: "B2B", value: 1 },
                        { label: "B2C", value: 2 },
                      ]}
                      className="basic-multi-select w-full mt-1 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1 text-left"
                      classNamePrefix="select"
                      menuPlacement="bottom"
                      onChange={(e) => targetMarketHandler(e, idx)}
                    />
                    {/* <input
                  type="text"
                  name="legal_name"
                  class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Ex: B2B"
                /> */}
                  </label>
                  {targetMarket[idx].label == "B2B" && (
                    <label class="grow block">
                      <span class="block text-sm font-medium text-slate-700 text-left">
                        Client Segment
                      </span>
                      <input
                        type="text"
                        name="startup_name"
                        class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder="Ex: Collaboration, Consumer, Services"
                      />
                    </label>
                  )}
                  {targetMarket[idx].label == "B2B" && (
                    <label class="grow block">
                      <span class="block text-sm font-medium text-slate-700 text-left">
                        Target Companies
                      </span>
                      <input
                        type="text"
                        name="startup_link"
                        class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder="Ex: Startup,  Small Enterprise,  Medium Enterprise "
                      />
                    </label>
                  )}
                  {targetMarket[idx].label == "B2B" && (
                    <label class="grow block">
                      <span class="block text-sm font-medium text-slate-700 text-left">
                        Target Geography
                      </span>
                      <input
                        type="text"
                        name="legal_name"
                        class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder="Ex: India, global"
                      />
                    </label>
                  )}
                  {/* </div>
                <div className="flex flex-wrap justify-start gap-4 mb-4"> */}
                  {targetMarket[idx].label == "B2C" && (
                    <label class="grow block">
                      <span class="block text-sm font-medium text-slate-700 text-left">
                        User Age
                      </span>
                      <input
                        type="text"
                        name="legal_name"
                        class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder="Ex: 10 to 20, 30 to 40"
                      />
                    </label>
                  )}
                  {targetMarket[idx].label == "B2C" && (
                    <label class="grow block">
                      <span class="block text-sm font-medium text-slate-700 text-left">
                        User Income
                      </span>
                      <input
                        type="text"
                        name="startup_name"
                        class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder="Ex: Lower Income, Lower-middle Income, Upper-middle Income"
                      />
                    </label>
                  )}
                  {targetMarket[idx]?.label == "B2C" && (
                    <label class="grow block">
                      <span class="block text-sm font-medium text-slate-700 text-left">
                        User Location
                      </span>
                      <input
                        type="text"
                        name="startup_link"
                        class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder="Ex: India, global"
                      />
                    </label>
                  )}
                  <label class="grow block">
                    <span class="block text-sm font-medium text-slate-700 text-left">
                      Total Funding
                    </span>
                    <input
                      type="text"
                      name="legal_name"
                      class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      placeholder="Ex: 3.2"
                    />
                  </label>
                </div>
                <div className="flex justify-end gap-4">
                  {!(targetMarketList.length - 1 == idx) && (
                    <button onClick={() => deleteTargetMarket(idx)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        className="fill-red-600"
                      >
                        <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
                      </svg>
                    </button>
                  )}
                  {targetMarketList.length - 1 == idx && (
                    <button
                      className="rounded-md bg-blue-500 p-1 px-2 text-white"
                      onClick={addMoreTargetMarket}
                    >
                      Add more
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-lg m-2 md:m-8 p-4 bg-gradient-to-r from-amber-50 to-lime-200">
            <h2 className="text-3xl text-gray-700 font-bold mb-5 text-left">
              Investor
            </h2>
            {investorList.map((_c, idx) => (
              <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
                <h2 className="text-xl text-gray-700 font-bold mb-5 text-left">
                  Round {_c}
                </h2>
                <div className="flex flex-wrap justify-start gap-4 mb-4">
                  <label class="grow block">
                    <span class="block text-sm font-medium text-slate-700 text-left">
                      Series Name
                    </span>
                    <input
                      type="text"
                      name="startup_name"
                      class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      placeholder="Ex: Series A"
                    />
                  </label>
                  <label class="grow block">
                    <span class="block text-sm font-medium text-slate-700 text-left">
                      Date
                    </span>
                    <input
                      type="date"
                      name="startup_link"
                      class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      // placeholder="Ex: CEO"
                    />
                  </label>
                  <label class="grow block">
                    <span class="block text-sm font-medium text-slate-700 text-left">
                      Target Geography
                    </span>
                    <input
                      type="text"
                      name="legal_name"
                      class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      placeholder="Ex: India, Global"
                    />
                  </label>
                  <label class="grow block">
                    <span class="block text-sm font-medium text-slate-700 text-left">
                      Funding (USD Mns)
                    </span>
                    <input
                      type="number"
                      name="legal_name"
                      class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      placeholder="Ex: 100"
                    />
                  </label>
                  <label class="grow block">
                    <span class="block text-sm font-medium text-slate-700 text-left">
                      Investors
                    </span>
                    <input
                      type="text"
                      name="legal_name"
                      class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      placeholder="Ex: Mukesh Anbani"
                    />
                  </label>
                </div>
                <div className="flex justify-end gap-4">
                  {!(investorList.length - 1 == idx) && (
                    <button onClick={() => deleteInvestor(idx)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        className="fill-red-600"
                      >
                        <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
                      </svg>
                    </button>
                  )}
                  {investorList.length - 1 == idx && (
                    <button
                      className="rounded-md bg-blue-500 p-1 px-2 text-white"
                      onClick={addMoreInvestort}
                    >
                      Add more
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end gap-4 m-2 md:m-8 p-4">
            <button
              className="rounded-md bg-gray-400 p-1 px-2 text-white"
              onClick={() => tabHandler("Draft")}
            >
              Save as draft
            </button>
            <button
              className="rounded-md bg-blue-500 p-1 px-2 text-white"
              onClick={() => tabHandler("Published")}
            >
              Publish
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Create;
