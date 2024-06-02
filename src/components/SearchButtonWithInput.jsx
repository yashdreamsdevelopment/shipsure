import React, { forwardRef, memo, useState } from "react";
import { IconButton, InputBase, Box, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchContainer = styled(Box)(({ theme, showInput }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: "transparent",
  borderRadius: "50px",
  border: "1px solid black",
  padding: "2px 4px",
  transition: "width 0.3s",
  width: showInput ? "200px" : "40px",
  overflow: "hidden",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  flex: 1,
}));

const SearchButtonWithInput = forwardRef((props, ref) => {
  const [showInput, setShowInput] = useState(false);

  const handleMouseEnter = () => {
    setShowInput(true);
  };

  const handleMouseLeave = () => {
    setShowInput(false);
  };

  return (
    <SearchContainer
      showInput={showInput}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <IconButton>
        <SearchIcon sx={{ fontSize: "18px" }} />
      </IconButton>
      {showInput && <StyledInputBase placeholder="Search…" />}
    </SearchContainer>
  );
});

export default memo(SearchButtonWithInput);
