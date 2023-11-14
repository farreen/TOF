import DefaultLayout from "../../../layouts/default-layout";
import Listing from "../pages/listing";
import Details from "../pages/details";

export const ContactUsRouter = [
  {
    path: "/contact-us",
    element: <DefaultLayout />,
    children: [
      { path: "/contact-us", element: <Listing /> },
      // { path: "home", element: <HomePage /> },
    ],
  },
];
