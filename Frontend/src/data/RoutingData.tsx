import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

// Lazy load pages
const Home = lazy(() => import("../pages/LandingPage/LandingPage"));
const Login = lazy(() => import("../pages/LoginPage/LoginPage"));
const Register = lazy(() => import("../pages/RegisterPage/RegisterPage"));
const Converter = lazy(() => import("../pages/ConverterPage/ConverterPage"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/converter",
    element: <Converter />,
  },
];
