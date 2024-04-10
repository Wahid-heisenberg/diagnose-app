import React from "react";
import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "@/layouts";
import { Diagnostic, Home } from "@/pages";


const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/diagnostic" element={<Diagnostic />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
