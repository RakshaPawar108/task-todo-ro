import { useLocation } from "react-router-dom";
import { PomodoroTimer } from "../../components";
import "./Pomodoro.css";

export const Pomodoro = () => {
  const location = useLocation();
  const { id, name, description, timer } = location.state;
  return (
    <div className="pomodoro-wrapper">
      <div className="grid grid-cols-2">
        <div className="col-1">
          <PomodoroTimer timer={timer} />
        </div>
        <div className="col-2">
          <div className="task-contents">
            <h3 className="task-title">{name}</h3>
            <p className="task-description">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
