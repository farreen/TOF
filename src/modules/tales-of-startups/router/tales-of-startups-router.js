import DefaultLayout from "../../../layouts/default-layout";
import Details from "../pages/details";
import Listing from "../pages/listing";

export const TalesOfStartupsRouter = [
  {
    path: "/tales-of-startups",
    element: <DefaultLayout />,
    children: [
      { path: "/tales-of-startups", element: <Listing /> },
      { path: "/tales-of-startups/:category", element: <Details /> },
      // { path: "home", element: <HomePage /> },
    ],
  },
];
