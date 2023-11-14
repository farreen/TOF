import React, { useState } from "react";
import { blogsListData } from "../../../demo-data/blogs-data";

const Details = () => {
  let catagoryName = window.location.href.split("/");
  let pathName = catagoryName[catagoryName.length - 1];
  console.log("pathName", pathName);

  let filteredData = blogsListData.filter((newVal) => {
    return newVal.href === pathName;
  });
  console.log("filtered", filteredData);

  return (
    <>
      {
        filteredData && filteredData.map((item) => {
          return (
            <>

              <div
                className={`flex relative h-1/2 w-3/5 overflow-hidden rounded-lg bg-white m-10 mx-auto`}
              >
                <img
                  src={item.imageSrc}
                  className="h-full w-full object-cover object-center"
                  alt={item.imageAlt}
                />
              </div>
              {/* <div className="flex lg:ml-64 sm: ml-16 mb-5"> */}
              <div className="flex items-center lg:ml-64 sm: ml-16 md:ml-40  mb-5">
                {/* <div className="2lg:w-12 h-12 md:w-6 h-6 sm:w-3 h-3 bg-gray-300 rounded-full flex items-center justify-center"> */}
                 
                {/* <img src={item.imageSrc} alt="Your Name" className="lg:w-full h-full md:w-full h-full sm:w-3 h-3 rounded-full" /> */}
                  <img src={item.imageSrc} alt="Your Name" className="rounded-full w-6 h-6 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6"/>
                {/* </div> */}
                {/* <div className="grid grid-cols-2"> */}
                <div className="ml-4">
                  <a className="text-sm lg:ml-1  text-black "> Nitin Kumar</a>
                  <span className=" ml-3 text-gray-500 text-sm">12-may</span>
                </div>
              </div>

              <div className="w-3/5 mx-auto">
                <h1 className="text-4xl text-start font-semibold text-gray-900 mx-auto mb-4">
                  {item && item.name}
                </h1>
                <h2 className="text-mg text-start font-semibold text-black-600 mx-auto">
                  {item.subTitle1}
                </h2>
                <p className="m-2 text-lg text-black font-serif text-start mx-auto">
                  {item.description1}
                </p>
                {
                  item.description14 && <>
                    <ol className="m-2 text-lg text-black font-serif text-start mx-auto">
                      {item.description14 && item.description14.neo.map((item, i) =>
                        <li key={i}><p className="mb-5">{item.key}</p></li>
                      )}
                    </ol>
                  </>
                }

                <h2 className="text-mg text-start font-semibold text-black-600 mx-auto">
                  {item.subTitle2}
                </h2>
                <p className="m-2 text-lg text-black font-serif text-start mx-auto">
                  {item.description2}{" "}
                </p>

                <h2 className="text-mg text-start font-semibold text-black-600 mx-auto">
                  {item.subTitle3}
                </h2>

                {
                  item.description3 ?
                    item.description3.defiCefi && <>
                      <ol className="text-lg text-black  font-serif text-start list-disc ms-8 m-2">
                        {item && item.description3.defiCefi.map((item, i) =>
                          <li key={i}><span className="font-semibold">{item.key}:{"  "}</span><span>{item.val}</span></li>
                        )}
                      </ol>
                    </>
                    :
                    <p className="m-2 text-lg text-black font-serif text-start mx-auto">{item.description3 && item.description3}</p>
                }
                {
                  item.description15 && <>
                    <p className="m-2 text-lg text-black font-serif text-start mx-auto">
                      {item.description15 && item.description15.p2p.map((item, i) =>
                        <p key={i}>{item.key}</p>
                      )}
                    </p>
                  </>
                }

                <h2 className="text-md text-start font-semibold text-black-600 mx-auto">
                  {item.subTitle4}
                </h2>

                {
                  item.description4 && item.description4.attributes ? <>
                    <ol className="text-lg text-black  font-serif text-start list-decimal ms-8 m-2">
                      {item.description4.attributes && item.description4.attributes.map((item, i) =>
                        <li key={i}><span className="font-semibold">{item.key}:{"  "}</span><span>{item.val}</span></li>
                      )}
                    </ol>
                  </> :
                    <p className="m-2 text-lg text-black font-serif text-start mx-auto">{item.description4 && item.description4}</p>
                }

                <h2 className="text-md text-start font-semibold text-black-600 mx-auto">
                  {item.subTitle5}
                </h2>
                <p className="m-2 text-lg text-black font-serif text-start mx-auto">
                  {item.description5 && item.description5.useCases ?
                    <>
                      <ol className="text-lg text-black  font-serif text-start list-disc ms-8 m-2">
                        {item.description5.useCases && item.description5.useCases.map((item, i) =>
                          <li key={i}><span className="font-semibold">{item.key}:{"  "}</span><span>{item.val}</span></li>
                        )}
                      </ol>
                    </>
                    :
                    <>{item.description5}</>}{" "}
                </p>
                <h2 className="text-lg text-start font-semibold text-black-600 mx-auto">
                  {item.subTitle6}
                </h2>
                <p className="m-2 text-lg text-black font-serif text-start mx-auto">
                  {item && item.description6 && item.description6.uses}
                </p>

                {
                  item.description6 && item.description6.useCases ? <>
                    <ul className="text-lg text-black  font-serif text-start list-none ms-8 m-2">
                      {item.description6.useCases && item.description6.useCases.map((item, i) =>
                        <li key={i}><span className="font-semibold">{item.key}:{"  "}</span><span>{item.val}</span></li>
                      )}
                    </ul>
                  </> : <p className="m-2 text-lg text-black font-serif text-start mx-auto">{item.description6}</p>
                }


                <h2 className="text-md text-start font-semibold text-black-600 mx-auto">
                  {item.subTitle7}
                </h2>
                {
                  item && item.description7 && <p className="m-2 text-lg text-black font-serif text-start mx-auto">
                    {item && item.description7.dApp}
                  </p>
                }
                {
                  item.description7 && <>
                    <ol className="text-lg text-black  font-serif text-start list-disc ms-8 m-2">
                      {item && item.description7.dAppUseCases.map((item, i) =>
                        <li key={i}><span className="font-semibold">{item.key}:{"  "}</span><span>{item.val}</span></li>
                      )}
                    </ol>
                  </>
                }
                <h2 className="text-md text-start font-semibold text-black-600 mx-auto">
                  {item.subTitle8}
                </h2>
                {
                  item.description8 && <>
                    <ol className="text-lg font-serif text-start  list-decimal ms-8 m-2">
                      {item.description8 && item.description8.examples.map((item, i) =>
                        <li key={i}><p className="">{item.key}</p></li>
                      )}
                    </ol>
                  </>
                }

                <p className="m-2 text-lg text-black font-serif text-start mx-auto">
                  {item.description17}
                </p>

                {
                  item.description16 && <>
                    <ol className="m-2 text-lg text-black font-serif text-start mx-auto">
                      {item.description16 && item.description16.ondc.map((item, i) =>
                        <li key={i}><p className="mb-5">{item.key}</p></li>
                      )}
                    </ol>
                  </>
                }

                {
                  item.description18 && <>
                    <ol className="text-lg font-serif text-start  list-disc ms-8 m-2">
                      {item.description18 && item.description18.token.map((item, i) =>
                        <li key={i}><p className="">{item.key}</p></li>
                      )}
                    </ol>
                  </>
                }



                <h2 className="text-lg text-start font-semibold text-black-600 mx-auto">
                  {item.subTitle9}
                </h2>
                <p className="m-2 text-lg text-black font-serif text-start mx-auto">
                  {item && item.description9}
                </p>
                <h2 className="text-lg text-start font-semibold text-black-600 mx-auto">
                  {item.subTitle10}
                </h2>
                {
                  item.description10 && <>
                    <ol className="text-md  font-serif text-start list-decimal ms-8 m-2">
                      {item.description10 && item.description10.cbdc.map((item, i) =>
                        <li key={i}><span className="font-semibold">{item.key}</span></li>
                      )}
                    </ol>
                  </>
                }
                <h2 className="text-lg text-start font-semibold text-black-600 mx-auto">
                  {item.subTitle11}
                </h2>
                <p className="m-2 text-lg text-black font-serif text-start mx-auto">
                  {item && item.description11}
                </p>

                <h2 className="text-lg text-start font-semibold text-black-600 mx-auto">
                  {item.subTitle12}
                </h2>

                {
                  item.description12 ?
                    item.description12.iso && <>
                      <ol className="text-lg text-black  font-serif text-start list-disc ms-8 m-2">
                        {item && item.description12.iso.map((item, i) =>
                          <li key={i}><span className="font-semibold">{item.key}:{"  "}</span><span>{item.val}</span></li>
                        )}
                      </ol>
                    </>
                    :
                    <p className="m-2 text-lg text-black font-serif text-start mx-auto">{item.description12 && item.description12}</p>
                }

                <h2 className="text-lg text-start font-semibold text-black-600 mx-auto">
                  {item.subTitle13}
                </h2>
                {
                  item.description13 ?
                    item.description13.sustainable && <>
                      <ol className="text-lg text-black  font-serif text-start list-disc ms-8 m-2">
                        {item && item.description13.sustainable.map((item, i) =>
                          <li key={i}><span className="font-semibold">{item.key}:{"  "}</span><span>{item.val}</span></li>
                        )}
                      </ol>
                    </>
                    :
                    <p className="m-2 text-lg text-black font-serif text-start mx-auto">{item.description13 && item.description13}</p>
                }

                <h2 className="text-lg text-start  text-black-600 mx-auto">
                  {item.subTitle14}
                </h2>

                <h2 className="text-lg text-start font-semibold text-black-600 mx-auto">
                  {item.subTitle15}
                </h2>

                {
                  item.description19 && <>
                    <ol className="text-lg font-serif text-start  list-disc ms-8 m-2">
                      {item.description19 && item.description19.tokens.map((item, i) =>
                        <li key={i}><p className="">{item.key}</p></li>
                      )}
                    </ol>
                  </>
                }

                {
                  item.description20 && <>
                    <ol className="m-2 text-lg text-black font-serif text-start mx-auto">
                      {item.description20 && item.description20.info.map((item, i) =>
                        <li key={i}><p className="mb-5">{item.key}</p></li>
                      )}
                    </ol>
                  </>
                }


                {

                  item.description21 && <>
                    <ol className="text-lg text-black  font-serif text-start list-disc ms-8 m-2">
                      {item && item.description21.crypto.map((item, i) =>
                        <li key={i}><span className="">{item.key}:{"  "}</span><span>{item.val}</span></li>
                      )}
                    </ol>
                  </>
                }


                <h2 className="text-xl text-start font-semibold text-black-600 mx-auto">
                  {item.Conclusion && "CONCLUSION"}
                </h2>
                <p className="m-2 text-lg text-black font-serif text-start mx-auto">
                  {item.Conclusion}
                </p>
              </div>
            </>

          )
        })
      }
    </>
  );
};

export default Details;
