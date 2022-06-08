import React from "react";

const scaleNames = {
  c: "Celsius",
  f: "Farenheit",
};

export default function TemparatureInput(
  {temparature,
  scale,
  onTemperatureChange}
) {
  return (
    <fieldset>
      <legend>Enter Tempareture in {scaleNames[scale]}</legend>
      <input
        type="text"
        value={temparature}
        onChange={(e)=>onTemperatureChange(e,scale)}
      />
    </fieldset>
  );
}
