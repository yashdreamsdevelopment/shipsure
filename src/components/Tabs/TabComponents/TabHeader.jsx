import { Chip, Typography } from "@mui/material";
import React from "react";

const TabHeader = ({ title, badge = null }) => {
  return (
    <Typography
      variant="body1"
      component={"h5"}
      mb={1}
      sx={{
        textDecoration: "capatilize",
        fontWeight: "bold",
        fontSize: "14px",
        letterSpacing: "1px",
        alignItems: "center",
      }}
    >
      {title.toUpperCase()}{" "}
      {badge && (
        <Chip
          label={badge}
          sx={{
            backgroundColor: "#DDE3E5",
            px: "1px",
            height: "20px",
            marginLeft: "10px",
            color: "#a0a0a0",
          }}
        />
      )}
    </Typography>
  );
};

export default TabHeader;
