import { useEffect, useState } from 'react';
import axios from 'axios';

import Content from './Content';

const App = () => {
  const [cityName, setCityName] = useState("London");
  const [cityInfo, setCityInfo] = useState();
  const [weather, setWeather] = useState();
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const API_KEY = "8474678f08288c9925e4023da4548128";
    axios.get(`//api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`).then((res) => {
      const responseCityInfo = res.data;
      axios.get(`//api.openweathermap.org/data/2.5/onecall?lat=${res.data.city.coord.lat}&lon=${res.data.city.coord.lon}&units=metric&exclude=minutely&appid=${API_KEY}`).then((res) =>{
        const responseWeather = res.data;
        setShowError(false);
        setCityInfo(responseCityInfo.city);
        setWeather(responseWeather);
      }).catch(error => console.log(error.response));
    }).catch(error => {
      console.log(error.response);
      if(error.response.statusText === "Not Found") {
        setShowError(true);
      };
    });
  }, [cityName]);
  
  return (
    <div>
      {
        weather ? <Content cityName={cityInfo.name} weather={weather} setCityName={setCityName} showError={showError} /> : <div>Loading page</div>
      }
    </div>
  );
}

export default App;
