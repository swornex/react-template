import { useRef, useState, useEffect } from 'react';

const initialTime = 300;
export const Timer = () => {
  const [timer, setTimer] = useState(initialTime);
  const [isTimerOn, setIsTimerOn] = useState(false);
  const interval = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    return () => {
      clearInterval(interval.current);
    };
  }, []);
  function handleButtonClick() {
    if (isTimerOn) {
      handleStopButton();
      return;
    }

    handleStartButton();
  }
  function handleStartButton() {
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
    <div className="flex h-full flex-col items-center justify-center gap-5 bg-slate-200">
      <span className="text-3xl font-bold">Simple Timer</span>

      <div className="card w-96 items-center bg-white text-center text-black">
        <div className="m-5 flex items-center gap-4">
          <div className="card w-20 rounded bg-sky-400 p-4 text-white ">
            <h1 className="card-title justify-center text-2xl">
              {Math.floor(timer / 60)}
            </h1>
          </div>

          <span className="card-title text-5xl font-bold text-slate-500">
            :
          </span>

          <div className="card w-20 rounded bg-sky-400 p-4 text-white ">
            <h1 className="card-title  justify-center text-2xl">
              {Math.floor(timer % 60)}
            </h1>
          </div>
        </div>

        <div className="flex">
          <div>
            <button
              className={
                isTimerOn
                  ? 'btn btn-outline btn-error m-4'
                  : 'btn btn-outline btn-success m-4 '
              }
              onClick={handleButtonClick}
            >
              {isTimerOn ? 'Stop' : 'Start'}
            </button>
          </div>

          <div>
            <button
              className="btn btn-outline btn-primary m-4"
              onClick={handleResetButton}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
