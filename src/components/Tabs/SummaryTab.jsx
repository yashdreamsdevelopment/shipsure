import { Stack } from "@mui/material";
import React from "react";
import Components from "./TabComponents/Components";
import AuthorizedSupplier from "./TabComponents/AuthorizedSupplier";
import Suppliers from "./TabComponents/Suppliers";
import Invoices from "./TabComponents/Invoices";
import FreightDetails from "./TabComponents/FreightDetails";
import Delivery from "./TabComponents/Delivery";
import Recieved from "./TabComponents/Recieved";
import Feedback from "./TabComponents/Feedback";
import CostCompare from "./TabComponents/CostCompare";

const SummaryTab = () => {
  return (
    <Stack spacing={1}>
      <Components />
      <AuthorizedSupplier />
      <Suppliers />
      <CostCompare />
      <Invoices />
      <FreightDetails />
      <Delivery />
      <Recieved />
      <Feedback />
    </Stack>
  );
};

export default SummaryTab;
