import { useLoaderData } from 'react-router-dom';
import WeatherDisplay, { WeatherResInterface } from './WeatherDisplay';

const Weather = () => {
  const weatherData = useLoaderData() as WeatherResInterface;

  return (
    <>
      <div className="flex h-full items-center justify-center bg-neutral-300">
        <WeatherDisplay weather={weatherData} />
      </div>
    </>
  );
};

export default Weather;
