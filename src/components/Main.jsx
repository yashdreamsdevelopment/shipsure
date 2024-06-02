import { Box, Container } from "@mui/material";
import React from "react";
import AppBar from "./AppBar";
import Dashboard from "./Dashboard";

const Main = () => {
  return (
    <Container
      component={"section"}
      fixed={false}
      disableGutters={true}
      maxWidth={"xl"}
    >
      <Box p={"10px"} ml={1} minHeight={"100vh"}>
        <AppBar />
        <Dashboard />
      </Box>
    </Container>
  );
};

export default Main;
