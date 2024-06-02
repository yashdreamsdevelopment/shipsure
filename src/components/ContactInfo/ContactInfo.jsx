import { Box, Stack, Typography, colors } from "@mui/material";
import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import FaxOutlinedIcon from "@mui/icons-material/FaxOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const contactDetails = [
  { icon: <PhoneIcon />, text: "+123 456 7890" },
  { icon: <HomeIcon />, text: "123 Main St, Anytown, USA" },
  { icon: <EmailIcon />, text: "example@mail.com" },
];

const commanIconStyle = {
  fontSize: "16px",
};

const iconMap = {
  ADDRESS: <LocationOnOutlinedIcon color="success" sx={commanIconStyle} />,
  TELEPHONE: <PhoneOutlinedIcon color="success" sx={commanIconStyle} />,
  FAX: <FaxOutlinedIcon color="success" sx={commanIconStyle} />,
  MAIL: <EmailOutlinedIcon color="success" sx={commanIconStyle} />,
};

const ContactInfo = ({ info }) => {
  const keys = Object.keys(info);

  return (
    <Box sx={{ width: "100%", mb: 0 }}>
      {keys.map((key, index) => (
        <Stack
          key={index}
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{ mb: 0 }}
        >
          {iconMap[key]}
          <Typography
            component={"p"}
            variant="body1"
            sx={{
              fontSize: "12px",
              color: "#008A25",
              cursor: "pointer",
              textDecoration: key === "MAIL" ? "underline" : "none",
            }}
            gutterBottom={false}
          >
            {info[key]}
          </Typography>
        </Stack>
      ))}
    </Box>
  );
};

export default ContactInfo;
