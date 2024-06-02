import React from "react";
import { IconButton, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const RoundedSearchButton = styled(IconButton)(({ theme }) => ({
  borderRadius: "50%",
  width: "30px",
  height: "30px",
  transition: "background-color 0.3s",
  "&:hover": {
    backgroundColor: "#4c4b4b32",
  },
}));

const SearchButton = () => {
  return (
    <RoundedSearchButton>
      <SearchIcon sx={{ fontSize: "18px" }} />
    </RoundedSearchButton>
  );
};

export default SearchButton;
