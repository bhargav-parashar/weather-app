import React, { useState, useEffect } from "react";
import Searchbar from "../../components/Searchbar/Searchbar.jsx";
import styles from "./Home.module.css";
import WeatherDisplay from "../../components/WeatherDisplay/WeatherDisplay.jsx";
import axios from "axios";


const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const api_key = process.env.REACT_APP_API_KEY;

  const handleSearch = (city) => {
    setSearchInput(city);
  };

  //Make API call
  useEffect(() => {
    const getData = async () => {
      if (searchInput) {
        try {
          setIsLoading(true);
          const res = await axios.get(
            "https://api.weatherapi.com/v1/current.json",
            {
              params: {
                key: api_key,
                q: searchInput,
              },
            }
          );
          setWeatherData(res.data);
          setIsLoading(false);
        } catch (err) {
          alert("Failed to fetch weather data");
          setIsLoading(false);
        }
      }
    };
    getData();
  }, [searchInput]);
  
  return (
    <div className={styles.wrapper}>
      <Searchbar handleSearch={handleSearch} />
      {isLoading && <p className={styles.loading}>Loading data...</p>}
      {!isLoading && weatherData && <WeatherDisplay data={weatherData} /> }
    </div>
  );
};
export default Home;
