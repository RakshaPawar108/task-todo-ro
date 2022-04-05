import { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./PomodoroTimer.css";

export const PomodoroTimer = ({ timer }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [key, setKey] = useState(1);

  const renderTimer = ({ remainingTime }) => {
    const mins = Math.floor((remainingTime % 3600) / 60);
    const seconds = Math.floor(remainingTime % 60);

    return (
      <div className="timer-display">
        <h1 className="timer-display-content">
          {mins} mins : {seconds} secs
        </h1>
      </div>
    );
  };
  return (
    <div>
      <div className="timer">
        <CountdownCircleTimer
          isPlaying={isPlaying}
          duration={timer * 60}
          colors={["#4158D0", "#C850C0", "#FFCC70", "#A30000"]}
          colorsTime={[timer * 60, (timer * 60) / 2, (timer * 60) / 4, 0]}
          size={320}
          key={key}
        >
          {({ remainingTime }) => renderTimer({ remainingTime })}
        </CountdownCircleTimer>
      </div>

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
    </div>
  );
};
