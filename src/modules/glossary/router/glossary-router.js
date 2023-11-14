import DefaultLayout from "../../../layouts/default-layout";
import Listing from "../pages/listing";
import Details from "../pages/details";

export const GlossaryRouter = [
  {
    path: "/glossary",
    element: <DefaultLayout />,
    children: [
      { path: "/glossary", element: <Listing /> },
      { path: "/glossary/:slug", element: <Details /> },
      // { path: "home", element: <HomePage /> },
    ],
  },
];
