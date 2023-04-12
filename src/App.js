import { createBrowserRouter } from "react-router-dom";
import { Home, About, Search } from "./page";

export const router = createBrowserRouter([
  {
    path: "/home",
    element: Home,
  },
  {
    path: "/search",
    element: Search,
  },
  {
    path: "/about",
    element: About,
  },
]);
