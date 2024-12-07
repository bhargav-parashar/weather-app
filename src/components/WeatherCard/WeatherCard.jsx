import styles from "./WeatherCard.module.css";
import "../../styles.css";

const WeatherCard = ({label,value, type})=>{
    return(
        <div className="weather-card">
            <h2>{label}</h2>
            <p>{value}</p>
        </div>
    )
}
export default WeatherCard;