import { createBrowserRouter } from "react-router-dom";
import MainLayout from "~/layouts/main";
import Home from "~/pages/home";
import NotFound from "~/pages/not-found";
import Projects from "~/pages/projects";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
