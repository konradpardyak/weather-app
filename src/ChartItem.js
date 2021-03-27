import './ChartItem.scss';
import Icon from './Icon';

const ChartItem = (props) => {
  const {timezone, time, temp, fillHeight, icon} = props;
  const date = new Date((time+timezone)*1000);
  const hour = date.getHours();
  const minute = date.getMinutes();

  return(
    <div className="chart-item">
      <Icon icon={icon} />
      <div className="column">
        <div className="temp">{Math.round(temp)}<div className="degree"></div></div>
        <div className="fill" style={{height: (`calc(${fillHeight}px + 60px)`)}}></div>
      </div>
      <div className="chart-item-time">{`${hour<10 ? "0" : ""}${hour}:${minute<10 ? "0" : ""}${minute}`}</div>
    </div>
  )
}

export default ChartItem;