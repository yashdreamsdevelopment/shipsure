import React, { useState } from "react";
import { Box, IconButton, Stack, styled } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import NewReleasesOutlinedIcon from "@mui/icons-material/NewReleasesOutlined";
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";

const Sidebar = () => {
  // CONSTANTs
  const availableServiceMap = {
    ORDERS: "orders",
    WARNINGS: "warnings",
    WORKERS: "workers",
    FUEL: "fuel",
    SYSTEM: "system",
    TOOLS: "tools",
  };

  // STATEs
  const [selectedService, setSelectedService] = useState(
    availableServiceMap.ORDERS
  );

  //STYLE CONSTANTs
  const iconButtonStyle = {
    width: "45px",
    height: "45px",
    borderRadius: "12px",
    padding: "20px",
    color: "#68DA6A",
  };

  const serviceButtonStyle = {
    ...iconButtonStyle,
    backgroundColor: selectedService ? "rgba(0, 0, 0, 0.08)" : "transparent",
  };

  // FUNCTIONs
  const StyledIconButton = styled(IconButton)(({ theme, selected }) => {
    return {
      width: "45px",
      borderRadius: "12px",
      padding: "10px 20px",
      color: "#68DA6A",
      transition: "background-color 0.3s, border-radius 0.3s",
      backgroundColor: selected ? "#00504B" : "transparent",
    };
  });

  const handleServiceSelected = (service) => {
    setSelectedService(service);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "60px",
        backgroundColor: "#052E2B",
        padding: "10px 0",
      }}
    >
      <Stack spacing={3}>
        <Stack spacing={1} alignItems={"center"}>
          <IconButton
            sx={{
              ...iconButtonStyle,
              color: "#ffffff",
              // border: "2px solid red",
            }}
            disableRipple
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            sx={{ ...iconButtonStyle, backgroundColor: "#00704B" }}
            color={"success"}
            disableRipple
          >
            <AddIcon />
          </IconButton>
        </Stack>

        <Stack spacing={1} alignItems={"center"}>
          <StyledIconButton
            selected={availableServiceMap.ORDERS === selectedService}
            onClick={() => handleServiceSelected(availableServiceMap.ORDERS)}
            disableRipple
          >
            <Inventory2OutlinedIcon sx={{ fontSize: "16px" }} />
          </StyledIconButton>
          <StyledIconButton
            selected={selectedService === availableServiceMap.WARNINGS}
            onClick={() => handleServiceSelected(availableServiceMap.WARNINGS)}
            disableRipple
          >
            <WarningAmberOutlinedIcon sx={{ fontSize: "16px" }} />
          </StyledIconButton>
          <StyledIconButton
            selected={selectedService === availableServiceMap.WORKERS}
            onClick={() => handleServiceSelected(availableServiceMap.WORKERS)}
            disableRipple
          >
            <EngineeringOutlinedIcon sx={{ fontSize: "16px" }} />
          </StyledIconButton>
          <StyledIconButton
            selected={selectedService === availableServiceMap.FUEL}
            onClick={() => handleServiceSelected(availableServiceMap.FUEL)}
            disableRipple
          >
            <WaterDropOutlinedIcon sx={{ fontSize: "16px" }} />
          </StyledIconButton>
          <StyledIconButton
            selected={selectedService === availableServiceMap.SYSTEM}
            onClick={() => handleServiceSelected(availableServiceMap.SYSTEM)}
            disableRipple
          >
            <NewReleasesOutlinedIcon sx={{ fontSize: "16px" }} />
          </StyledIconButton>
          <StyledIconButton
            selected={selectedService === availableServiceMap.TOOLS}
            onClick={() => handleServiceSelected(availableServiceMap.TOOLS)}
            disableRipple
          >
            <HandymanOutlinedIcon sx={{ fontSize: "16px" }} />
          </StyledIconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Sidebar;
