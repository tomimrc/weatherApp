
import { FaSun, FaCloudRain, FaCloudShowersHeavy } from "react-icons/fa6"
import { WiDaySunnyOvercast, WiFog, WiRainMix, WiRainWind, WiShowers, WiThunderstorm } from "react-icons/wi"


export const NextForecast = ({clima, getWeatherIcon}) => {
    
    const day = (index) => {
        const options = { weekday: "long" };
        const dateStr = clima.daily.time[index]; // Example date string
            const date = new Date(dateStr + 'T00:00:00-03:00'); // Adjusting to Buenos Aires time zone
            const dia = new Intl.DateTimeFormat("en-US", options).format(date);
            return dia;
        
    };
console.log(clima);
    return (
        <div className="nextWrapper">
            {clima.daily ? clima.daily.time.map((date, index) => {
                return (
                    <div key={date+index} className="nextDiv">
                        <h3 key={date} className="dailyDayDiv" >  {day(index)}  {getWeatherIcon(clima.daily.weather_code[index]).icon} </h3>
                        <div className="nextTempDiv">
                            <h3 className="maxTemp"> {clima.daily.temperature_2m_max[index]}°</h3>
                            <h3 className="minTemp"> {clima.daily.temperature_2m_min[index]}°</h3>
                        </div>
                    {/* {getWeatherIcon(clima.daily.weather_code[index]).description} */}
                    </div>
                )
            }
            )
            : ""}
        </div>

    )

}