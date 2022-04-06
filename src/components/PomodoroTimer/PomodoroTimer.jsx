import { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Link } from "react-router-dom";
import "./PomodoroTimer.css";

export const PomodoroTimer = ({ timer, breakTimer }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [key, setKey] = useState(1);
  const [isFocusTime, setFocusTime] = useState(true);
  const [isBreakTime, setBreakTime] = useState(false);

  const renderTaskTimer = ({ remainingTime }) => {
    const mins = Math.floor((remainingTime % 3600) / 60);
    const seconds = Math.floor(remainingTime % 60);

    return (
      <div className="timer-display">
        <h1 className="timer-display-content">
          {mins} mins : {seconds} secs
        </h1>
        {!isPlaying && <p className="timer-display-content">PAUSED</p>}
      </div>
    );
  };

  const renderBreakTimer = ({ remainingTime }) => {
    const mins = Math.floor((remainingTime % 3600) / 60);
    const seconds = Math.floor(remainingTime % 60);

    return (
      <div className="timer-display">
        <h1 className="timer-display-content">
          {mins} mins : {seconds} secs
        </h1>
        <h2 className="timer-display-content">BREAK TIME</h2>
        <p className="timer-display-small">Sit back and relax</p>
      </div>
    );
  };

  const focusTimeCompletionHandler = () => {
    setBreakTime(true);
    setFocusTime(false);
  };

  const breakTimeCompletionHandler = () => {
    setBreakTime(false);
  };
  return (
    <div>
      <div className="timer">
        {isFocusTime && (
          <CountdownCircleTimer
            isPlaying={isPlaying}
            duration={timer * 60}
            colors={["#4158D0", "#C850C0", "#FFCC70", "#A30000"]}
            colorsTime={[timer * 60, (timer * 60) / 2, (timer * 60) / 4, 0]}
            size={320}
            key={key}
            onComplete={focusTimeCompletionHandler}
          >
            {({ remainingTime }) => renderTaskTimer({ remainingTime })}
          </CountdownCircleTimer>
        )}

        {isBreakTime && (
          <CountdownCircleTimer
            isPlaying={isPlaying}
            duration={breakTimer * 60}
            colors={["#4158D0", "#C850C0", "#FFCC70", "#A30000"]}
            colorsTime={[
              breakTimer * 60,
              (breakTimer * 60) / 2,
              (breakTimer * 60) / 4,
              0,
            ]}
            size={320}
            key={key + 1}
            onComplete={breakTimeCompletionHandler}
          >
            {({ remainingTime }) => renderBreakTimer({ remainingTime })}
          </CountdownCircleTimer>
        )}
      </div>

      {!isFocusTime && !isBreakTime && (
        <div className="restart-div">
          <h2 className="restart-heading">
            Want to continue working on this task?
          </h2>
          <button
            className="button btn-secondary restart-btn"
            onClick={() => setFocusTime(true)}
          >
            <i class="fas fa-redo-alt"></i> Restart Timer
          </button>

          <h2 className="restart-heading">
            Done working on this task and want to move on to a new task?
          </h2>
          <Link to="/tasks" className="">
            <button className="button btn-secondary redirect-btn">
              <i class="fas fa-tasks"></i> Go to Tasks Page
            </button>
          </Link>
        </div>
      )}

      {isFocusTime && (
        <div className="timer-controls">
          <button
            onClick={() => setIsPlaying(true)}
            class="button btn-secondary btn-float play-btn"
            disabled={isPlaying}
          >
            <i class="fas fa-play"></i>
          </button>

          <button
            onClick={() => setIsPlaying(false)}
            class="button btn-secondary btn-float pause-btn"
            disabled={!isPlaying}
          >
            <i class="fas fa-pause"></i>
          </button>

          <button
            onClick={() => {
              setKey(key + 1);
              setIsPlaying(false);
            }}
            class="button btn-secondary reset-btn"
          >
            <i class="fas fa-redo-alt"></i> Reset Timer
          </button>
        </div>
      )}
    </div>
  );
};
