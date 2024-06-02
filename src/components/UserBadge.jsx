import React, { useState } from "react";
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
  styled,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Profiler from "./CustomAvatar";

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  borderRadius: "50px",
  alignItems: "center",
  justifyContent: "center",
  padding: "0px 5px",
  height: "30px",
}));

const UserBadge = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledCard sx={{}}>
      <Profiler
        src="https://mui.com/static/images/avatar/2.jpg"
        alt="user profile"
        text="DR"
        cssProperties={{
          width: 18,
          height: 18,
        }}
      />
      <Box sx={{ flexGrow: 1, ml: 1 }}>
        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
          Daneil Rogers
        </Typography>
      </Box>
      <IconButton onClick={handleMenuOpen} sx={{ ml: 0 }}>
        <ArrowDropDownIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={handleMenuClose}>
          <AccountCircleIcon sx={{ mr: 1 }} />
          Profile
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <SettingsIcon sx={{ mr: 1 }} />
          Settings
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <ExitToAppIcon sx={{ mr: 1 }} />
          Sign Out
        </MenuItem>
      </Menu>
    </StyledCard>
  );
};

export default UserBadge;
