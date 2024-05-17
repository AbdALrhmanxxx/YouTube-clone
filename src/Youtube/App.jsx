import React, { useState } from "react";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Main from "./component/Main";
import "./styles/general.css";
import "./styles/header.css";
import "./styles/sidebar.css";
import "./styles/video.css";

export default function App() {
  const [open, setOpen] = useState(false);
  const setIsOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <Header open={open} setIsOpen={setIsOpen} />
      <Sidebar open={open} />
      <Main open={open} />
    </>
  );
}
