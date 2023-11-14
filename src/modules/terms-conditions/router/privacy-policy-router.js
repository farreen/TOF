import DefaultLayout from "../../../layouts/default-layout";
import Listing from "../pages/listing";
import Details from "../pages/details";

export const TermsConditionsRouter = [
  {
    path: "/terms-conditions",
    element: <DefaultLayout />,
    children: [
      { path: "/terms-conditions", element: <Listing /> },
      // { path: "home", element: <HomePage /> },
    ],
  },
];
