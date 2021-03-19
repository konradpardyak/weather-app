import './Content.scss';

const Content = (props) => {
  const {cityInfo, weather} = props;

  return(
    <div className="content">

      <div className="container container-main container-header">
        <div className="item item-inner item-header">City</div>
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