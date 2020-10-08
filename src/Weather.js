import React from "react";
import "./Weather.css";

function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>

      <h1>Edmonton</h1>
      <ul>
        <li>Wednesday 14:00</li>
        <li>Clear Sky</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Mostly Sunny"
              className="float-left"
            />

            <div className="float-left">
              <span className="Temperature">6</span>
              <span className="Units">
                <a href="">°C</a> | <a href="">°F</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidty: 50%</li>
            <li>Wind:15 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Weather;
