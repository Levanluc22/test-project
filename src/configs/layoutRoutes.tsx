import HomePage from "@pages/homepage";

import { RouteProps } from "react-router-dom";

const layoutRouters: RouteProps[] = [
  {
    path: "",
    element: <HomePage />,
  },
];

export default layoutRouters;
