import { Typography } from "@mui/material";
import React from "react";

const NoItemsFound = () => {
  return (
    <Typography
      variant="body1"
      fontStyle={"italic"}
      sx={{
        fontSize: "14px",
        color: "#B6B3B1",
      }}
    >
      No Items Found
    </Typography>
  );
};

export default NoItemsFound;
