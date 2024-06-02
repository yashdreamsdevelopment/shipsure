import React, { memo } from "react";
import { Card, Box, Stack, Typography } from "@mui/material";
import AnchorOutlinedIcon from "@mui/icons-material/AnchorOutlined";
import PushPinIcon from "@mui/icons-material/PushPin";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Profiler from "./CustomAvatar";
import { ORDERS_DATA_TAGS_MAP } from "../data";
import TextSubtextBox from "./TextSubText";
import SignatureButton from "./SignatureButton";

const OrderCard = ({
  index,
  orderId,
  clientName = "",
  serviceData,
  profileText,
  profileBgColor,
  tags = [],
}) => {
  let currenctFocus = true;

  // JSX RENDERERs
  const getServiceTagIcons = () => {
    const tagsMap = {
      [ORDERS_DATA_TAGS_MAP.ANCHOR]: (
        <AnchorOutlinedIcon key={"acnchor"} sx={{ fontSize: "18px" }} />
      ),
      [ORDERS_DATA_TAGS_MAP.PIN]: (
        <PushPinIcon key={"pin"} sx={{ fontSize: "18px" }} />
      ),
      [ORDERS_DATA_TAGS_MAP.INFO]: (
        <InfoOutlinedIcon pin={"info"} sx={{ fontSize: "18px" }} />
      ),
    };

    const applicableTag = tags.map((tag) => tagsMap[tag]);

    return applicableTag.map((tag) => tag);
  };

  return (
    <Card
      raised={index == 0 ? true : false}
      sx={{
        borderRadius: "10px",
        p: 2,
        border: index == 0 ? "1px solid black" : "none",
        width: "auto",
        maxHeight: "115px",
        backgroundColor: "#e8eced3d",
      }}
      elevation={index == 0 ? 2 : 0}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="top">
        <Box sx={{}}>
          <Typography
            variant="body2"
            sx={{ fontWeight: "bold", fontSize: "14px" }}
            color={"success"}
          >
            {orderId}
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", fontSize: "14px" }}
          >
            {clientName.toUpperCase()}
          </Typography>
        </Box>
        <Stack direction={"row"} alignItems={"center"} spacing={1}>
          {getServiceTagIcons()}
          <Profiler
            alt="altText"
            text={profileText}
            cssProperties={{ width: 25, height: 25 }}
            bgcolor={profileBgColor}
          />
        </Stack>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="end"
        mt={1}
      >
        <Box>
          <SignatureButton />
        </Box>
        <Box sx={{ padding: "0px 0px" }}>
          <TextSubtextBox
            title={serviceData?.type}
            subTitle={serviceData?.date}
            titleCss={{ textAlign: "end", fontSize: "12px" }}
            subTitleCss={{
              textAlign: "end",
              fontSize: "12px",
              color: "#979dac",
            }}
          />
        </Box>
      </Stack>
    </Card>
  );
};

export default memo(OrderCard);
