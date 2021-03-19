import './Content.scss';
import City from './City';

const Content = (props) => {
  const {cityName, weather} = props;
  console.log(weather);

  return(
    <div className="content">

      <div className="container container-main container-header">
        <div className="item item-inner item-header">
          <City city={cityName} timezone={weather.timezone_offset}/>
        </div>
        <div className="item item-inner item-header">Search</div>
      </div>

      <div className="container container-main">

        <div className="item item-left container container-side">

          <div className="item container container-weather">
            <div className="item item-inner">Temperature</div>
            <div className="item item-inner">Icon</div>
          </div>

          <div className="item item-inner">Hourly prediction</div>

        </div>

        <div className="item item-right container container-side">

          <div className="item container container-more">
            <div className="item item-inner item-details">Details</div>
            <div className="item item-inner item-next">Next 7 days</div>
          </div>

          <div className="item item-inner">Allerts</div>

        </div>

      </div>

    </div>
  )
}

export default Content;