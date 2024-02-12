import { useState } from "react";
import CurrentWeather from "./Components/CurrentWeather";
import Search from "./Components/Search";
import Forecast from "./Components/Forecast";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import "./styles/App.css";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [latitude, longitude] = searchData.value.split(" ");
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const nextDaysForecast = fetch(
      `${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, nextDaysForecast])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };
  console.log(currentWeather);
  console.log(forecast);
  return (
    <>
      <div>
        <div className="box">
          <div className="wave -one"></div>
          <div className="wave -two"></div>
          <div className="wave -three"></div>
        </div>
        <Search onSearchChange={handleOnSearchChange} />
      
          <div
          className="info_div"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              margin:"-70px auto 0 auto"
            }}
          >
            {currentWeather && <CurrentWeather data={currentWeather} futureWeather= {forecast} />}
            {currentWeather && <Forecast data={forecast} />}
          </div>
      
      </div>
    </>
  );
}

export default App;
