import { Link, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Weather from './components/weather/Weather';
import Timer from './components/timer/Timer';
import UserActivity from './components/userActivity/UserActivity';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'weather/:lat/:long',
        element: <Weather />,
        loader: async ({ params }) => {
          const res = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${params.lat}&longitude=${params.long}&current=temperature_2m,relative_humidity_2m,rain,wind_direction_10m&format=json&timeformat=unixtime`,
          );
          const data = await res.json();
          return data.current;
        },
      },

      {
        path: 'timer',
        element: <Timer />,
      },

      {
        path: 'useractivity',
        element: <UserActivity />,
      },
    ],
  },
  {
    path: '*',
    element: (
      <>
        <h1 className="text-xl">[404! NOT FOUND]</h1>
        <h1 className="text-xl"> ⬇️ Click Below </h1>
        <Link to={'/'} className="text-xl text-blue-700 underline">
          Home
        </Link>
      </>
    ),
  },
]);
