import { Box } from "@mui/material";
import React from "react";

const CommanWrapper = ({ children }) => {
  return (
    <Box p={2} borderRadius={"5px"} bgcolor={"#F7F9F9"}>
      {children}
    </Box>
  );
};

export default CommanWrapper;
