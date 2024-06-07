import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<h1>home</h1>} />
          <Route path="/login" element={<h1>login</h1>} />
          <Route path="/signup" element={<h1>signup</h1>} />
          <Route path="/popup-test" element={<h1>popup</h1>} />
        </Route>

        <Route path="/console/:userID" element={<DashboardLayout />}>
          <Route index element={<h1>console</h1>} />
          <Route path="questions" element={<h1>questions</h1>} />
          <Route path="settings" element={<h1>settings</h1>} />
        </Route>

        <Route path="/console/:userID/portfolio" element={<DashboardLayout />}>
          <Route index element={<h1>portoflio</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
