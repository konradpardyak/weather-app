import './Hourly.scss'
import Title from './Title';
import ChartItem from './ChartItem';

const Hourly = (props) => {
  const {hourlyArray, timezone} = props;
  const array = hourlyArray.slice(0,10);

  const minTemp = array.reduce((currentMin, item) => {
    if(item.temp<currentMin){
      currentMin = item.temp;
    }
    return Math.round(currentMin);
  }, 100);

  const maxTemp = array.reduce((currentMax, item) => {
    if(item.temp>currentMax){
      currentMax = item.temp;
    }
    return Math.round(currentMax);
  }, -100);

  const difference = maxTemp - minTemp;

  return(
    <div className="hourly">
      <Title title="HOURLY" />
      <div className="chart">
        {array.map((hour)=>{
          return(
            <ChartItem 
            timezone={timezone} 
            time={hour.dt} 
            temp={hour.temp} 
            fillHeight={difference ? (50*(Math.round(hour.temp) - minTemp)/(difference)) : 25}
            icon={hour.weather[0].icon}
            key={hour.dt} />
          )
        })}
      </div>
    </div>
  )
}

export default Hourly;