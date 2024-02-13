
import { FaWind } from "react-icons/fa"
import { WiRainMix, WiHumidity } from "react-icons/wi"


export const PropertyWrapper = ({clima}) => {

    return(
        <div className="properties-wrap">
            
            <div className="property">
                <WiRainMix className="wiIcon" />
                {clima.current ? clima.hourly.precipitation_probability[0] : ""}%
            </div>
            <div className="property">
                <WiHumidity className="wiIcon" />
                {clima.current ? clima.current.relative_humidity_2m : ""}%
            </div>
            <div className="property">
                <div className="insideIcon">
                    <FaWind />
                </div>
                {clima.current ? clima.current.wind_speed_10m : ""} Km/H
            </div>

        </div>
    )
}