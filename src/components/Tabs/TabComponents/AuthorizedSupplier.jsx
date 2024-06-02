import React from "react";
import CommanWrapper from "./CommanWrapper";
import TabHeader from "./TabHeader";
import { Stack, Typography } from "@mui/material";
import TextSubText from "../../TextSubText";
import Ratings from "../../Ratings";
import ContactInfo from "../../ContactInfo/ContactInfo";

const AuthorizedSupplier = () => {
  const contactInfo = {
    ADDRESS: "1st Floor, Skypark, 8 Elliot Place, G3 8EP, GBR",
    TELEPHONE: "+44 (0) 141 305 1300",
    FAX: "+44 (0) 141 305 1300",
    MAIL: "repairs@services.com",
  };

  return (
    <CommanWrapper>
      <TabHeader title={"Authorized Supplier"} badge={"Ref: PRJ001963SRIN"} />
      <Stack spacing={2}>
        <Stack direction={"row"} spacing={8}>
          <TextSubText
            title="Date Authorized"
            subTitle="12 Jul 2019"
            subTitleCss={{
              fontSize: "12px",
              fontWeight: "bold",
              color: "black",
            }}
          />
          <TextSubText
            title="Authorized By"
            subTitle="Jim Darren"
            subTitleCss={{
              fontSize: "12px",
              fontWeight: "bold",
              color: "black",
            }}
          />
          <TextSubText
            title="Invoice Chased Date"
            subTitle="-"
            subTitleCss={{
              fontSize: "12px",
              fontWeight: "bold",
              color: "black",
            }}
          />
          <TextSubText
            title="PO Chased Date"
            subTitle="-"
            subTitleCss={{
              fontSize: "12px",
              fontWeight: "bold",
              color: "black",
            }}
          />
          <TextSubText
            title="PO Confirmed Date"
            subTitle="-"
            subTitleCss={{
              fontSize: "12px",
              fontWeight: "bold",
              color: "black",
            }}
          />
          <TextSubText
            title="PO Ref No."
            subTitle="-"
            subTitleCss={{
              fontSize: "12px",
              fontWeight: "bold",
              color: "black",
            }}
          />
        </Stack>
        <Stack>
          <Typography
            variant="body1"
            sx={{ fontSize: "13px", color: "#0E4F84" }}
          >
            Repairs (Riding Squads / Manpowers)
          </Typography>
          <Ratings defaultRating={4} />
        </Stack>
        <Stack>
          <ContactInfo info={contactInfo} />
        </Stack>
      </Stack>
    </CommanWrapper>
  );
};

export default AuthorizedSupplier;
