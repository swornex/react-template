import { Icon } from '@phosphor-icons/react';

export interface WeatherResInterface {
  interval: number;
  rain: number;
  relative_humidity_2m: number;
  temperature_2m: number;
  time: number;
  wind_direction_10m: number;
}

export interface WeatherPropInterface {
  weather: WeatherResInterface;
}

export interface WeatherItemPropInterface {
  icon: Icon;
  name: string;
}
