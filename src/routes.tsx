import { Route, RouteObject } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SharedLayout from "./layouts/SharedLayout";

const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <SharedLayout>
        {/* Use SharedLayout as the layout */}
        <Route index element={<Home />} />
      </SharedLayout>
    ),
  },
  {
    path: "/about",
    element: (
      <SharedLayout>
        {/* Use SharedLayout as the layout */}
        <Route index element={<About />} />
      </SharedLayout>
    ),
  },
];

export default routes;
