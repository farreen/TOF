import DefaultLayout from "../../../layouts/default-layout";
import HomePage from "../pages/home-page";

export const HomePageRouter = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      // { path: "home", element: <HomePage /> },
    ],
  },
];
