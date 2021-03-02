import Login from "./page/LoginRegister";

const routes = [
  {
    path: "/login",
    render: (routeProps) => <Login isLogin {...routeProps} />,
  },
  {
    path: "/register",
    render: () => <div>{"Register Page"}</div>,
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
