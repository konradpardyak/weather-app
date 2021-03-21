import './Temperature.scss';

const Temperature = (props) => {
  const {temperature} = props;
  return(
    <div className="temperature">
      {Math.round(temperature)}<div className="degree"></div>
    </div>
  )
}

export default Temperature;