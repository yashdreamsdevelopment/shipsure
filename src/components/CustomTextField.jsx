import { TextField } from "@mui/material";
import React, { forwardRef, memo } from "react";

const CustomTextField = forwardRef(({ id, label, inputProps, type }, ref) => {
  return (
    <TextField
      ref={ref}
      id={id}
      label={label}
      type={type}
      placeholder={`Enter ${label}`}
      InputLabelProps={{
        shrink: true,
        sx: {
          "& .MuiInputBase-input::placeholder": {
            fontSize: "14px",
          },
        },
      }}
      variant="standard"
    />
  );
});

export default memo(CustomTextField);
