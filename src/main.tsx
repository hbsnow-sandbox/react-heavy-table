import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { Layout } from "./layout.tsx";
import { CssBaseline, CssVarsProvider } from "@mui/joy";
import { Home } from "./pages/home.tsx";
import { Example01 } from "./pages/example-01.tsx";
import { Example02 } from "./pages/example-02.tsx";
import { Example03 } from "./pages/example-03.tsx";
import { Example04 } from "./pages/example-04.tsx";
import { Example05 } from "./pages/example-05.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "/example-01", element: <Example01 /> },
      { path: "/example-02", element: <Example02 /> },
      { path: "/example-03", element: <Example03 /> },
      { path: "/example-04", element: <Example04 /> },
      { path: "/example-05", element: <Example05 /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CssVarsProvider>
      <CssBaseline />
      <RouterProvider router={router} />
    </CssVarsProvider>
  </React.StrictMode>
);
