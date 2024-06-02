import {
  Badge,
  Box,
  Chip,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DirectionsBoatFilledOutlinedIcon from "@mui/icons-material/DirectionsBoatFilledOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import CustomTextField from "./CustomTextField";
import OrderCard from "./OrderCard";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ORDERS_DATA } from "../data";
import CustomButton from "./CustomButton";

const Summary = () => {
  // REFs
  const coyInputRef = useRef(null);
  const orderNoRef = useRef(null);

  // STATEs
  const [ordersData, setOrdersData] = useState([]);
  const [selectedOrderCardIndex, setSelectedOrderCardIndex] = useState(0);

  // EFFECTs
  useEffect(() => {
    setOrdersData(ORDERS_DATA);
  }, []);

  return (
    <Stack spacing={2}>
      <Stack
        p={2}
        spacing={2}
        borderRadius={"12px"}
        sx={{ backgroundColor: "#F2EEEB" }}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={2}
        >
          <Box
            sx={{
              fontSize: "12px",
              padding: "2px 10px",
              borderRadius: "50px",
              backgroundColor: "#E1DBD2",
            }}
            alignItems={"center"}
          >
            <TextField
              placeholder="My Responsibilities"
              variant="standard"
              InputProps={{
                sx: {
                  fontSize: "14px",
                  "& .MuiInputBase-input::placeholder": {
                    color: "black",
                  },
                },
                disableUnderline: true,
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end" disableRipple>
                      <SearchOutlinedIcon sx={{ fontSize: "18px" }} />
                    </IconButton>
                  </InputAdornment>
                ),
                startAdornment: (
                  <InputAdornment position="start" sx={{ ml: 0 }}>
                    <IconButton edge="start" disableRipple>
                      <DirectionsBoatFilledOutlinedIcon
                        sx={{ fontSize: "18px" }}
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box>
            <Select
              value={10}
              // onChange={handleChange}
              displayEmpty
              sx={{
                width: "150px",
                fontSize: "12px",
                padding: "2px 10px",
                borderRadius: "50px",
                backgroundColor: "#E1DBD2",
                "& .MuiSelect-select": {
                  padding: "8px 12px",
                  border: "none",
                  outline: "none",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            >
              <MenuItem value={10} defaultValue={10}>
                Ten
              </MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </Box>
          <Box>
            <IconButton
              sx={{
                color: "#68DA6A",
                backgroundColor: "#020A08",
                width: 30,
                height: 30,
              }}
            >
              <Badge
                badgeContent={4}
                sx={{
                  "& .MuiBadge-badge": {
                    backgroundColor: "#68DA6A",
                    color: "#020A08",
                  },
                }}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <TuneOutlinedIcon />
              </Badge>
            </IconButton>
          </Box>
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack>
            <CustomTextField
              ref={coyInputRef}
              id={"coyId"}
              label={"Coy id"}
              inputProps={{}}
            />

            <Stack
              mt={2}
              spacing={2}
              direction={"row"}
              justifyContent={"start"}
            >
              <CustomButton
                size={"small"}
                EndIcon={<KeyboardArrowDownIcon />}
                label={"Sort"}
                disableRipple
                sx={{
                  textTransform: "none",
                  textDecoration: "underline",
                  ":hover": {
                    backgroundColor: "transparent",
                    textDecoration: "underline",
                  },
                  fontWeight: "bold",
                  color: "black",
                }}
              />
              <CustomButton
                size={"small"}
                EndIcon={<KeyboardArrowDownIcon />}
                label={"Group"}
                disableRipple
                sx={{
                  textTransform: "none",
                  textDecoration: "underline",
                  ":hover": {
                    backgroundColor: "transparent",
                    textDecoration: "underline",
                  },
                  fontWeight: "bold",
                  color: "black",
                }}
              />
            </Stack>
          </Stack>
          <Stack>
            <CustomTextField
              ref={orderNoRef}
              id={"OrderNoId"}
              label={"Order no"}
              inputProps={{}}
            />

            <Stack mt={2} spacing={1} direction={"row"} justifyContent={"end"}>
              <CustomButton
                size={"small"}
                label={"Clear"}
                disableRipple
                sx={{
                  textTransform: "none",
                  textDecoration: "underline",
                  ":hover": {
                    backgroundColor: "transparent",
                    textDecoration: "underline",
                  },
                  fontWeight: "bold",
                  color: "black",
                }}
              />
              <CustomButton
                size={"small"}
                label={"Search"}
                disableRipple
                sx={{
                  textTransform: "none",
                  textDecoration: "underline",
                  ":hover": {
                    backgroundColor: "transparent",
                    textDecoration: "underline",
                  },
                  fontWeight: "bold",
                  color: "black",
                }}
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Box p={0} borderRadius={"12px"}>
        <Typography variant="body1" component={"h5"} mb={1} pt={2} px={2}>
          Orders{" "}
          <Chip
            label={ORDERS_DATA.length}
            sx={{ backgroundColor: "#D9D1C6", px: "1px", height: "20px" }}
          />
        </Typography>
        <Box
          sx={{
            overflowY: "auto",
            height: "415px",
            "&::-webkit-scrollbar": {
              width: "0px",
            },
            scrollbarWidth: "none",
          }}
        >
          <Stack spacing={1}>
            {ordersData.length > 0 &&
              ordersData.map(
                (
                  {
                    orderId,
                    clientName,
                    serviceData,
                    tags,
                    tagColor,
                    profileText,
                  },
                  index
                ) => (
                  <OrderCard
                    index={index}
                    key={index}
                    orderId={orderId}
                    clientName={clientName}
                    serviceData={serviceData}
                    profileText={profileText}
                    profileBgColor={tagColor}
                    tags={tags}
                  />
                )
              )}
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
};

export default Summary;
