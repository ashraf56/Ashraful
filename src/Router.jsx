import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import About from "./About";
import Project from "./Projects/Project";
import Contact from "./Contact";
import AllProject from "./Projects/AllProject";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/project',
        element: <AllProject/>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
    ]
  },
]);

export default router;