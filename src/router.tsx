import { Link, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Weather from './components/weather/Weather';
import Timer from './components/timer/Timer';
import UserActivity from './components/userActivity/UserActivity';
import ReduxTimer from './components/redux-timer/ReduxTimer';

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
        path: 'reduxtimer',
        element: <ReduxTimer />,
      },
      {
        path: 'weather',
        element: <Weather />,
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
