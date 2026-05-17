import {
  createBrowserRouter,
} from "react-router";
import userLoginView from "@/views/userLoginView";
import App from "@/App";
import Home from "@/components/Weather/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: 'weather',
        Component: Home
      }
    ]
  },
]);

export default router


