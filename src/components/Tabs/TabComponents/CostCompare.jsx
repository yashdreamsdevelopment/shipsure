import React from "react";
import CommanWrapper from "./CommanWrapper";
import TabHeader from "./TabHeader";
import {
  Badge,
  Box,
  Chip,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import TextSubtextBox from "../../TextSubText";

const CostCompare = () => {
  const gaugeData = [
    {
      title: "Goods / Service Balance",
      data: {
        gaugeValue: 95,
        values: [
          {
            title: "Amount",
            value: "35,25,236.00",
            color: "#1287A5",
          },
          {
            title: "Outstanding",
            value: "4,000.00",
            color: "#01CBC6",
          },
        ],
        valueArc: "#1287A5",
        referenceArc: "#01CBC6",
      },
    },
    {
      title: "Freight / Delivery Balance",
      data: {
        gaugeValue: 90,
        values: [
          {
            title: "Amount",
            value: "5,96,000.00",
            color: "#218F76",
          },
          {
            title: "Outstanding",
            value: "5,000.00",
            color: "#75DA8B",
          },
        ],
        valueArc: "#218F76",
        referenceArc: "#75DA8B",
      },
    },
  ];
  return (
    <CommanWrapper>
      <TabHeader title={"Cost"} badge={"USD"} />
      <Stack p={2}>
        {/* <Box> */}
        <Stack direction={"row"} spacing={2}>
          {gaugeData.map((gauge, index, currentData) => (
            <Stack key={index} width={"50%"}>
              <Paper>
                <Typography variant="body1" p={2}>
                  {gauge.title}
                </Typography>
                <Divider />
                <Box width={280} m={"auto"}>
                  <Gauge
                    width={"180"}
                    height={"100"}
                    value={gauge.data.gaugeValue}
                    startAngle={-90}
                    endAngle={90}
                    innerRadius={"70%"}
                    sx={{
                      [`& .${gaugeClasses.valueArc}`]: {
                        fill: `${gauge.data.valueArc}`,
                      },
                      [`& .${gaugeClasses.referenceArc}`]: {
                        fill: `${gauge.data.referenceArc}`,
                      },
                    }}
                    text={""}
                  />
                </Box>
                <Stack direction={"row"} spacing={5} p={5} pt={2}>
                  {currentData[index].data.values.map((data) => (
                    <Box display={"flex"} gap={1} alignItems={"Start"}>
                      <Chip
                        size="small"
                        sx={{
                          width: "7px",
                          height: "7px",
                          bgcolor: `${data.color}`,
                          mb0: 0,
                        }}
                      />
                      <TextSubtextBox
                        title={data.title}
                        subTitle={data.value}
                        subTitleCss={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "black",
                        }}
                      />
                    </Box>
                  ))}
                </Stack>
              </Paper>
            </Stack>
          ))}
        </Stack>

        <Box mt={2}>
          <Stack direction={"row"} spacing={10}>
            <Typography
              variant="body1"
              sx={{
                fontSize: "14px",
              }}
            >
              Total PO Amount
            </Typography>

            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "#1287A5",
              }}
            >
              41,21,263.00
            </Typography>
          </Stack>
          <Stack direction={"row"} spacing={3}>
            <Typography
              variant="body1"
              sx={{
                fontSize: "14px",
              }}
            >
              Total Outstanding Amount
            </Typography>

            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "#1287A5",
              }}
            >
              9,000.00
            </Typography>
          </Stack>
        </Box>
        {/* </Box> */}
      </Stack>
    </CommanWrapper>
  );
};

export default CostCompare;
