import { createBrowserRouter } from "react-router";
import App from "./App";
import Homepage from "./pages/homepage/Homepage";
import User from "./pages/users/User";
import Users from "./pages/users/Users";

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      { index: true, Component: Homepage },
      { path: "user", Component: User },
      { path: "users", Component: Users },
    ],
  },
]);

export default router;
