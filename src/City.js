import { useEffect, useState } from 'react';
import './City.scss';

const City = (props) => {
  const {city, timezone} = props;
  const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const [weekday, setWeekday] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setminute] = useState(0);

  const makeTime = () => {
    const date = new Date();
    let weekday = date.getDay();
    let hour = date.getUTCHours();
    let minute = date.getUTCMinutes();

    hour = hour + Math.floor(timezone/3600);
    minute += (timezone%3600/60);

    if(minute < 0) {
      hour --;
      minute += 60;
    } else if(minute > 59) {
      hour ++;
      minute -= 60;
    }

    if(hour > 23) {
      weekday ++;
      hour -= 24;
    } else if(hour < 0) {
      weekday --;
      hour += 24;
    }

    setWeekday(weekday);
    setHour(hour);
    setminute(minute);
  }

  useEffect(() => {
    makeTime();
    const timeout = setInterval(() => makeTime(), 1000);
    return () => clearInterval(timeout);
  }, []);

  return(
    <>
    <h1 className="cityName">{city}</h1>
    <p className="time">{`${weekdays[weekday]} ${hour<10 ? "0" : ""}${hour}:${minute<10 ? "0" : ""}${minute}`}</p>
    </>
  )
}

export default City;