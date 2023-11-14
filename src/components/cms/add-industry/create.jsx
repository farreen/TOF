import React, { useState } from "react";
import PreviewCatagoryCard from "./preview-catagory-card";
import AddImageIcon from "../../common/svg-icons/add-image-icon";

const Create = ({ type, tabHandler }) => {
  const [isPreview, setIsPreview] = useState(false);
  const [bigPlayerList, setBigPlayerList] = useState([
    { logo: null, name: "" },
    { logo: null, name: "" },
    { logo: null, name: "" },
  ]);
  const previewHandler = () => setIsPreview(!isPreview);
  const addBigPlayer = () =>
    setBigPlayerList([...bigPlayerList, { logo: null, name: "" }]);
  const deleteBigPlayer = (name) =>
    setBigPlayerList(bigPlayerList.filter((_i) => _i.name != name));
  const getBigPlayersDetails = (e, idx) => {
    let name = e.target.name;
    let value = e.target.value;
    console.log("activeSideBarTab", idx, name, value);
    let modifiedList = bigPlayerList.map((_i, _idx) => {
      if (_idx == idx) {
        return { ..._i, [name]: value };
      }
      return _i;
    });
    setBigPlayerList(modifiedList);
  };
  console.log(bigPlayerList);
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
        <div className="flex justify-center">
          <PreviewCatagoryCard />
        </div>
      ) : (
        <div className="rounded-lg m-2 md:m-8 p-4 bg-gradient-to-r from-green-50 to-cyan-200">
          <h2 className="text-3xl text-gray-700 font-bold mb-5 text-left">
            Add Industry
          </h2>
          <div className="flex flex-wrap justify-start gap-4 mb-4">
            <label class="grow block">
              <span class="block text-sm font-medium text-slate-700 text-left">
                Industry name
              </span>
              <input
                type="text"
                name="startup_name"
                class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="Ex: Fintech"
              />
            </label>
            <label class="grow block">
              <span class="block text-sm font-medium text-slate-700 text-left">
                Industry logo
              </span>
              <input
                type="file"
                name="startup_link"
                class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1"
                // placeholder="Ex: https://xyz.com"
              />
            </label>
          </div>
          <div className="flex flex-wrap justify-start gap-4 mb-4">
            <label class="grow block">
              <span class="block text-sm font-medium text-slate-700 text-left">
                Industry infornation
              </span>
              <textarea
                rows="5"
                type="text"
                name="startup_name"
                class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 resize-y"
              />
            </label>
          </div>
          <div className="flex flex-wrap justify-start gap-4 mb-4">
            <label class="grow block">
              <span class="block text-sm font-medium text-slate-700 text-left">
                Enter CAGR
              </span>
              <input
                type="number"
                name="legal_name"
                class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1"
                placeholder="Ex: 10"
              />
            </label>
            <label class="grow block">
              <span class="block text-sm font-medium text-slate-700 text-left">
                Size in India
              </span>
              <input
                type="text"
                name="startup_name"
                class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="Ex: 30 billion"
              />
            </label>
            <label class="grow block">
              <span class="block text-sm font-medium text-slate-700 text-left">
                Size in Global
              </span>
              <input
                type="text"
                name="startup_link"
                class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="Ex: 30 billion"
              />
            </label>
          </div>
          <div className="flex flex-wrap justify-start gap-4 mb-4 w-auto md:w-96">
            <label class="grow block">
              <span class="block text-sm font-medium text-slate-700 text-left">
                Add big players
              </span>
              <div className="flex justify-start items-center gap-2 my-4">
                <span className="rounded-full bg-gray-200 p-2">
                  {bigPlayerList[0].logo ? (
                    <img
                      class="w-12 h-12 rounded-full shadow-lg"
                      src="https://loremflickr.com/320/240"
                      alt="Bonnie image"
                    />
                  ) : (
                    <AddImageIcon height={32} width={32} />
                  )}
                  <input
                    // id={idx}
                    type="file"
                    name="logo"
                    className="hidden"
                    // class="w-auto mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 block w-full rounded-md sm:text-sm"
                    // placeholder="Ex: BYJUS"
                    onChange={(e) => getBigPlayersDetails(e, 0)}
                  />
                </span>

                <input
                  type="text"
                  name="name"
                  class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Ex: BYJUS"
                  onChange={(e) => getBigPlayersDetails(e, 0)}
                />
              </div>
              <div className="flex justify-start items-center gap-2 mb-4">
                <span className="rounded-full bg-gray-200 p-2">
                  {bigPlayerList[1].logo ? (
                    <img
                      class="w-12 h-12 rounded-full shadow-lg"
                      src="https://loremflickr.com/320/240"
                      alt="Bonnie image"
                    />
                  ) : (
                    <AddImageIcon height={32} width={32} />
                  )}
                  <input
                    // id={idx}
                    type="file"
                    name="logo"
                    className="hidden"
                    // class="w-auto mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 block w-full rounded-md sm:text-sm"
                    placeholder="Ex: https://xyz.com"
                    onChange={(e) => getBigPlayersDetails(e, 1)}
                  />
                </span>

                <input
                  type="text"
                  name="name"
                  class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Ex: BYJUS"
                  onChange={(e) => getBigPlayersDetails(e, 1)}
                />
              </div>
              <div className="flex justify-start items-center gap-2 mb-4">
                <span className="rounded-full bg-gray-200 p-2">
                  {bigPlayerList[2].logo ? (
                    <img
                      class="w-12 h-12 rounded-full shadow-lg"
                      src="https://loremflickr.com/320/240"
                      alt="Bonnie image"
                    />
                  ) : (
                    <AddImageIcon height={32} width={32} />
                  )}
                  <input
                    // id={idx}
                    type="file"
                    name="logo"
                    className="hidden"
                    // class="w-auto mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 block w-full rounded-md sm:text-sm"
                    placeholder="Ex: https://xyz.com"
                    onChange={(e) => getBigPlayersDetails(e, 2)}
                  />
                </span>

                <input
                  type="text"
                  name="name"
                  class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Ex: BYJUS"
                  onChange={(e) => getBigPlayersDetails(e, 2)}
                />
              </div>
            </label>
            {/* {bigPlayerList.map((_i) => (
              <>
                {!_i.logo && _i.name == "" ? (
                  <label class="grow block">
                    <span class="block text-sm font-medium text-slate-700 text-left">
                      Add big players
                    </span>
                    <div className="flex justify-start gap-2">
                      <input
                        type="file"
                        name="legal_name"
                        class="w-72 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder="Ex: https://xyz.com"
                      />
                      <input
                        type="text"
                        name="legal_name"
                        class="w-72 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder="Ex: https://xyz.com"
                      />
                    </div>
                  </label>
                ) : (
                  <div class="flex justify-start items-center gap-2">
                    <img
                      class="w-10 h-10 rounded-full shadow-lg"
                      src="https://loremflickr.com/320/240"
                      alt="Bonnie image"
                    />
                    <h5 class="mb-1 text-xl font-medium text-gray-900">
                      Bonnie Green
                    </h5>
                  </div>
                )}
              </>
            ))} */}
          </div>
        </div>
      )}
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
  );
};

export default Create;
