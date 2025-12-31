import { createBrowserRouter } from "react-router";
import App from "./App";
import Homepage from "./pages/homepage/Homepage";
import Users from "./pages/users/Users";
import User from "./pages/users/User";

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      { index: true, Component: Homepage },
      { path: "/users", Component: Users },
      { path: "/users/:userId", Component: User },
    ],
  },
]);

export default router;
