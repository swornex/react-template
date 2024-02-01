import { useEffect, useState } from 'react';
import WeatherDisplay from './WeatherDisplay';

const Weather = () => {
  const [weather, setWeather] = useState();
  useEffect(() => {
    getWeather();
  }, []);

  async function getWeather() {
    const data = await fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=28&longitude=84&current=temperature_2m,relative_humidity_2m,rain,wind_direction_10m&format=json&timeformat=unixtime',
    );

    const res = await data.json();
    setWeather(res.current);
  }

  return (
    <>
      <div className="flex h-full items-center justify-center bg-neutral-300">
        {weather ? <WeatherDisplay weather={weather} /> : 'Loading...'}
      </div>
    </>
  );
};

export default Weather;
