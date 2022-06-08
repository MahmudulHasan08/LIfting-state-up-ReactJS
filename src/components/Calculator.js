import React from "react";
import BoilingVerdict from "./BoilingVerdict";
import { convert, toCelsius, toFahrenheit } from "./Converter";
import TemparatureInput from "./TemparatureInput";

export default class Calculator extends React.Component {
  state = { temperature: "", scale: "c" };
  onHandler = (e, scale) => {
    this.setState({
        temperature: e.target.value,
      scale,
    });
  };
  render() {
    const { temperature, scale } = this.state;

    const celsius =
      scale === "f" ? convert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? convert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemparatureInput
          scale="c"
          temparature={celsius}
          onTemperatureChange={this.onHandler}
        ></TemparatureInput>
        <TemparatureInput
          scale="f"
          temparature={fahrenheit}
          onTemperatureChange={this.onHandler}
        ></TemparatureInput>
        <BoilingVerdict celcius={parseFloat(celsius)}></BoilingVerdict>
      </div>
    );
  }
}
