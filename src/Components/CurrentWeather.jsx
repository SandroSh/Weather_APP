import React from "react";
import SunsetIcon from "../assets/sunset.svg";
import SunriseIcon from "../assets/sunrise.svg";
import NE from "../assets/NE.svg";
import E from "../assets/E.svg";
import SE from "../assets/SE.svg";
import S from "../assets/S.svg";
import SW from "../assets/SW.svg";
import W from "../assets/W.svg";
import NW from "../assets/NW.svg";
import N from "../assets/N.svg";
import i01d from "../assets/01d.png";
import i01n from "../assets/01n.png";
import i02d from "../assets/02d.png";
import i02n from "../assets/02n.png";
import i03d from "../assets/03d.png";
import i03n from "../assets/03n.png";
import i04d from "../assets/04d.png";
import i04n from "../assets/04n.png";
import i09d from "../assets/09d.png";
import i09n from "../assets/09n.png";
import i10d from "../assets/10d.png";
import i10n from "../assets/10n.png";
import i11d from "../assets/11d.png";
import i11n from "../assets/11n.png";
import i13d from "../assets/13d.png";
import i13n from "../assets/13n.png";
import i50d from "../assets/50d.png";
import i50n from "../assets/50n.png";
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
  
  const currentWeatherIcon = () => {
    // because of API this type of code doesn't works  `src/assets/${data.weather[0].icon}.png`, and i had to write this bad practice code
    if (data.weather[0].icon == "01d") {
      return i01d;
    }
    if (data.weather[0].icon == "01n") {
      return i01n;
    }
    if (data.weather[0].icon == "02d") {
      return i02d;
    }
    if (data.weather[0].icon == "02n") {
      return i02n;
    }
    if (data.weather[0].icon == "03d") {
      return i03d;
    }
    if (data.weather[0].icon == "03n") {
      return i03n;
    }
    if (data.weather[0].icon == "04d") {
      return i04d;
    }
    if (data.weather[0].icon == "04n") {
      return i04n;
    }
    if (data.weather[0].icon == "09d") {
      return i09d;
    }
    if (data.weather[0].icon == "09n") {
      return i09n;
    }
    if (data.weather[0].icon == "10d") {
      return i10d;
    }
    if (data.weather[0].icon == "10n") {
      return i10n;
    }
    if (data.weather[0].icon == "11d") {
      return i11d;
    }
    if (data.weather[0].icon == "11n") {
      return i11n;
    }
    if (data.weather[0].icon == "13d") {
      return i13d;
    }
    if (data.weather[0].icon == "13n") {
      return i13n;
    }
    if (data.weather[0].icon == "50d") {
      return i50d;
    }
    if (data.weather[0].icon == "50n") {
      return i50n;
    }
  }
  const windDirection = () => {
    if (data.wind.deg >= 20 && data.wind.deg <= 60) {
      return NE;
    } else if (data.wind.deg > 60 && data.wind.deg <= 120) {
      return E;
    } else if (data.wind.deg > 120 && data.wind.deg <= 160) {
      return SE;
    } else if (data.wind.deg > 160 && data.wind.deg <= 200) {
      return S;
    } else if (data.wind.deg > 200 && data.wind.deg <= 250) {
      return SW;
    } else if (data.wind.deg > 250 && data.wind.deg <= 290) {
      return W;
    } else if (data.wind.deg > 290 && data.wind.deg <= 335) {
      return NW;
    } else if (data.wind.deg >= 335 && data.wind.deg < 20) {
      return N;
    } else {
      return N;
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
          {data.weather[0].icon && 
            <img
              src={currentWeatherIcon()}
              alt="Weather"
              onError={(e) => console.error("Image load error:", e)}
            />
          }
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
      <WeatherContainer>
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
