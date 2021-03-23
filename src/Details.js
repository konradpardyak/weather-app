import './css/weather-icons.min.css'
import './Details.scss';

const Details = (props) => {
  const {feels, wind, humidity, pressure, uvi, clouds} = props;
  return(
    <div className="details">
      <div className="title">DETAILS<span className="line"></span></div>
      <div className="tail">
        <i className="wi wi-thermometer"></i>
        <span>Feels like</span>
        <span className="value">{Math.round(feels)}<div className="degree"></div></span>
      </div>
      <div className="tail">
        <i className="wi wi-strong-wind"></i>
        <span>Wind</span>
        <span className="value">{Math.round(wind*3.6)} km/h</span>
      </div>
      <div className="tail">
        <i className="wi wi-humidity"></i>
        <span>Humidity</span>
        <span className="value">{humidity} %</span>
      </div>
      <div className="tail">
        <i className="wi wi-barometer"></i>
        <span>Pressure</span>
        <span className="value">{pressure} hPa</span>
      </div>
      <div className="tail">
        <i className="wi wi-sunrise"></i>
        <span>UV index</span>
        <span className="value">{Math.round(uvi)}</span>
      </div>
      <div className="tail">
        <i className="wi wi-cloud"></i>
        <span>Cloudiness</span>
        <span className="value">{clouds} %</span>
      </div>
    </div>
  )
}

export default Details;