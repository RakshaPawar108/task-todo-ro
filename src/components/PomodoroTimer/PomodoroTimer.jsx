import { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./PomodoroTimer.css";

export const PomodoroTimer = ({ timer }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [key, setKey] = useState(1);

  const renderTimer = ({ remainingTime }) => {
    const mins = Math.floor((remainingTime % 3600) / 60);
    const seconds = Math.floor(remainingTime % 60);

    return (
      <div className="timer-display">
        <p>
          {mins} mins: {seconds} secs
        </p>
      </div>
    );
  };
  return (
    <div>
      <div className="timer">
        <CountdownCircleTimer
          isPlaying={isPlaying}
          duration={timer * 60}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[timer * 60, (timer * 60) / 4, (timer * 60) / 6, 0]}
          size={350}
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
          <i class="fas fa-play-circle"></i>
        </button>

        <button
          onClick={() => setIsPlaying(false)}
          class="button btn-secondary btn-float pause-btn"
          disabled={!isPlaying}
        >
          <i class="fas fa-pause"></i>
        </button>

        <div className="reset-button-container">
          <button
            onClick={(key) => setKey(key + 1)}
            class="button btn-secondary"
          >
            <i class="fas fa-redo-alt"></i> Reset Timer
          </button>
        </div>
      </div>
    </div>
  );
};
