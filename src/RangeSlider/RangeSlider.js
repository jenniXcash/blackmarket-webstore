import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useContext, useState, useEffect } from "react/cjs/react.development";
import RangeValueContext from "../contexts/RangeValueContext";

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider({ products }) {
  const { rangeValue, setRangeValue } = useContext(RangeValueContext);
  const priceArr = products.map((e) => e.price);
  const maxPrice = Math.max(...priceArr);
  const minPrice = Math.min(...priceArr);

  const [value, setValue] = useState([minPrice, maxPrice]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(value);
  };

  return (
    <Box sx={{ width: 200 }}>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        size="small"
        max={maxPrice}
        min={minPrice}
      />
    </Box>
  );
}
