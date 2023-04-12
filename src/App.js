import { Routes, createBrowserRouter, Route } from "react-router-dom";
import { Home, About, Search } from "./page";
import { PrimarySearchAppBar } from "./components/Header";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

export const App = () => {
  return (
    <div>
      <PrimarySearchAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
};
