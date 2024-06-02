import { Button } from "@mui/material";
import React from "react";

const CustomButton = ({
  startIcon = null,
  EndIcon = null,
  component = "button",
  variant,
  size,
  label,
  ...props
}) => {
  return (
    <Button
      variant={variant}
      startIcon={startIcon}
      endIcon={EndIcon}
      component={component}
      size={size}
      {...props}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
