import React from "react";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Main from "./component/Main";
import "./styles/general.css";
import "./styles/header.css";
import "./styles/sidebar.css";
import "./styles/video.css";

export default function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Main />
    </>
  );
}
