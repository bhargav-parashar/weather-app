import WeatherCard from "../WeatherCard/WeatherCard";
import styles from "./WeatherDisplay.module.css";

const WeatherDisplay = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles['weather-cards']}>
        <WeatherCard label="Temperature" value={`${data.current.temp_c}°C`} />
        <WeatherCard label="Humidity" value={`${data.current.humidity}%`} />
        <WeatherCard label="Condition" value={data.current.condition.text} />
        <WeatherCard label="Wind Speed" value={`${data.current.wind_kph} kph`}/>
      </div>
    </div>
  );
};
export default WeatherDisplay;
