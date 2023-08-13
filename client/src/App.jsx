import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Map from "./pages/Map";
import Donate from "./pages/Donate";
import Education from "./pages/Education";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route element={<Home />} index />
    <Route element={<Map />} path="maps" />
    <Route element={<Donate />} path="donate" />
    <Route element={<Education />} path="education" />
  </Route>
));

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}