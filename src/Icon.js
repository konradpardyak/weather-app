import './css/weather-icons.min.css'
import './Icon.scss';

const Icon = (props) => {
  const {icon} = props;
  const icons = {
    "01d" : "wi-day-sunny",
    "02d" : "wi-day-sunny-overcast",
    "03d" : "wi-day-cloudy",
    "04d" : "wi-cloudy height",
    "09d" : "wi-showers height",
    "10d" : "wi-day-showers",
    "11d" : "wi-day-thunderstorm",
    "13d" : "wi-day-snow",
    "50d" : "wi-day-fog",
    "01n" : "wi-night-clear height",
    "02n" : "wi-night-partly-cloudy height",
    "03n" : "wi-night-cloudy",
    "04n" : "wi-cloudy height",
    "09n" : "wi-showers",
    "10n" : "wi-night-showers",
    "11n" : "wi-night-thunderstorm",
    "13n" : "wi-night-snow",
    "50n" : "wi-night-fog"
  }

  return(
    <i className={`icon wi ${icons[icon]}`}></i>
  )
}

export default Icon;