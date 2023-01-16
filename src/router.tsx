import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Search from "./pages/Search";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: ":id",
        element: <Detail />,
      },
    ],
  },
]);

export default router;
