import './Daily.scss';
import Title from './Title';
import DailyItem from './DailyItem';

const Daily = (props) => {
  const {dailyArray, timezone} = props;
  const array = dailyArray.slice(1);

  return(
    <div className="daily">
      <Title title="DAILY" />
      <div className="daily-list">
        {array.map((day) => {
          return(
            <DailyItem
            timezone={timezone}
            time={day.dt}
            tempDay={day.temp.day} 
            tempNight={day.temp.night}
            icon={day.weather[0].icon}
            key={day.dt} />
          )
        })}
      </div>
    </div>
  )
}

export default Daily;