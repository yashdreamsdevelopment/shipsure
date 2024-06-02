import React from "react";
import EditNoteIcon from "@mui/icons-material/EditNote";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import ReceiptIcon from "@mui/icons-material/Receipt";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import { Stack } from "@mui/material";
import CustomButton from "./CustomButton";

const ORDER_ACTIONS = [
  {
    icon: <EditNoteIcon />,
    action: "Edit Order Details",
  },
  {
    icon: <LocalPrintshopIcon />,
    action: "Print Order Details",
  },
  {
    icon: <FileOpenIcon />,
    action: "Change Delivery Status",
  },
  {
    icon: <ReceiptIcon />,
    action: "Reports",
  },
  {
    icon: <TouchAppIcon />,
    action: "Actions",
  },
];

const OrderActions = () => {
  return (
    <Stack
      direction={"row"}
      spacing={1}
      px={1}
      py={0.5}
      justifyContent={"flex-start"}
    >
      {ORDER_ACTIONS.map((action, index) => (
        <CustomButton
          key={index}
          variant={"text"}
          color={"success"}
          startIcon={action.icon}
          component="button"
          size="small"
          label={action.action}
          sx={{
            fontSize: "14px",
            textTransform: "none",
            ":hover": {
              backgroundColor: "transparent",
            },
          }}
        />
      ))}
    </Stack>
  );
};

export default OrderActions;
