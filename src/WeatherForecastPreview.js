import React from "react";
import WeatherIcon from "./WeatherIcon";

function WeatherForecastPreview(props) {
  function showHours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function showTemperature() {
    let temperature = Math.round(props.data.main.temp);
    return `${temperature}°C`;
  }

  return (
    <div className="WeatherForecastPreview col">
      {showHours()}
      <WeatherIcon code={props.data.weather[0].icon} />
      {showTemperature()}
    </div>
  );
}
export default WeatherForecastPreview;
