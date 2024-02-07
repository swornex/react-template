import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Weather from './components/weather/Weather';
import Timer from './components/timer/Timer';
import UserActivity from './components/userActivity/UserActivity';
import App from './App';
import Home from './components/Home';
import ReduxTimer from './components/redux-timer/ReduxTimer';
import { Provider } from 'react-redux';
import { store } from './app/store';

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
]);

root.render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
