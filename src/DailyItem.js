import './DailyItem.scss';
import Icon from './Icon';

const DailyItem = (props) => {
  const {timezone, time, tempDay, tempNight, icon} = props;
  const date = new Date((time+timezone)*1000);
  const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const weekday = date.getDay();

  return(
    <div className="daily-item">
      <div className="daily-item-day">{`${weekdays[weekday]}`}</div>
      <div className="daily-icon"><Icon icon={icon} /></div>
      
      <div className="temp-day">{Math.round(tempDay)}<div className="degree"></div></div>
      <div className="temp-night">{Math.round(tempNight)}<div className="degree"></div></div>
    </div>
  )
}

export default DailyItem;