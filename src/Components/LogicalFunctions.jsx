
import { AsyncSel } from "./AsyncSelect"

export const LogicalFunctions = ({setClima, setCiudad, getWeatherIcon}) => {

    const debounce = (callback, ms) => {
        let timerId
        return (...args) => {
            clearTimeout(timerId)
            timerId = setTimeout(() => {
                callback(...args)
            }, ms);
        }
    }
    
    const optionsFetch = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f908da494bmsh24345305981fbcdp13d694jsnefe142f7c49a',
            'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
        }
    };

    return <AsyncSel 
                debounce={debounce}
                optionsFetch={optionsFetch} 
                setClima={setClima} 
                setCiudad={setCiudad} 
                getWeatherIcon={getWeatherIcon}
                
                />
}