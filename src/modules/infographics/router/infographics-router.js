import DefaultLayout from "../../../layouts/default-layout";
import Listing from "../pages/listing";
import Details from "../pages/details";

export const InfographicRouter = [
  {
    path: "/infographics",
    element: <DefaultLayout />,
    children: [
      { path: "/infographics", element: <Listing /> },
      { path: "/infographics/:slug", element: <Details /> },
      // { path: "home", element: <HomePage /> },
    ],
  },
];
