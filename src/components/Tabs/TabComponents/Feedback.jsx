import React from "react";
import CommanWrapper from "./CommanWrapper";
import TabHeader from "./TabHeader";
import { Box, Stack, TextField } from "@mui/material";
import CustomButton from "../../CustomButton";
import InventoryIcon from "@mui/icons-material/Inventory";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ContentPasteGoIcon from "@mui/icons-material/ContentPasteGo";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import YardOutlinedIcon from "@mui/icons-material/YardOutlined";
import Ratings from "../../Ratings";

const Feedback = () => {
  return (
    <CommanWrapper>
      <TabHeader title={"ratings & feedback"} />

      <Stack spacing={2}>
        <Stack
          alignItems={"start"}
          justifyContent={"start"}
          flexWrap={"wrap"}
          spacing={2}
        >
          <Stack direction={"row"} spacing={12}>
            <Stack alignItems={"start"}>
              <CustomButton
                disableRipple
                variant={"text"}
                size={"small"}
                label="Documentation"
                startIcon={<InventoryIcon sx={{ color: "#2C3335" }} />}
                sx={{
                  color: "#2C3335",
                  textTransform: "none",
                  fontWeight: "600",
                  ":hover": {
                    backgroundColor: "transparent",
                  },
                }}
              />
              <Ratings defaultRating={5} name={"packingQuality"} />
            </Stack>
            <Stack alignItems={"start"}>
              <CustomButton
                disableRipple
                variant={"text"}
                size={"small"}
                label="Documentation"
                startIcon={<AssignmentIcon sx={{ color: "#2C3335" }} />}
                sx={{
                  color: "#2C3335",
                  textTransform: "none",
                  fontWeight: "600",
                  ":hover": {
                    backgroundColor: "transparent",
                  },
                }}
              />
              <Ratings defaultRating={4} name={"documentation"} />
            </Stack>
            <Stack alignItems={"start"}>
              <CustomButton
                disableRipple
                variant={"text"}
                size={"small"}
                label="Goods according to specification"
                startIcon={<ContentPasteGoIcon sx={{ color: "#2C3335" }} />}
                sx={{
                  color: "#2C3335",
                  textTransform: "none",
                  fontWeight: "600",
                  ":hover": {
                    backgroundColor: "transparent",
                  },
                }}
              />
              <Ratings defaultRating={4} name={"specification"} />
            </Stack>
          </Stack>
          <Stack direction={"row"} spacing={4}>
            <Stack alignItems={"start"}>
              <CustomButton
                disableRipple
                variant={"text"}
                size={"small"}
                label="Proper labelling of items"
                startIcon={<BeenhereIcon sx={{ color: "#2C3335" }} />}
                sx={{
                  color: "#2C3335",
                  textTransform: "none",
                  fontWeight: "600",
                  ":hover": {
                    backgroundColor: "transparent",
                  },
                }}
              />
              <Ratings defaultRating={5} name={"labelling"} />
            </Stack>
            <Stack alignItems={"start"}>
              <CustomButton
                variant={"text"}
                size={"small"}
                disableRipple
                label="Respect of the envirnoment"
                startIcon={<BeenhereIcon sx={{ color: "#2C3335" }} />}
                sx={{
                  color: "#2C3335",
                  textTransform: "none",
                  fontWeight: "600",
                  ":hover": {
                    backgroundColor: "transparent",
                  },
                }}
              />
              <Ratings defaultRating={4} name={"envirnoment"} />
            </Stack>
          </Stack>
        </Stack>

        <TextField
          variant="outlined"
          placeholder="Enter your comments here..."
          label="Comments"
          multiline
          rows={4}
          fullWidth
        />
      </Stack>
    </CommanWrapper>
  );
};

export default Feedback;
