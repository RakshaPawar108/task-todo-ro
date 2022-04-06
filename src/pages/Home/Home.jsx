import { useTitle } from "../../hooks";
import "./Home.css";

export const Home = () => {
  useTitle("Home 🏠 | Task-ToDo-Ro");
  return (
    <div className="home-wrapper">
      <h1>This is the Home Page</h1>
    </div>
  );
};
