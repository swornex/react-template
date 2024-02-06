import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Weather from './components/weather/Weather';
import Timer from './components/timer/Timer';
import UserActivity from './components/userActivity/UserActivity';
import App from './App';
import Home from './components/Home';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

const router = createBrowserRouter([
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
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
