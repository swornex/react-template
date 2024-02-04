import WeatherDisplay from './WeatherDisplay';
import useWeather from '@/hooks/useWeather';

const Weather = () => {
  const { weather, isLoading } = useWeather(84, 28);
  return (
    <>
      <div className="flex h-full items-center justify-center bg-neutral-300">
        {isLoading ? 'Loading...' : <WeatherDisplay weather={weather} />}
      </div>
    </>
  );
};

export default Weather;
