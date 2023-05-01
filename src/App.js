import React from "react";
import Routes from "./routes";
import { useRoutes } from "react-router-dom";
import "./App.css";

import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";

export default function App() {
  let router = useRoutes(Routes);
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        {router}
      </div>
    </div>
  );
}
