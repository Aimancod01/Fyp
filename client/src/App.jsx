import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Error from "./pages/Error";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Main from "./pages/Main";
import Roadside from "./pages/Roadside";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
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
          path: "/main",
          element: <Main />,
        },
        {
          path: "/roadside",
          element: <Roadside />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
