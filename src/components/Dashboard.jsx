import { Container, Grid } from "@mui/material";
import React from "react";
import Summary from "./Summary";
import SummaryDetails from "./SummaryDetails";

const Dashboard = () => {
  return (
    <Grid container component={"section"} spacing={2}>
      <Grid item xs={4}>
        <Summary />
      </Grid>
      <Grid item xs={8}>
        <SummaryDetails />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
