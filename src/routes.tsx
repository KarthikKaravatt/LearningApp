import { createBrowserRouter } from "react-router-dom";
import App from "./pages/App.tsx";
import Group from "./pages/Group.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/group",
    element: <Group />,
  },
]);
