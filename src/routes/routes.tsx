import { Navigate, RouteObject } from "react-router-dom";


import StatisticsPage from "../pages/Statistics/StatisticsPage";
import HomePage from "../pages/Home/HomePage";
import PomodoroPage from "../pages/Pomodoro/PomodoroPage";
import CalendarPage from "../pages/Calendar/CalendarPage";
import RegisterPage from "../pages/Register/RegisterPage";
import LoginPage from "../pages/Login/LoginPage";


import Layout from "../components/Layouts/MainLayout/Layout";
import AuthLayout from "../components/Layouts/AuthLayout";



export const createLoginRoutes = (): RouteObject[] => {
  return[
    {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/login" />,
      },
      {
        path: '/login',
        element: <LoginPage />

      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
      {
        path: '*',
        element: <Navigate to="/login" />,
      },
    ],
  },
  ]
}

export const createAuthRotes = (): RouteObject[] => {
  return [
    {
      path: '/',
      element: <Layout />,
      children: [
      { 
      path: "/",
      element: <HomePage />
      },
      {
        path: "/pomodoro",
        element: <PomodoroPage />
      },
      {
        path: "/statistics",
        element: <StatisticsPage />
      },
      {
        path: "/calendar",
        element: <CalendarPage />
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      }]
    },
  ];
};
