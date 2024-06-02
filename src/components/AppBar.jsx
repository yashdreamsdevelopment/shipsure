import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import NotificationButton from "./NotificationButton";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import SearchButtonWithInput from "./SearchButtonWithInput";
import UserBadge from "./UserBadge";

const AppBar = () => {
  return (
    <Box p={"5px"} mb={2}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography variant="h6" component={"h6"}>
          Procurement
        </Typography>

        <Stack direction={"row"} spacing={1} alignItems={"center"}>
          <SearchButtonWithInput />
          <NotificationButton />
          <IconButton disableRipple>
            <AppsRoundedIcon />
          </IconButton>
          <UserBadge />
        </Stack>
      </Stack>
    </Box>
  );
};

export default AppBar;
