import { useRef, useState, useEffect } from 'react';

const initialTime = 300;
export const App = () => {
  const [timer, setTimer] = useState(initialTime);
  const [isTimerOn, setIsTimerOn] = useState(false);
  const interval = useRef<ReturnType<typeof setInterval>>();
  function handleButtonClick() {
    if (isTimerOn) {
      handleStopButton();
      return;
    }

    handleStartButton();
  }
  function handleStartButton() {
    console.log(timer, 'timer inside function');
    interval.current = setInterval(() => {
      setTimer((timer) => (timer > 0 ? timer - 1 : 0));
    }, 1000);
    setIsTimerOn(true);
  }

  useEffect(() => {
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  function handleStopButton() {
    clearInterval(interval.current);
    setIsTimerOn(false);
  }

  function handleResetButton() {
    clearInterval(interval.current);
    setTimer(initialTime);
    setIsTimerOn(false);
  }

  return (
    <div className="card mx-auto my-4 w-96 items-center bg-neutral text-center text-neutral-content">
      <h1 className="card-title">
        Timer: {Math.floor(timer / 60)}min {Math.floor(timer % 60)}sec
      </h1>
      <div className="flex">
        <div>
          <button
            className={isTimerOn ? 'btn btn-error m-4' : 'btn btn-primary m-4'}
            onClick={handleButtonClick}
          >
            {isTimerOn ? 'Stop' : 'Start'}
          </button>
        </div>
        <div>
          <button className="btn btn-primary m-4" onClick={handleResetButton}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
