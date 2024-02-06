import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className=" bg-slate-500 p-2 text-xl text-white">
      <nav className="mx-52 my-4 flex justify-between ">
        <Link to={'timer'} className="hover:text-slate-300">
          Timer
        </Link>
        <Link to={'weather/84/28'} className="hover:text-slate-300">
          Weather Forecast
        </Link>
        <Link to={'useractivity'} className="hover:text-slate-300">
          User Activity
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
