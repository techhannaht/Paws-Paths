import { useEffect } from "react"
import { useState } from "react"



export const Weather = () => {
const [currentWeather, setCurrentWeather] = useState({})

useEffect(() => {
fetch(`https://api.open-meteo.com/v1/forecast?latitude=38.3498&longitude=-81.6326&current=temperature_2m,precipitation,rain,showers,snowfall&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_probability_max&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FNew_York&forecast_days=1`)
.then(response => response.json())
.then(weatherObject => setCurrentWeather(weatherObject))

}, [])


    return (

        <div className="card has-background-warning">
  <div className="card-content">
    <div className="media">
      <div className="media">
      </div>
      <div className="media-content">
        <p className="title is-4">Current Temp: {currentWeather?.current?.temperature_2m}{currentWeather?.current_units?.temperature_2m}</p>
      </div>
    </div>

    <div className="content">
      <h4>Low Temp: {currentWeather.daily?.temperature_2m_min} {currentWeather.daily_units?.temperature_2m_min}</h4>
      <h4>High Temp: {currentWeather.daily?.temperature_2m_max} {currentWeather.daily_units?.temperature_2m_max}</h4>
      <br/>
      <time datetime={currentWeather?.current?.time}>{Date(currentWeather?.current?.time)}</time>
    </div>
  </div>
</div>

    )
}