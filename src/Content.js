import './Content.scss';
import City from './City';
import Search from './Search';
import Temperature from './Temperature';
import Conditions from './Conditions';
import Details from './Details';
import Hourly from './Hourly';
import Daily from './Daily';
import Alerts from './Alerts';
import Sky from './Sky';

const Content = (props) => {
  const {cityName, setCityName, weather, showError} = props;

  return(
    <Sky
    condition={weather.current.weather[0].main}
    conditionDescription={weather.current.weather[0].description}
    currentTime={weather.current.dt}
    sunset={weather.current.sunset}
    sunrise={weather.current.sunrise}
    >
      <div className="content">

        <div className="container container-main container-header">
          <div className="item item-inner item-header">
            <City city={cityName} timezone={weather.timezone_offset}/>
          </div>
          <div className="item item-inner item-header">
            <Search setCityName={setCityName} showError={showError} />
          </div>
        </div>

        <div className="container container-main">

          <div className="item item-left container container-side">

            <div className="item container container-weather">
              <div className="item item-inner item-temperature">
                <Temperature temperature={weather.current.temp} />
              </div>
              <div className="item item-inner item-conditions">
                <Conditions weather={weather.current.weather[0]} temp={weather.daily[0].temp} />
              </div>
            </div>

            <div className="item item-inner item-hourly">
              <Hourly hourlyArray={weather.hourly} timezone={weather.timezone_offset} />
            </div>

          </div>

          <div className="item item-right container container-side">

            <div className="item container container-more">
              <div className="item item-inner item-details">
                <Details 
                feels={weather.current.feels_like}
                wind={weather.current.wind_speed} 
                humidity={weather.current.humidity} 
                pressure={weather.current.pressure}
                uvi={weather.current.uvi}
                clouds={weather.current.clouds} />
              </div>
              <div className="item item-inner item-next">
                <Daily dailyArray={weather.daily} timezone={weather.timezone_offset} />
              </div>
            </div>

            <div className="item item-inner item-alerts">
              <Alerts alerts={weather.alerts} />
            </div>

          </div>

        </div>

      </div>
    </Sky>
  )
}

export default Content;