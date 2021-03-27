import './Alerts.scss';
import Title from './Title';
import AlertMessage from './AlertMessage';

const Alerts = (props) => {
  const {alerts} = props;

  return(
    <div className="alerts">
      <Title title="ALERTS" />
      <div className="alerts-field">
      {
        alerts ? alerts.map((alert) => {
          return (
            <AlertMessage
            event={alert.event}
            description={alert.description}
            key={alert.start} />
          )
        }) :
        <div className="empty">There are no current alerts</div>
      }
      </div>
    </div>
  )
}

export default Alerts;