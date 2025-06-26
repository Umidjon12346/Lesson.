import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import App from "../App";
import User from "../pages/Users";
import SingleUser from "../pages/SingleUser";
import SignIn from "../pages/auth/SignIn";
import Index from "../pages/Index";
import Comments from "../pages/Comment";
import Products from "../pages/Products";
import Posts from "../pages/Post";
import Students from "../pages/Students";

function Router() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<SignIn />} />

        <Route path="api" element={<Index />}>
          <Route path="users" element={<User />} />
          <Route path="users/:id" element={<SingleUser />} />
          <Route path="comments" element={<Comments />} />
          <Route path="products" element={<Products />} />
          <Route path="posts" element={<Posts />} />
          <Route path="students" element={<Students />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={route} />;
}

export default Router;
