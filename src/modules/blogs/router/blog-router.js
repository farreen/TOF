import DefaultLayout from "../../../layouts/default-layout";
import Listing from "../pages/listing";
import Details from "../pages/details";

export const BlogRouter = [
  {
    path: "/blogs",
    element: <DefaultLayout />,
    children: [
      { path: "/blogs", element: <Listing /> },
      { path: "/blogs/:slug", element: <Details /> },
      // { path: "home", element: <HomePage /> },
    ],
  },
];
