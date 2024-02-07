import useAppSelector from '@/hooks/useAppSelector';
import WeatherDisplay from './WeatherDisplay';
import { fetchWeather, selectWeather } from './weatherSlice';
import useAppDispatch from '@/hooks/useAppDispatch';
import { useEffect } from 'react';

const Weather = () => {
  const { weather } = useAppSelector(selectWeather);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchWeather());
  }, []);
  return (
    <>
      <div className="flex h-full items-center justify-center bg-neutral-300">
        {!weather ? 'Loading...' : <WeatherDisplay weather={weather} />}
      </div>
    </>
  );
};

export default Weather;
