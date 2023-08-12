import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route element={<Home />} index />
  </Route>
));

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}