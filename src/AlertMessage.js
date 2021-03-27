import './Alerts.scss';

const AlertMessage = (props) => {
  const {event, description} = props;
  return(
    <div className="alert-message">
      <h2 className="header">{event}</h2>
      <p className="description">{description}</p>
    </div>
  )
}

export default AlertMessage;