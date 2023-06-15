import React, { useState } from "react";
import { Outlet } from "react-router";
// import Header from "./header";

export default function RouteLayout() {
  return (
    <div className="route-layout">
      {/* <Header /> */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}
