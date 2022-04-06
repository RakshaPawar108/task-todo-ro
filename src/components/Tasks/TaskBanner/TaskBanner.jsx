import "./TaskBanner.css";

export const TaskBanner = () => {
  return (
    <div className="task-banner-container">
      <div className="card card-basic">
        <div className="content-container">
          <h1 className="banner-heading">Welcome Back!</h1>
          <p className="banner-content">Please click on the card of the task of your choice to start the pomodoro timer!</p>
        </div>
      </div>
    </div>
  );
};
