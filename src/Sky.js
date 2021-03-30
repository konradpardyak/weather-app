import './Sky.scss';

const Sky = (props) => {

  const {condition, conditionDescription, currentTime, sunset, sunrise} = props;
  console.log(conditionDescription);

  const dayTimeResponse = (currentTime, sunset, sunrise) => {
    if(currentTime < sunrise  || currentTime > sunset) return "night";
    if((currentTime >= sunrise && currentTime < sunrise + 3600) || (currentTime > sunset - 3600 && currentTime <= sunset)) return "sunsetSunrise";
    return "day";
  }

  const dayTime = dayTimeResponse(currentTime, sunset, sunrise);

  const background = (condition, conditionDescription) => {
    if(condition === "Clear") {
      if(dayTime === "day") return "linear-gradient(#20a1f0, #23d3da)";
      if(dayTime === "sunsetSunrise") return "linear-gradient(180deg, rgba(129,15,99,1) 0%, rgba(188,46,78,1) 30%, rgba(249,79,57,1) 75%, rgba(249,130,57,1) 100%)";
    }
    if(condition === "Clouds") {
      if(dayTime === "day") {
        if(conditionDescription === "few clouds") return "linear-gradient(#68798e, #86d5e9)";
        return "linear-gradient(#445467, #a8c3d2)";
      }
      if(dayTime === "sunsetSunrise") return "linear-gradient(#445467, #cfa896)";
    }
    if(condition === "Drizzle") {
      if(dayTime === "day") return "linear-gradient(#99a9af, #32545c)";
      if(dayTime === "sunsetSunrise") return "linear-gradient(#c2b4b0, #32545c)";
    }
    if(condition === "Rain") {
      if(dayTime === "day") return "linear-gradient(#32545c, #9ebbc6)";
      if(dayTime === "sunsetSunrise") return "linear-gradient(#32545c, #cfa896)";
    }
    if(condition === "Thunderstorm") {
      if(dayTime === "day") return "linear-gradient(#343b45, #aca9c2)";
      if(dayTime === "sunsetSunrise") return "linear-gradient(#343b45, #c2a9bd)";
    }
    if(condition === "Snow") {
      if(dayTime === "day") return "linear-gradient(#939097, #cecfcc)";
      if(dayTime === "sunsetSunrise") return "linear-gradient(#939097, #f0e4d6)";
    }
    if(condition === "Mist" || condition === "Fog") {
      if(dayTime === "day") return "linear-gradient(#c9c8d7, #9b9aa7)";
      if(dayTime === "sunsetSunrise") return "linear-gradient(#e0cccd, #96959a)";
    }
    if(condition === "Smoke" || condition === "Haze") {
      if(dayTime === "day" || dayTime === "sunsetSunrise") return "linear-gradient(#c6bfb7, #9e9993)";
    }
    if(condition === "Dust" || condition === "Sand") {
      if(dayTime === "day" || dayTime === "sunsetSunrise") return "linear-gradient(#b17239, #dba660)";
    }
    if(condition === "Squall" || condition === "Tornado") {
      if(dayTime === "day" || dayTime === "sunsetSunrise") return "linear-gradient(#35333b, #b3957f)";
    }
    if(condition === "Ash") {
      if(dayTime === "day" || dayTime === "sunsetSunrise") return "linear-gradient(#444d58, #bdc2c9)";
    }
    return "linear-gradient(#0d2644, #400d5b)";
  }

  const backgroundStyle = background(condition, conditionDescription);

  return(
    <div className="sky" style={{backgroundImage: backgroundStyle}}>
      {props.children}
    </div>
  )
}

export default Sky;