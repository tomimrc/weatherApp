import { FaLocationDot, } from "react-icons/fa6";
import { PropertyWrapper } from "./PropertyWrapper";
import { HourlyWrapper } from "./HourlyWrapper";

export const Card = ({clima, ciudad, getWeatherIcon}) => {


    return (<>
        <div className="card-wrap">
            <div className="title-wrap">
                <div className="title">
                    <FaLocationDot className="location" />
                    <h3 className="city">{ciudad}</h3>
                </div>
                <h3 className="description">
                    {clima.current && getWeatherIcon(clima.current.weather_code).description}
                </h3>
            </div>
            <div className="temp-wrap">
                    <h1 className="temp">{clima.current && clima.current.temperature_2m}°C</h1>
                    <h2 className="icon">{clima.current && getWeatherIcon(clima.current.weather_code).icon}</h2>
            </div>
            <PropertyWrapper clima={clima}/>
            <HourlyWrapper clima={clima} getWeatherIcon={getWeatherIcon}/> 
        </div>
    </>
    )
    
}
