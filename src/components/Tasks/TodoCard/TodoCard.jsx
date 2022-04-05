import { Link } from "react-router-dom";
import "./TodoCard.css";

export const TodoCard = ({
  id,
  name,
  description,
  timer,
  deleteTodo,
  index,
  editTodo,
}) => {
  return (
    <Link
      to="/pomodoro"
      state={{ id: id, name: name, description: description, timer: timer }}
    >
      <div className="card card-basic todo-card">
        <div className="content-container">
          <h1 className="task-heading">{name}</h1>
          <p className="task-description">{description}</p>
        </div>
        <div className="action-items-container">
          <button
            onClick={() => editTodo(id)}
            className="button btn-secondary btn-float edit-btn"
          >
            <i className="fas fa-pencil-alt"></i>
          </button>
          <button
            onClick={() => deleteTodo(id)}
            className="button btn-secondary btn-float delete-btn"
          >
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </Link>
  );
};
