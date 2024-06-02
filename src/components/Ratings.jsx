import Rating from "@mui/material/Rating";
import React, { useState } from "react";

const Ratings = ({ defaultRating, name, cb = () => {} }) => {
  const [ratings, setRatings] = useState(defaultRating);
  return (
    <Rating
      size="small"
      name={name}
      value={ratings}
      onChange={(event, newValue) => {
        setRatings(newValue);
      }}
    />
  );
};

export default Ratings;
