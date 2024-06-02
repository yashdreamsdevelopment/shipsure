import React from "react";
import CustomButton from "./CustomButton";
import DirectionsBoatOutlinedIcon from "@mui/icons-material/DirectionsBoatOutlined";

const SignatureButton = () => {
  return (
    <CustomButton
      startIcon={
        <DirectionsBoatOutlinedIcon
          sx={{
            color: "#0F568A",
          }}
        />
      }
      EndIcon={null}
      component="button"
      variant="contained"
      size="small"
      label="Lorem Ipsum"
      sx={{
        backgroundColor: "#80E7FF",
        color: "#0F568A",
        fontSize: "12px",
        borderRadius: "8px",
        textTransform: "none",
        ":hover": {
          backgroundColor: "#4bddfe",
        },
      }}
      disableRipple
      disableElevation
    />
  );
};

export default SignatureButton;
