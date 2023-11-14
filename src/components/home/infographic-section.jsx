import React, { useMemo, useState } from "react";
import CatagoryCards from "../common/catagory-card";
import { top4TOS } from "../../demo-data/home-data";
import useRedirect from "../../custom-hooks/common/useRedirect";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
];

const colorsArray = [
  "Red",
  "Orange",
  "Amber",
  "Yellow",
  "Lime",
  "Green",
  "Emerald",
  "Teal",
  "Cyan",
  "Sky",
  "Blue",
  "Indigo",
  "Violet",
  "Purple",
  "Fuchsia",
  "Pink",
  "Rose ",
];

const InfographicsSection = () => {
  const redirectTo = useRedirect();
  const redirectionHandler = (category = "") =>
    redirectTo(`infographics/${category}`);
  return (
    <div className="rounded-lg m-2 md:m-8 p-4 bg-gray-100 hover:shadow-grey-600 hover:shadow-lg">
      <div className="flex justify-between">
        <h1 className="text-3xl text-gray-700 font-semibold">Infographics</h1>
        <p
          className="flex justify-center content-center text-lg text-gray-700 font-semibold hover:text-green-500 fill-gray-700 hover:fill-green-500"
          onClick={() => redirectionHandler("")}
        >
          <span className="cursor-pointer">View more</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
          </svg>
        </p>
      </div>
      <p className="flex font-serif text-black-500 text-lg">
        Here are the lists of most exciting infographics in each of the industry
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 p-4 gap-4">
        {products?.map((product, index) => (
          <div
            // data-aos="zoom-in"
            className="hover:shadow-green-600 hover:shadow-xl rounded-lg"
            onClick={() => redirectionHandler("1")}>
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 ">
                {/* <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              /> */}
                <img
                  class="cursor-pointer h-full w-full object-cover object-center lg:h-full lg:w-full"
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
              </div>
              <div className="mt-2 flex justify-between px-2 mb-2">
                <div>
                  <h3 className="text-sm font-semibold text-gray-700">
                    {product.name}
                  </h3>
                  {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                </div>
                {/* <p className="text-sm font-medium text-gray-900">{product.price}</p> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfographicsSection;
