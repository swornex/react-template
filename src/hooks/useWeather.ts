import { WeatherResInterface } from '@/interfaces/weather';
import { useEffect, useState } from 'react';

const useWeather = (long: number, lat: number) => {
  const [weather, setWeather] = useState<WeatherResInterface>(
    {} as WeatherResInterface,
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getWeather();
  }, [long, lat]);

  async function getWeather() {
    try {
      setIsLoading(true);
      const data = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,relative_humidity_2m,rain,wind_direction_10m&format=json&timeformat=unixtime`,
      );

      const res = await data.json();
      setWeather(res.current);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return { weather, isLoading, error };
};

export default useWeather;
