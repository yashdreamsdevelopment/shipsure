import { Stack, Typography } from "@mui/material";
import React from "react";

const TextSubtextBox = ({
  title = "",
  subTitle = "",
  titleCss,
  subTitleCss,
}) => {
  return (
    <Stack height={{}}>
      <Typography
        variant="body1"
        sx={{
          fontSize: "10px",
          color: "#979dac",
          ...titleCss,
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontSize: "12px",
          color: subTitleCss?.alterTextColor ? alterTextColor : "#5c677d",
          ...subTitleCss,
        }}
      >
        {subTitle}
      </Typography>
    </Stack>
  );
};

export default TextSubtextBox;
