import { WeatherItemPropInterface } from '@/interfaces/weather';

const WeatherItems = (props: WeatherItemPropInterface) => {
  const { icon: Icon, name } = props;
  return (
    <div className="items">
      <Icon size={20} />
      {name}
    </div>
  );
};

export default WeatherItems;
