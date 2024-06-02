import { Box, Tabs, Tab, Divider, Stack } from "@mui/material";
import React, { useState } from "react";
import SummaryTab from "./Tabs/SummaryTab";

const AVAILABLE_TABS = [
  "summary",
  "order lines",
  "suppliers",
  "analysis",
  "frieght details",
  "delivery",
  "invoice",
  "memos",
  "notes & attachments",
  "budgets",
];

const SummaryPanel = () => {
  const [selectedTab, setSelectedTab] = useState(AVAILABLE_TABS[0]);

  const handleTabSelection = (e, newValue) => {
    setSelectedTab(newValue);
  };
  return (
    <>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <Tabs
          value={selectedTab}
          onChange={handleTabSelection}
          sx={{
            textDecoration: "none",
            "& .MuiTab-wrapper": {
              textDecoration: "none",
              "&:hover": { textDecoration: "none" },
            },
            "&.MuiButtonBase-root": {
              textDecoration: "none !important",
            },
          }}
        >
          {AVAILABLE_TABS.map((tab) => (
            <Tab
              value={tab}
              label={`${tab}`}
              disableRipple
              sx={{
                padding: "0 15px",
                fontSize: "10px",
                minWidth: "auto",
              }}
              role="navigation"
            />
          ))}
        </Tabs>
      </Box>
      <Divider />

      <Box
        sx={{
          overflowY: "auto",
          height: "469px",
          "&::-webkit-scrollbar": {
            width: "0px",
          },
          scrollbarWidth: "none",
        }}
      >
        <Stack p={2}>
          <SummaryTab />
        </Stack>
      </Box>
    </>
  );
};

export default SummaryPanel;
