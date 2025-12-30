import { createBrowserRouter } from "react-router";
import App from "./App";
import Homepage from "./pages/homepage/Homepage";

const router = createBrowserRouter([
  {
    Component: App,
    children: [{ index: true, Component: Homepage }],
  },
]);

export default router;
