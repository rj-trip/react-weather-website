import SearchBox from "./SearchBox";
import InfoBox  from "./InfoBox";
import { useState } from "react";
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
            feelsLike: 35.05,
            humidity: 100,
            temp: 28.05,
            tempMax: 28.05,
            tempMin: 28.05,
            weather: "overcast clouds",
    });
    let updateInfo= (Newinfo)=>{
         setWeatherInfo(Newinfo)
    }
    return (
        <div style={{textAlign:"center"}}>
            <h2 style={{color:"white"}}>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}