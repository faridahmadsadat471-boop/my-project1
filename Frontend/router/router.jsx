import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../components/Dashbord";
import Login from "../components/Loginpage";
import LoginForm from "../components/login-form";
import About from "../components/Aboutpage";
import Contact from "../components/Contectpage";
import Home from "../page/Home";
import BookInfo from "../components/BookInfo";
import UpdateBook from "../components/UpdateBook";

import Navbar from "../components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <LoginForm /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/:id", element: <BookInfo /> },
      { path: "/update/:id", element: <UpdateBook /> },
    ],
  },
]);

export default router;
