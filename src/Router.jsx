import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import About from "./About";
import Project from "./Projects/Project";
import Contact from "./Contact";

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
        element: <Project></Project>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
    ]
  },
]);

export default router;