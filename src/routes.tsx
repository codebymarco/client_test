import { Route, RouteObject } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SharedLayout from "./layouts/SharedLayout";
import SharedLayout2 from "./layouts/SharedLayout2";
import Console from "./components/Console";

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
        {/* Use SharedLayout2 as the layout */}
        <Route index element={<About />} />
      </SharedLayout2>
    ),
  },
  {
    path: "/console/:userid",
    element: (
      <SharedLayout>
        {/* Use SharedLayout as the layout */}
        <Route index element={<Console />} />
      </SharedLayout>
    ),
  },
];

export default routes;
