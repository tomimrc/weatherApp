

import React, { useEffect, useState } from 'react'
import AsyncSelect from "react-select/async"


function Form() {
  
  const [ciudad, setCiudad] = useState("")
  const [clima, setClima] = useState("")
  const [resultados , setResultados] = useState([])

  const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=100000&namePrefix=${ciudad}&limit=10&sort=-population`;
  const options = {
                    method: 'GET',
                    headers: {
                      'X-RapidAPI-Key': 'f908da494bmsh24345305981fbcdp13d694jsnefe142f7c49a',
                      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
                    }
                  };

  // useEffect(() => {
  //   if (resultados.length >= 1) {
  //     setTimeout(() => {search()}, 200)
  //   }
  // }, [resultados]);
  

  function debounce(loadOptions, wait) {
    let timerId;
    return (...args) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        loadOptions(...args);
      }, wait);
    };
  }

  const loadOptions = debounce((inputValue, callback) => {
    
    return fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=100000&namePrefix=${inputValue}&limit=10&sort=-population`, options)
    
      
      .then((response) => (response.json()))
      .then((response) =>  {
        return{
          options:response.data.map((city)=>{
            return{
              label:city.name
            }
          })
        }
      })
      .catch((err) => console.log(err))

  },800)
  const search =  async ()=>{
    const fetchData = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${resultados[0].latitude}&longitude=${resultados[0].longitude}&current=temperature_2m,precipitation,weather_code,wind_speed_10m&timezone=America%2FSao_Paulo`);
    const searchData = await fetchData.json()
    setClima(searchData)  
  }

  
    const opciones = [{valor:"juan",label:"juan", color:"#FF8B00"},{valor:"pedro",label:"pedro"},{valor:"pepe",label:"pepe"},{valor:"tomas",label:"tomas"}]



    // const filter= (inputValue) => {
    //   return resultados.filter((i) =>
    //     i.label.toLowerCase().includes(inputValue.toLowerCase())
    //   );
    // };
    
      // setCiudad(inputValue)
      // if (ciudad.length >= 3) {
      // }
      // setTimeout(() => {
      //   callback(filter(inputValue));
      // }, 1000);
    // };

    let colorStyles = {
      control: (styles) => ({...styles,}),
      option:(styles, {data, isDisabled, isFocused, isSelected}) => {
        return {...styles, color: "black"}
      }
    }

  const fetchearCiudades = async(inputValue) => {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setResultados(data.data)

    } catch (error) {
      console.error(error);
    }
    
  }

  const handleChange = (selectedOption) => {
    console.log("hgolaaa",selectedOption);
    // setCiudad(selectedOption)
  }

  const handleSubmit = async (e) => {
    e.preventDefault() 
    loadOptions()
    // await fetchearCiudades()
    // setTimeout(()=>{search()}, 2000)
    // await search()
  }
  return (<>
    <AsyncSelect
    placeholder=" search for city"
    onChange={handleChange}
    loadOptions={loadOptions}
    defaultOptions
    styles={colorStyles}
    >
    </AsyncSelect>


  <form action="Submit" onSubmit={handleSubmit}>
    {/* <input type='search' placeholder='Busca tu ciudad' onChange={handleChange} value={ciudad} >
    </input> */}
    <button type='submit'>Lupa</button>
  </form>
  {/* <h4>
    Ciudad:{JSON.stringify(resultados[0] && resultados[0].name)}
    <br/>
    Fecha: {JSON.stringify(clima && clima.current.time)}
    <br />
    Temperatura: {JSON.stringify(clima && clima.current.temperature_2m)}
    <br />
    WeatherCode: {JSON.stringify(clima  && clima.current.weather_code)}
  </h4>
  <h5>{resultados.length > 1 ? resultados.map((resultado, index) => {
    return <p id={index}>{resultado.name}</p> 
  }): resultados.current}</h5> */}
  

</>

  )
}


export default Form