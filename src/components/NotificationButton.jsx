import React from "react";
import { Badge, IconButton, styled } from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

const NotificationBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-dot": {
    height: "6px",
    minWidth: "6px",
    borderRadius: "50%",
    backgroundColor: "red",
  },
}));

const NotificationButton = () => {
  return (
    <IconButton disableRipple>
      <NotificationBadge
        variant="dot"
        overlap="circular"
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          "& .MuiBadge-badge": {
            top: "40%",
            right: "30%",
          },
        }}
      >
        <NotificationsOutlinedIcon sx={{ fontSize: "20px" }} />
      </NotificationBadge>
    </IconButton>
  );
};

export default NotificationButton;
