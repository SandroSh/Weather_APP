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
import PlusMinusIcon from "../assets/PlusMinus.svg";
const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const showedDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

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

                    <img
                      src={`src/assets/${item.weather[0].icon}.png`}
                      alt="Current Weather Icon"
                    />
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
