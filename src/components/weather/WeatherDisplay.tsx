import {
  Clock,
  CloudRain,
  CloudSun,
  DropHalfBottom,
  Wind,
} from '@phosphor-icons/react';
import dayjs from 'dayjs';
import WeatherItems from './WeatherItems';

export interface WeatherResInterface {
  interval: number;
  rain: number;
  relative_humidity_2m: number;
  temperature_2m: number;
  time: number;
  wind_direction_10m: number;
}

interface WeatherPropInterface {
  weather: WeatherResInterface;
}

const WeatherDisplay = (props: WeatherPropInterface) => {
  const { weather } = props;

  const weatherItemsArr = [
    { icon: DropHalfBottom, name: `${weather.temperature_2m} °C` },
    { icon: CloudRain, name: `${weather.relative_humidity_2m} %` },
    { icon: Clock, name: dayjs().format('hh:mm:ss') },
    { icon: Wind, name: `${weather.wind_direction_10m} °` },
  ];

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex items-center  gap-2">
          <CloudSun size={40} color="#FFFF00" />
          <h1 className="text-2xl font-semibold">Weather Forecast</h1>
        </div>

        <div className="mx-auto flex w-80 flex-col gap-8 rounded-xl bg-slate-100 p-10 text-xl ">
          <div className="text-6xl font-semibold">
            {weather.temperature_2m} °C
          </div>

          <div className="grid grid-cols-2 gap-6">
            {weatherItemsArr.map((item, index) => {
              return <WeatherItems key={index} {...item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherDisplay;
