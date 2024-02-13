import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { PopContainer } from "./styled/CurrentWeather.style";
import {
  DailyItem,
  MainContainer,
  DailyItemInner,
} from "./styled/Forecast.style";
const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

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

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const showedDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );
  const currentWeatherIcon = (item) => {
    if (item.weather[0].icon == "01d") {
      return i01d;
    }
    if (item.weather[0].icon == "01n") {
      return i01n;
    }
    if (item.weather[0].icon == "02d") {
      return i02d;
    }
    if (item.weather[0].icon == "02n") {
      return i02n;
    }
    if (item.weather[0].icon == "03d") {
      return i03d;
    }
    if (item.weather[0].icon == "03n") {
      return i03n;
    }
    if (item.weather[0].icon == "04d") {
      return i04d;
    }
    if (item.weather[0].icon == "04n") {
      return i04n;
    }
    if (item.weather[0].icon == "09d") {
      return i09d;
    }
    if (item.weather[0].icon == "09n") {
      return i09n;
    }
    if (item.weather[0].icon == "10d") {
      return i10d;
    }
    if (item.weather[0].icon == "10n") {
      return i10n;
    }
    if (item.weather[0].icon == "11d") {
      return i11d;
    }
    if (item.weather[0].icon == "11n") {
      return i11n;
    }
    if (item.weather[0].icon == "13d") {
      return i13d;
    }
    if (item.weather[0].icon == "13n") {
      return i13n;
    }
    if (item.weather[0].icon == "50d") {
      return i50d;
    }
    if (item.weather[0].icon == "50n") {
      return i50n;
    }
  
  };
  return (
    <MainContainer>
      <h1>Next 7 Days Forecast</h1>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <DailyItem>
                  <div>
                    <label>{showedDays[index]}</label>
                    <p>{item.weather[0].description}</p>
                  </div>
                  <DailyItemInner>
                    <h3> {item.main.temp.toFixed(1)}°C</h3>
                    {item.weather[0].icon && (
                      <img
                        src={currentWeatherIcon(item)}
                        alt="Weather Icon"
                        onError={(e) => console.error("Image load error:", e)}
                      />
                    )}
                  </DailyItemInner>
                </DailyItem>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <DailyItem>
                <PopContainer style={{ marginTop: "0" }}>
                  <p>Humidity</p>
                  <p>{item.main.humidity} %</p>
                </PopContainer>
                <PopContainer style={{ marginTop: "0" }}>
                  <p>Wind Status</p>
                  <p>{item.wind.speed} m/s</p>
                </PopContainer>
                <PopContainer style={{ marginTop: "0" }}>
                  <p>Air Pressure</p>
                  <p>{item.main.pressure} hPa</p>
                </PopContainer>
              </DailyItem>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </MainContainer>
  );
};

export default Forecast;
