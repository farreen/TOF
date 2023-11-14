import CmsLayout from "../../../layouts/cms-layout";
import CmsAdmin from "../pages/cms-admin";
import Login from "../pages/login";

export const CmsAdminRouter = [
  {
    path: "/cms",
    element: <CmsLayout/>,
    children: [
      { path: "/cms", element: <Login /> },
      { path: "admin-panel", element: <CmsAdmin /> },
      // { path: "home", element: <HomePage /> },
    ],
  },
];
