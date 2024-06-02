import React from "react";
import CommanWrapper from "./CommanWrapper";
import TabHeader from "./TabHeader";
import TextSubtextBox from "../../TextSubText";
import { Stack } from "@mui/material";
import CustomButton from "../../CustomButton";
import ContactInfo from "../../ContactInfo/ContactInfo";
import PersonIcon from "@mui/icons-material/Person";

const Recieved = () => {
  const contactInfo = {
    ADDRESS: "Dover CT17 9DQ, USA",
    TELEPHONE: "01304 248322",
    FAX: "01304 240374",
    MAIL: "marine@george.com",
  };
  return (
    <CommanWrapper>
      <TabHeader title={"Received At"} />
      <Stack spacing={2} alignItems={"start"}>
        <Stack direction={"row"} spacing={8}>
          <TextSubtextBox
            title="Ordered Date"
            subTitle="12 Jul 2019"
            subTitleCss={{
              fontSize: "12px",
              fontWeight: "bold",
              color: "black",
            }}
          />
          <TextSubtextBox
            title="Received On"
            subTitle="14 Aug 2019"
            subTitleCss={{
              fontSize: "12px",
              fontWeight: "bold",
              color: "red",
            }}
          />
          <TextSubtextBox
            title="Port"
            subTitle="Dover"
            subTitleCss={{
              fontSize: "12px",
              fontWeight: "bold",
              color: "black",
            }}
          />
        </Stack>
        <CustomButton
          variant={"text"}
          color={"primary"}
          startIcon={<PersonIcon />}
          component="button"
          size="small"
          label={"George Vessel berth"}
          sx={{
            fontSize: "14px",
            textTransform: "none",
            ":hover": {
              backgroundColor: "transparent",
            },
          }}
        />
        <Stack>
          <ContactInfo info={contactInfo} />
        </Stack>
      </Stack>
    </CommanWrapper>
  );
};

export default Recieved;
