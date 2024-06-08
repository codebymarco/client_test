import { Route, RouteObject } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SharedLayout from "./layouts/SharedLayout";
import SharedLayout2 from "./layouts/SharedLayout2";

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
      <SharedLayout2>
        {/* Use SharedLayout as the layout */}
        <Route index element={<About />} />
      </SharedLayout2>
    ),
  },
];

export default routes;
