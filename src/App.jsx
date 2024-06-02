import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { Container } from "@mui/material";
import Main from "./components/Main";

const App = () => {
  return (
    <Container
      fixed={false}
      disableGutters={true}
      maxWidth={"xl"}
      sx={{ display: "flex" }}
    >
      <Sidebar />
      <Main />
    </Container>
  );
};

export default App;
