import React from "react";
import { TextField, InputAdornment, IconButton, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsBoatFilledOutlinedIcon from "@mui/icons-material/DirectionsBoatFilledOutlined";

const SearchBar = () => {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "100%",
      }}
    >
      {/* Boat Icon */}
      <DirectionsBoatFilledOutlinedIcon
        sx={{ width: "40px", height: "40px", marginRight: "8px" }}
      />

      {/* Text Field */}
      <TextField
        placeholder="Search"
        fullWidth
        variant="standard"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {/* Search Icon */}
              <IconButton type="submit" edge="end">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Paper>
  );
};

export default SearchBar;
