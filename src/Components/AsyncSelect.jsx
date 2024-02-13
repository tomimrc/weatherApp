
import AsyncSelect from "react-select/async"


export const AsyncSel = ({ setClima, setCiudad, getWeatherIcon, debounce, optionsFetch }) => {


    const handleChange = async (selectedOption) => {
        const url = `https://api.open-meteo.com/v1/forecast?${selectedOption.value}&current=temperature_2m,relative_humidity_2m,is_day,precipitation,weather_code,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_hours,wind_speed_10m_max&timezone=auto&forecast_hours=6`

        return fetch(url)
            .then((response) => (response.json()))
            .then((response) => {

                setClima(response)
                setCiudad(selectedOption.label)
                getWeatherIcon(response.daily.weather_code)
            }
            )
            .catch((err) => console.log(err))
    }
    
    const loadOptions = debounce(async (inputValue, callback) => {
        const fetchearData = await fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=100000&namePrefix=${inputValue}&limit=10&sort=-population`, optionsFetch)
        const resultadoFetch = await fetchearData.json()
        const options = resultadoFetch.data.map((ciudad) => {
            
            return {
                value: `latitude=${ciudad.latitude}&longitude=${ciudad.longitude}`,
                label: `${ciudad.name}, ${ciudad.countryCode}`
            }
        })

        callback(options)
    }, 800)



    const colorStyle = {
        option: (styles,) => {
            return { ...styles, color: "black" }
        }
    }


    return (
        <AsyncSelect
            placeholder="Ingrese la ciudad deseada"
            loadOptions={loadOptions}
            defaultOptions
            styles={colorStyle}
            onChange={handleChange}
            className="select"
        ></AsyncSelect>
    )
}