import './Sky.scss';

const Sky = (props) => {

  const {condition, temperature, currentTime, sunset, sunrise} = props;

  const dayTimeResponse = (currentTime, sunset, sunrise) => {
    if(currentTime < sunrise  || currentTime > sunset) return "night";
    if((currentTime >= sunrise && currentTime < sunrise + 3600) || (currentTime > sunset - 3600 && currentTime <= sunset)) return "sunsetSunrise";
    return "day";
  }

  const dayTime = dayTimeResponse(currentTime, sunset, sunrise);

  const background = (condition, temperature) => {
    if(condition === "Clear") {
      if(dayTime === "day") {
        if(temperature > 0) return "linear-gradient(#4da4d9, #88bce6)";
        return "linear-gradient(#3a75d3, #cbe5fe)";
      }
      if(dayTime === "sunsetSunrise") return "linear-gradient(#810f63, #f94f39)";
      return "linear-gradient(#0d2644, #654079)";
    }

    if(condition === "Clouds") {
      if(dayTime === "day") return "linear-gradient(#7196b3, #bbcdd7)";
      if(dayTime === "sunsetSunrise") return "linear-gradient(#5a7f9b, #ffc0a4)";
      return "linear-gradient(#0d2644, #654079)";
    }

    if(condition === "Drizzle") {
      if(dayTime === "day") return "linear-gradient(#bfc9d5, #8498a3)";
      if(dayTime === "sunsetSunrise") return "linear-gradient(#cec9c6, #8498a3)";
      return "linear-gradient(#0d2644, #654079)";
    }

    if(condition === "Rain") {
      if(dayTime === "day") return "linear-gradient(#63868f, #a8cacc)";
      if(dayTime === "sunsetSunrise") return "linear-gradient(#63868f, #d0c4c6)";
      return "linear-gradient(#0d2644, #654079)";
    }

    if(condition === "Thunderstorm") {
      if(dayTime === "day") return "linear-gradient(#143347, #aea9af)";
      if(dayTime === "sunsetSunrise") return "linear-gradient(#143347, #bda9a5)";
      return "linear-gradient(#0d2644, #654079)";
    }

    if(condition === "Snow") {
      if(dayTime === "day") return "linear-gradient(#939097, #cecfcc)";
      if(dayTime === "sunsetSunrise") return "linear-gradient(#939097, #f0e4d6)";
      return "linear-gradient(#0d2644, #654079)";
    }

    if(condition === "Mist" || condition === "Fog") {
      if(dayTime === "day") return "linear-gradient(#c9c8d7, #9b9aa7)";
      if(dayTime === "sunsetSunrise") return "linear-gradient(#e0cccd, #96959a)";
      return "linear-gradient(#0d2644, #654079)";
    }

    if(condition === "Smoke" || condition === "Haze") {
      if(dayTime === "day" || dayTime === "sunsetSunrise") return "linear-gradient(#c6bfb7, #9e9993)";
      return "linear-gradient(#0d2644, #654079)";
    }

    if(condition === "Dust" || condition === "Sand") {
      if(dayTime === "day" || dayTime === "sunsetSunrise") return "linear-gradient(#b17239, #dba660)";
      return "linear-gradient(#0d2644, #654079)";
    }
    if(condition === "Squall" || condition === "Tornado") {
      if(dayTime === "day" || dayTime === "sunsetSunrise") return "linear-gradient(#35333b, #b3957f)";
      return "linear-gradient(#0d2644, #654079)";
    }
    if(condition === "Ash") {
      if(dayTime === "day" || dayTime === "sunsetSunrise") return "linear-gradient(#444d58, #bdc2c9)";
      return "linear-gradient(#0d2644, #654079)";
    }
  }

  const backgroundStyle = background(condition, temperature);

  return(
    <div className="sky" style={{backgroundImage: backgroundStyle}}>
      {props.children}
    </div>
  )
}

export default Sky;