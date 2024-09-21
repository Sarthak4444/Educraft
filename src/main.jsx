import React from "react";
import "./Styles/index.css";
import "./Styles/tailwind.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import NotFound from "./Pages/NotFound";
import EducraftCourses from "./Pages/EducraftCourses";
import EducraftCoursesDetails from "./Pages/EducraftCoursesDetails";
import EducraftCoursesPricing from "./Pages/EducraftCoursesPricing";
import EducraftJoinAsTeacher from "./Pages/EducraftJoinAsTeacher";
import AllMentors from "./Pages/AllMentors";
import EducraftPage from "./Pages/Educraft";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <EducraftPage />,
      },
      {
        path: "/EducraftCourses",
        element: <EducraftCourses />,
      },
      {
        path: "/EducraftCoursesDetails",
        element: <EducraftCoursesDetails />,
      },
      {
        path: "/EducraftCoursesPricing",
        element: <EducraftCoursesPricing />,
      },
      {
        path: "/EducraftJoinAsTeacher",
        element: <EducraftJoinAsTeacher />,
      },
      {
        path: "/AllMentors",
        element: <AllMentors />,
      },
    ],
  },
]);

const root = createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={router} />);
