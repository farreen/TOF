import React from "react";
import useRedirect from "../../../custom-hooks/common/useRedirect";
import { blogsListData } from "../../../demo-data/blogs-data";
import { glossaryData } from "../../../demo-data/glosarry-data";

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
  const redirectTo = useRedirect();
  const redirectionHandler = (category = "") => redirectTo(`blog/${category}`);
  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-1 gap-4 mx-auto p-8 m-10 ">
        <h2 className="text-3xl font-semibold text-gray-900 text-start line-clamp-2 mb-2">
          Terms of Service
        </h2>
        <p className="mt-2 text-sm text-gray-500 text-start">
          Welcome to www.talesoffinance.com ("we," "us," or "our"). Please read
          these Terms of Service and Privacy Policy carefully before using our
          website.
        </p>
        <p className="mt-2 text-sm text-gray-500 text-start">
          By accessing or using our website, you agree to comply with and be
          bound by these Terms of Service and Privacy Policy. If you do not
          agree with these terms, please do not use our website.
        </p>
        <h3 className="text-xl font-semibold text-gray-600 text-start line-clamp-2">
          1. Use of Our Website
        </h3>
        <p className="mt-2 text-sm text-gray-500 text-start">
          Our website is intended for educational purposes only. We provide
          information related to finance, startups, and related topics, sourced
          from the public domain.
        </p>
        <p className="mt-2 text-sm text-gray-500 text-start">{`We do not claim ownership or copyright over the data presented on our website. All data, information, and content are gathered from publicly available sources such as websites, videos, Wikipedia, etc.`}</p>
        <p className="mt-2 text-sm text-gray-500 text-start">{`While we strive to provide accurate and up-to-date information, we cannot guarantee the accuracy or completeness of the content. Users are encouraged to verify any information provided and should not rely solely on the content for making critical financial decisions.`}</p>
        <p className="mt-2 text-sm text-gray-500 text-start">
          Users must use the information on our website responsibly and in
          compliance with all applicable laws and regulations.
        </p>
        <h3 className="text-xl font-semibold text-gray-600 text-start line-clamp-2">
          2. User Content
        </h3>
        <p className="mt-2 text-sm text-gray-500 text-start">
          Users may have the option to submit comments, feedback, or other
          content on our website. By doing so, you grant us a non-exclusive,
          worldwide, royalty-free license to use, reproduce, modify, and
          distribute your content in connection with our website.
        </p>
        <p className="mt-2 text-sm text-gray-500 text-start">
          Users are responsible for the accuracy and appropriateness of the
          content they submit.
        </p>
        <h3 className="text-xl font-semibold text-gray-600 text-start line-clamp-2">
          3. Copyright and Intellectual Property
        </h3>
        <p className="mt-2 text-sm text-gray-500 text-start">
          Our website design, logo, and any original content created by us are
          protected by copyright laws. All rights are reserved.
        </p>
        <p className="mt-2 text-sm text-gray-500 text-start">
          If you believe that any content on our website infringes your
          copyright, please contact us with the details, and we will promptly
          investigate and take appropriate action.
        </p>
        <h3 className="text-xl font-semibold text-gray-600 text-start line-clamp-2">
          4. Links to Other Websites
        </h3>
        <p className="mt-2 text-sm text-gray-500 text-start">
          Our website may contain links to third-party websites for additional
          information. We are not responsible for the content, privacy
          practices, or any other aspect of these third-party websites.
        </p>
        <h3 className="text-xl font-semibold text-gray-600 text-start line-clamp-2">
        5. Modifications
        </h3>
        <p className="mt-2 text-sm text-gray-500 text-start">
          We reserve the right to modify, update, or discontinue any part of our
          website, including these Terms of Service, without notice. It is your
          responsibility to review these terms periodically for changes.
        </p>
        <p className="mt-2 text-sm text-gray-500 text-start"></p>
        <p className="mt-2 text-sm text-gray-500 text-start"></p>
        <p className="mt-2 text-sm text-gray-500 text-start"></p>
      </div>
    </>
  );
};

export default Listing;
