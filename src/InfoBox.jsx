import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1498805727644-a1ab8abb5b13?q=80&w=1778&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const HOT_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1476400424721-e25994a9f0ff?q=80&w=1947&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1498805727644-a1ab8abb5b13?q=80&w=1778&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
    return (
        <div className="InfoBox">
             {/* <h1>Weather Info</h1> */}
             <div className='card-container'>
             <Card sx={{ maxWidth: 345 }} style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;"}}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ?RAIN_URL :info.temp>20?HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{color:"#1976d2"}}>
          {info.city} {
            info.humidity>80
            ?<ThunderstormIcon />
              : info.temp > 20
              ?<WbSunnyIcon/>
              :<AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
       <p>Temprature = {info.temp}</p>
       <p>Humidity = {info.humidity}</p>
       <p>Min Temp = {info.tempMin}</p>
       <p>Max temp = {info.tempMax}</p>
       <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C </p>
         </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}

