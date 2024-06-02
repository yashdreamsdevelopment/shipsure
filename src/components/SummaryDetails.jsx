import { Paper, Box } from "@mui/material";
import React from "react";
import SummaryDetailsHeader from "./SummaryDetailsHeader";
import Divider from "@mui/material/Divider";
import OrderActions from "./OrderActions";
import SummaryPanel from "./SummaryPanel";

const SummaryDetails = () => {
  return (
    <Paper
      component={"section"}
      sx={{ borderRadius: "12px", overflow: "hidden" }}
    >
      <Box component={"section"} minHeight={"660px"}>
        <SummaryDetailsHeader />
        <Divider />
        <OrderActions />
        <Divider />
        <SummaryPanel />
      </Box>
    </Paper>
  );
};

export default SummaryDetails;
