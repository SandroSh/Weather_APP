import React from "react";
import SunsetIcon from "../assets/sunset.svg";
import SunriseIcon from "../assets/sunrise.svg";
import {
  MainDiv,
  WeatherContainer,
  Top,
  City,
  WeatherDescription,
  InnerDiv,
  StatsBigContainer,
  StatsContainer,
  InnerContainer,
  PopContainer,
} from "./styled/CurrentWeather.style";

const CurrentWeather = ({ data, futureWeather }) => {
  const windDirection = () => {
    if (data.wind.deg >= 20 && data.wind.deg <= 60) {
      return "src/assets/NE.svg";
    } else if (data.wind.deg > 60 && data.wind.deg <= 120) {
      return "src/assets/E.svg";
    } else if (data.wind.deg > 120 && data.wind.deg <= 160) {
      return "src/assets/SE.svg";
    } else if (data.wind.deg > 160 && data.wind.deg <= 200) {
      return "src/assets/S.svg";
    } else if (data.wind.deg > 200 && data.wind.deg <= 250) {
      return "src/assets/SW.svg";
    } else if (data.wind.deg > 250 && data.wind.deg <= 290) {
      return "src/assets/W.svg";
    } else if (data.wind.deg > 290 && data.wind.deg <= 335) {
      return "src/assets/NW.svg";
    } else if (data.wind.deg >= 335 && data.wind.deg < 20) {
      return "src/assets/N.svg";
    } else {
      return "src/assets/N.svg";
    }
  };

  const sunrise = new Date(
    futureWeather.city.sunrise * 1000
  ).toLocaleTimeString();
  const sunset = new Date(
    futureWeather.city.sunset * 1000
  ).toLocaleTimeString();
  return (
    <MainDiv>
      <WeatherContainer>
        <InnerDiv>
          <Top>
            <City>{data.name}</City>
            <WeatherDescription>
              {data.weather[0].description}
            </WeatherDescription>
          </Top>
          <img src={`src/assets/${data.weather[0].icon}.png`} alt="Weather" />
        </InnerDiv>
        <h2>{data.main.temp.toFixed(1)}°C</h2>
        <h3>
          <span style={{ fontSize: "15px" }}>Feels Like </span>
          {data.main.feels_like.toFixed(1)} °C
        </h3>
      </WeatherContainer>
      <StatsBigContainer>
        <StatsContainer>
          <h3>Wind Status</h3>

          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <h2>
              {data.wind.speed.toFixed(1)}
              <span style={{ fontSize: "15px" }}> m/s</span>
            </h2>
            <img src={windDirection()} alt="Wind Direction Icon" />
          </div>
        </StatsContainer>

        <StatsContainer>
          <h3>Humidity</h3>
          <h2>
            {data.main.humidity}
            <span style={{ fontSize: "15px" }}>%</span>
          </h2>
          <progress value={data.main.humidity} max={100} />
        </StatsContainer>

        <StatsContainer>
          <h3>Visibility</h3>
          <h2>
            {(data.visibility / 1000).toFixed(1)}
            <span style={{ fontSize: "15px" }}> km</span>
          </h2>
        </StatsContainer>

        <StatsContainer>
          <h3>Air Pressure</h3>
          <h2>
            {data.main.pressure.toFixed(1)}
            <span style={{ fontSize: "15px" }}> hPa</span>
          </h2>
        </StatsContainer>
      </StatsBigContainer>
      <WeatherContainer >
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <PopContainer>
            <h3>Population</h3>
            <h1>{futureWeather.city.population}</h1>
          </PopContainer>

          <div>
            <InnerContainer>
              <img src={SunriseIcon} alt="Sunrise Icon" />
              <h3> {sunrise}</h3>
            </InnerContainer>
            <InnerContainer>
              <img src={SunsetIcon} alt="Sunset Icon" />
              <h3>{sunset}</h3>
            </InnerContainer>
          </div>
        </div>
      </WeatherContainer>
    </MainDiv>
  );
};

export default CurrentWeather;
