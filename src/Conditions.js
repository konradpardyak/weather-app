import './css/weather-icons.min.css'
import './Conditions.scss';
import Icon from './Icon.js';

const Conditions = (props) => {
  const {weather, temp} = props;
  const {description, icon} = weather;
  const {min, max} = temp;
  return (
    <div className="conditions">
      <div className="conditions-up">
        <Icon icon={icon} />
        <div className="min-max">
          <div>{Math.round(max)}<div className="degree"></div></div>
          <div className="min">{Math.round(min)}<div className="degree"></div></div>
        </div>
      </div>
      <div className="description">
        {description.charAt(0).toUpperCase() + description.slice(1)}
      </div>
    </div>
  )
}

export default Conditions;