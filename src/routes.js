import React, { Suspense } from "react";

const routes = [
  {
    path: "/login",
    render: (routeProps) => {
      const LoginComponent = React.lazy(() => import("./page/LoginRegister"));
      return <LoginComponent isLogin {...routeProps} />;
    },
  },
  {
    path: "/register",
    render: (routeProps) => {
      const RegisterComponent = React.lazy(() => import("./page/RegisterPage"));
      return <RegisterComponent {...routeProps} />;
    },
  },
  {
    path: "/about",
    render: () => <div>{"About Page"}</div>,
  },
  {
    path: "/protected1",
    render: () => (
      <div>{"Protected 1st Page only visible to loggedIn userss"}</div>
    ),
    requiresLogin: true,
  },
  {
    path: "/protected2",
    render: () => (
      <div>{"Protected 2nd Page only visible to loggedIn userss"}</div>
    ),
    requiresLogin: true,
  },
  {
    path: "/",
    render: () => <div>{"Home Page"}</div>,
  },
];

export default routes;
