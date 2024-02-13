


export const HourlyWrapper = ({clima, getWeatherIcon}) => {



    let numbers = [1, 3, 5]
    const getIndex = (index) => {
        if (index % 2 !== 0) {
            return index
        }
    }
    
    const getTime = (index) => {
        if (index % 2 !== 0) {
            const date = clima.hourly.time[getIndex(index)]
            const dateObject = new Date(date)
            const hour = dateObject.toLocaleTimeString("en", {
                hour: "2-digit",
                minute: "2-digit",
            })
            return hour
        }
    }


    return (
        <>
           
            <div className="hourlyWrapper">
                {numbers.map((number) => {
                    return (
                        <div className="hourlyDiv" key={number}>

                            {clima.hourly && getTime(number)}
                            <div className="hourlyIcon">
                            {clima.hourly && getWeatherIcon(clima.hourly.weather_code[number]).icon}
                            </div>
                            {clima.hourly && clima.hourly.temperature_2m[number]}°
                        </div>
                    )
                })}
            </div>
        </>
    )
}