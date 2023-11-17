import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../utils/routes";

function Main() {
  return (
    <div className="main ">
      <Routes>
        {routes.map((item) => {
          return (
            <Route key={item.id} path={item.path} element={item.element} />
          );
        })}
      </Routes>
    </div>
  );
}
export default Main;
