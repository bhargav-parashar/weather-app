import styles from "./WeatherCard.module.css";


const WeatherCard = ({label,value, type})=>{
    return(
        <div className={styles['weather-card']}>
            <h2>{label}</h2>
            <p>{value}</p>
        </div>
    )
}
export default WeatherCard;