import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/Layout/Layout";

import StatisticsPage from "../pages/Statistics/StatisticsPage";
import HomePage from "../pages/HomePage/HomePage";
import PomodoroPage from "../pages/Pomodoro/PomodoroPage";
import CalendarPage from "../pages/Calendar/CalendarPage";


const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
          {
            path: "/pomodoro",
            element: <PomodoroPage/>,
          },
          {
            path: "/",
            element: <HomePage/>,
          },
          {
            path: 'statistics',
            element: <StatisticsPage/>,
          },
          {
            path: "calendar",
            element: <CalendarPage/>,
          },
      ],
    },
  ]);

  export default router;