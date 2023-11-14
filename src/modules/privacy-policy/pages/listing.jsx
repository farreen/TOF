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
          Privacy Policy
        </h2>
        <p className="mt-2 text-sm text-gray-500 text-start">
          At www.talesoffinance.com, we are committed to respecting your privacy
          and protecting your personal information. This Privacy Policy outlines
          how we collect, use, and safeguard your data when you use our website.
        </p>
        <h3 className="text-xl font-semibold text-gray-600 text-start line-clamp-2">
          Information We Collect
        </h3>
        <p className="mt-2 text-sm text-gray-500 text-start">
          <b>Public Domain Data:</b> We source information from the public
          domain, including websites, videos, Wikipedia, and other publicly
          available sources, to provide educational content on topics related to
          finance, startups, and technology.
        </p>
        <p className="mt-2 text-sm text-gray-500 text-start">
          <b>Cookies:</b> Like many websites, we may use cookies to enhance your
          browsing experience. You can manage cookie preferences through your
          web browser settings.
        </p>
        <p className="mt-2 text-sm text-gray-500 text-start">
          <b>User-Submitted Content:</b> If you choose to submit comments or
          other content on our website, we may collect and store this
          information.
        </p>
        <h3 className="text-xl font-semibold text-gray-600 text-start line-clamp-2">
          How We Use Your Information
        </h3>
        <p className="mt-2 text-sm text-gray-500 text-start">
          Educational Purposes: We shall use the information submitted by the
          user in line with the rules and regulations prevalent in the
          country/state. We do not use this information for any commercial or
          marketing purposes.
        </p>
        <p className="mt-2 text-sm text-gray-500 text-start">
          <b>Improvement and Analytics:</b> We may analyze user behaviour and
          interactions with our content to improve the user experience on our
          website. However, this analysis is not used to identify individual
          users.
        </p>
        <h3 className="text-xl font-semibold text-gray-600 text-start line-clamp-2">
          Data Sharing
        </h3>
        <p className="mt-2 text-sm text-gray-500 text-start">
          <b>Third-Party Links:</b> Our website may contain links to third-party
          websites. Please note that we are not responsible for the privacy
          practices of these third-party websites.
        </p>
        <h3 className="text-xl font-semibold text-gray-600 text-start line-clamp-2">
          Your Choices
        </h3>
        <p className="mt-2 text-sm text-gray-500 text-start">
          <b>User-Submitted Content:</b> If you submit content on our website,
          you have control over the information you provide. Please ensure the
          content you submit is accurate and appropriate.
        </p>
        <p className="mt-2 text-sm text-gray-500 text-start">
          <b>Cookies:</b> You can manage your cookie preferences through your
          web browser settings.
        </p>
        <h3 className="text-xl font-semibold text-gray-600 text-start line-clamp-2">
          Security
        </h3>
        <p className="mt-2 text-sm text-gray-500 text-start">
          We take reasonable measures to protect your information and ensure its
          security, but no method of transmission over the internet or
          electronic storage is completely secure.
        </p>
        <h3 className="text-xl font-semibold text-gray-600 text-start line-clamp-2">
          Changes to this Policy
        </h3>
        <p className="mt-2 text-sm text-gray-500 text-start">
          We may update this Privacy Policy to reflect changes in our practices
          or for other operational, legal, or regulatory reasons. We encourage
          you to periodically review this policy for any updates.
        </p>
        <h3 className="text-xl font-semibold text-gray-600 text-start line-clamp-2">
          Contact Us
        </h3>
        <p className="mt-2 text-sm text-gray-500 text-start">
          If you have any questions or concerns about our Terms of Service and
          Privacy Policy, please contact us at contact@talesoffinance.com.
        </p>
      </div>
    </>
  );
};

export default Listing;
