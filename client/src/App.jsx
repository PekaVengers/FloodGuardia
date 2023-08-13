import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Map from "./pages/Map";
import Donate from "./components/Donate";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route element={<Home />} index />
    <Route element={<Map />} path="maps" />
    <Route element={<Donate />} path="donate" />
  </Route>
));

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}