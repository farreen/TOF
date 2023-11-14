import DefaultLayout from "../../../layouts/default-layout";
import Listing from "../pages/listing";
import Details from "../pages/details";

export const PrivacyPolicyRouter = [
  {
    path: "/privacy-policy",
    element: <DefaultLayout />,
    children: [
      { path: "/privacy-policy", element: <Listing /> },
      { path: "/privacy-policy/:slug", element: <Details /> },
      // { path: "home", element: <HomePage /> },
    ],
  },
];
