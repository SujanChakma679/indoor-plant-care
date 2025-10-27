import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Layout/Root";
import Home from "./Components/Home/Home";
import Profile from "./Profile/Profile";
import Plants from "./Plants/Plants";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import error from "./assets/error-404.png";
import AuthLayout from "./Layout/AuthLayout";
import AuthProvider from "./Provider/AuthProvider";
import PrivateRoute from "./Provider/PrivateRoute";
import PlantDetails from "./Plants/PlantDetails";
import PlantBooking from "./Pages/PlantBooking";
import Loading from "./Pages/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },

  {
    path: "profile",
    element: (
      <PrivateRoute>
        <Profile />
      </PrivateRoute>
    ),
  },

    {
    path: "plants",
    element: <Plants />,
    loader: () => fetch("/plants.json"),
    hydrateFallbackElement: <Loading></Loading>
  },
 
  {
    path: "plants/:id",
    element: <PlantDetails />,
    loader: () => fetch("/plants.json"),
     hydrateFallbackElement: <Loading></Loading>
  },
  {
    path: "plants/:id/book",
    element: <PlantBooking />,
  },

  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },

  {
    path: "*",
    element: (
      <div className="flex items-center justify-center">
        <img src={error} alt="" />
      </div>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
