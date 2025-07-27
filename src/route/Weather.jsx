import React, {useEffect, useState,useMemo,useRef} from 'react'
import {debounce} from "lodash"


const useWeatherData = () => {
    const _weatherData = [{city:"Delhi", temp:20}, {city: "lakhnow" , temp: 33}, {city: "lakhimpur", temp: 55}]

    const [weatherData, setWeatherData] = useState([])

    const fetchWeatherData = (city) => {
      console.log("making weather call for", city)
       let filteredWeatherData =  _weatherData.filter(item=> item.city.startsWith(city))
       if(!city) filteredWeatherData = _weatherData
       setWeatherData(filteredWeatherData)
    }

    return {
      weatherData,
      fetchWeatherData
    }
}

const Weather = () => {
  const [city, setCity] = useState('')
  const {weatherData, fetchWeatherData} = useWeatherData();
  const timer = useRef()


  const handleChange = (e) => {
    const {value} = e.target
    setCity(value)
  }

  // option : 1
  // const _debouncedFetchWeatherData = useMemo(()=>debounce(fetchWeatherData, 1000),[fetchWeatherData])
  // useEffect(()=>{
  //   console.log("_debouncedFetchWeatherData-======",)
  //    _debouncedFetchWeatherData(city);
  //   return () => {
  //   _debouncedFetchWeatherData.cancel(); // ✅ Cancel any pending debounce
  // };
  // },[city])


  // option : 2
  useEffect(()=>{
    timer.current = setTimeout(()=>{
       fetchWeatherData(city)
    }, 1000)
    return ()=> clearTimeout(timer.current)
  },[city,fetchWeatherData])

  return (<>
    <input type="text" value={city} onChange={handleChange}/>
    <div>Weather</div>
    <CityWeatherList data={weatherData}/>
    </>
  )
}


const CityWeatherList = (props) => {
    const {data} = props
    return (<>
      {data?.map((item) => (<div>{item.city} </div>))}
      </>
    )
}

export default Weather