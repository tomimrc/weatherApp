import { useState } from 'react'
import { NextForecast } from './Components/NextForecasts'
import { Card } from './Components/Card'
import { FaSun, FaCloudRain, FaCloudShowersHeavy, } from "react-icons/fa";
import { WiDaySunnyOvercast, WiThunderstorm, WiShowers, WiFog, WiRainWind, WiRainMix, WiDaySunny, WiNightSnowThunderstorm} from "react-icons/wi"
import {CiCloudDrizzle} from "react-icons/ci"
import { LogicalFunctions } from './Components/logicalFunctions'


function App() {
  const [clima, setClima] = useState({})
  const [ciudad, setCiudad] = useState("")

  const isDay = () => {
    if (clima.current){
      if (clima.current.is_day !== 0){
        return "isDay"
      }else{
        return "isNight"
    }}
    }
  
  function getWeatherIcon(code) {
    const iconMapping = {
        '0': { icon: <WiDaySunny className={isDay()} />, description: 'Clear sky' },
        '1': { icon: <WiDaySunnyOvercast className={isDay()}/>, description: 'Mainly clear' },
        '2': { icon: <WiDaySunnyOvercast className={isDay()}/>, description: 'Partly cloudy' },
        '3': { icon: <WiDaySunnyOvercast className={isDay()}/>, description: 'Overcast' },
        '45': { icon: <WiFog className={isDay()}/>, description: 'Fog' },
        '48': { icon: <WiFog className={isDay()}/>, description: 'Fog' },
        '51': { icon: <CiCloudDrizzle className={isDay()}/>, description: 'Light Drizzle' },
        '53': { icon: <CiCloudDrizzle className={isDay()}/>, description: 'Moderate Drizzle' },
        '55': { icon: <CiCloudDrizzle className={isDay()}/>, description: 'Dense Drizzle' },
        '56': { icon: <CiCloudDrizzle className={isDay()}/>, description: 'Freezing Drizzle' },
        '57': { icon: <CiCloudDrizzle className={isDay()}/>, description: 'Freezing Drizzle' },
        '60': { icon: <WiRainMix className={isDay()}/>, description: 'Rain: Slight intensity' },
        '61': { icon: <WiRainWind className={isDay()}/>, description: 'Rain: Moderate intensity' },
        '62': { icon: <WiRainWind className={isDay()}/>, description: 'Rain: Heavy intensity' },
        '80': { icon: <WiShowers className={isDay()}/>, description: 'Rain showers: Slight intensity' },
        '81': { icon: <WiShowers className={isDay()}/>, description: 'Rain showers: Moderate intensity' },
        '82': { icon: <WiShowers className={isDay()}/>, description: 'Rain showers: Violent intensity' },
        '83': { icon: <FaCloudRain className={isDay()}/>, description: 'Rain: Slight intensity' },
        '84': { icon: <FaCloudRain className={isDay()}/>, description: 'Rain: Moderate intensity' },
        '85': { icon: <FaCloudShowersHeavy className={isDay()}/>, description: 'Rain: Violent intensity' },
        '95': { icon: <WiThunderstorm className={isDay()}/>, description: 'Thunderstorm: Slight or moderate' },
        '96': { icon: <WiNightSnowThunderstorm className={isDay()}/>, description: 'Thunderstorm with hail' },
    };

    const defaultIcon = <FaSun className='iconSvg'/>;
    return iconMapping[code.toString()] || defaultIcon;
}

  return (
    <div className='wrap'>
      <h1>Weather App</h1>
        <LogicalFunctions setClima={setClima} setCiudad={setCiudad} getWeatherIcon={getWeatherIcon}/>
        <Card ciudad={ciudad} clima={clima} getWeatherIcon={getWeatherIcon}/>
        <NextForecast clima={clima} getWeatherIcon={getWeatherIcon}/>
    </div>
  )
}

export default App
