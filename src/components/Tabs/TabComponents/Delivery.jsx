import React from "react";
import CommanWrapper from "./CommanWrapper";
import TabHeader from "./TabHeader";
import TextSubtextBox from "../../TextSubText";
import { Stack } from "@mui/material";
import CustomButton from "../../CustomButton";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import ContactInfo from "../../ContactInfo/ContactInfo";

const Delivery = () => {
  const contactInfo = {
    ADDRESS: "Contour Avenue, 2133 LD",
    TELEPHONE: "+3-20-5000 300",
    MAIL: "po.office@marine.global",
  };
  return (
    <CommanWrapper>
      <TabHeader title={"Delivery to"} />
      <Stack spacing={2} alignItems={"start"}>
        <Stack direction={"row"} spacing={8}>
          <TextSubtextBox
            title="Ordered Date"
            subTitle="10 May 2023"
            subTitleCss={{
              fontSize: "12px",
              fontWeight: "bold",
              color: "black",
            }}
          />
          <TextSubtextBox
            title="Expected"
            subTitle="02 Jun 2023"
            subTitleCss={{
              fontSize: "12px",
              fontWeight: "bold",
              color: "red",
            }}
          />
          <TextSubtextBox
            title="Port"
            subTitle="-"
            subTitleCss={{
              fontSize: "12px",
              fontWeight: "bold",
              color: "black",
            }}
          />
          <TextSubtextBox
            title="Ex Works Days"
            subTitle="15"
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
          startIcon={<WarehouseIcon />}
          component="button"
          size="small"
          label={"Marine"}
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

export default Delivery;
