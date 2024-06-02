import React from "react";
import CommanWrapper from "./CommanWrapper";
import TabHeader from "./TabHeader";
import TextSubtextBox from "../../TextSubText";
import { Stack } from "@mui/material";

const FreightDetails = () => {
  return (
    <CommanWrapper>
      <TabHeader title={"Freight details"} />

      <Stack direction={"row"} spacing={8}>
        <TextSubtextBox
          title="No. of Pieces"
          subTitle="0"
          subTitleCss={{
            fontSize: "12px",
            fontWeight: "bold",
            color: "black",
          }}
        />
        <TextSubtextBox
          title="Weight (in KG)"
          subTitle="0"
          subTitleCss={{
            fontSize: "12px",
            fontWeight: "bold",
            color: "black",
          }}
        />
        <TextSubtextBox
          title="Total CBM"
          subTitle="0"
          subTitleCss={{
            fontSize: "12px",
            fontWeight: "bold",
            color: "black",
          }}
        />
        <TextSubtextBox
          title="Freight Order"
          subTitle="-"
          subTitleCss={{
            fontSize: "12px",
            fontWeight: "bold",
            color: "black",
          }}
        />
        <TextSubtextBox
          title="Transport Mode"
          subTitle="-"
          subTitleCss={{
            fontSize: "12px",
            fontWeight: "bold",
            color: "black",
          }}
        />
        <TextSubtextBox
          title="AWB/Reference No."
          subTitle="-"
          subTitleCss={{
            fontSize: "12px",
            fontWeight: "bold",
            color: "black",
          }}
        />
      </Stack>
    </CommanWrapper>
  );
};

export default FreightDetails;
