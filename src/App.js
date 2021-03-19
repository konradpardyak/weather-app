import { useEffect, useState } from 'react';
import axios from 'axios';

import Content from './Content';

const App = () => {
  const [cityName, setCityName] = useState("London");
  const [cityInfo, setCityInfo] = useState();
  const [weather, setWeather] = useState(true);

  useEffect(() => {
    const API_KEY = "8474678f08288c9925e4023da4548128";
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${API_KEY}`).then((res) => {
      const responseCityInfo = res.data;
      setCityInfo(responseCityInfo.city);
      axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${res.data.city.coord.lat}&lon=${res.data.city.coord.lon}&appid=${API_KEY}`).then((res) =>{
        const responseWeather = res.data;
        setWeather(responseWeather);
      }).catch(error => console.log(error.response));
    }).catch(error => console.log(error.response));
  }, [cityName]);
  
  return (
    <div className="App">
      {
        weather ? <Content cityInfo={cityInfo} weather={weather} /> : <div>Loading page</div>
      }
    </div>
  );
}

export default App;
