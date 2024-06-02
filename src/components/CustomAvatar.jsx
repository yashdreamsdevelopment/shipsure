import { Avatar, Box } from "@mui/material";
import React from "react";

export default function Profiler({
  src = "",
  alt = "",
  text = "",
  cssProperties,
  bgcolor = "#000",
}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Avatar
        src={src}
        alt={alt}
        sx={{
          bgcolor: bgcolor,
          fontSize: "14px",
          ...cssProperties,
        }}
      >
        {text}
      </Avatar>
    </Box>
  );
}
