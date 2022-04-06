import { useTitle } from "../../hooks";
import { heroImage } from "../../assets";
import "./Home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  useTitle("Home 🏠 | Task-ToDo-Ro");
  return (
    <div className="home-wrapper">
      <div className="grid">
        <div className="col-1">
          <img src={heroImage} alt="hero" className="img img-responsive" />
        </div>
        <div className="col-2">
          <h3 className="landing-content">
            <strong>Task-ToDo-Ro</strong> allows you to manage your tasks using
            the Pomodoro Technique so that you can stay productive while
            managing your time efficiently.
          </h3>
          <p className="landing-para">
            The Pomodoro Technique is a time management method that uses a timer
            to break work into intervals, typically 25 minutes in length,
            separated by short breaks.
          </p>
          <Link to="/tasks">
            <button class="button btn-link landing-btn">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
