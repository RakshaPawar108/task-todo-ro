import { useLocation } from "react-router-dom";
import { PomodoroTimer } from "../../components";
import "./Pomodoro.css";

export const Pomodoro = () => {
  const location = useLocation();
  const { name, description, timer, breakTimer } = location.state;

  return (
    <div className="pomodoro-wrapper">
      <div className="grid grid-cols-2">
        <div className="col-1">
          <PomodoroTimer timer={timer} breakTimer={breakTimer} />
        </div>
        <div className="col-2">
          <div className="task-contents">
            <h3 className="task-title">Task Name: {name}</h3>
            <p className="task-description">Task Description: {description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
