import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import Profiler from "./CustomAvatar";
import { ORDERS_DATA } from "../data";
import SignatureButton from "./SignatureButton";
import TextSubtextBox from "./TextSubText";
import CustomButton from "./CustomButton";
import Divider from "@mui/material/Divider";

const SummaryDetailsHeader = () => {
  const tempData = ORDERS_DATA[0];

  return (
    <Box bgcolor={"#F7F9F9"} overflow={"hidden"} p={2} gap={2}>
      <Stack direction={"row"} justifyContent={"space-between"} mb={1}>
        <Stack
          direction={"row"}
          spacing={1}
          alignItems={"center"}
          sx={{ flex: 1 }}
        >
          <Profiler
            text={tempData.profileText}
            bgcolor={tempData.tagColor}
            cssProperties={{ width: 25, height: 25 }}
          />
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", fontSize: "14px", letterSpacing: "1px" }}
          >
            {tempData.orderId}
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", fontSize: "14px", letterSpacing: "1px" }}
          >
            {tempData.clientName?.toUpperCase()}{" "}
          </Typography>
        </Stack>
        <SignatureButton />
      </Stack>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"flex-end"}
      >
        <Stack direction={"row"} spacing={3}>
          <TextSubtextBox
            title="Date Requested"
            subTitle={tempData.serviceData.date}
            subTitleCss={{
              color: "black",
              fontWeight: "bold",
            }}
          />
          <TextSubtextBox
            title="Type"
            subTitle={tempData.serviceData.type}
            subTitleCss={{
              color: "black",
              fontWeight: "bold",
            }}
          />
          <TextSubtextBox
            title="Account Code"
            subTitle={`${tempData.accountCode} - ${tempData.accountHolderName}`}
            subTitleCss={{
              color: "black",
              fontWeight: "bold",
            }}
          />
        </Stack>
        <Stack direction={"row"} spacing={2} alignSelf={"baseline"}>
          <CustomButton
            variant={"text"}
            disableRipple
            color="success"
            size={"small"}
            sx={{
              textTransform: "none",
              textDecoration: "underline",
              ":hover": {
                backgroundColor: "transparent",
                textDecoration: "underline",
              },
            }}
            label={"Order Summary"}
          />
          <CustomButton
            variant={"text"}
            disableRipple
            color="success"
            size={"small"}
            sx={{
              textTransform: "none",
              textDecoration: "underline",
              ":hover": {
                backgroundColor: "transparent",
                textDecoration: "underline",
              },
            }}
            label={"Order Progress"}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default SummaryDetailsHeader;
