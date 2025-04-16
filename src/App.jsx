import React from "react";
import { RouterProvider } from "react-router-dom";
import Router from "./router/Router";
import { Toaster } from "react-hot-toast";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <div>
      <Toaster />
      <RouterProvider router={Router} />
    </div>
  );
};

export default App;
