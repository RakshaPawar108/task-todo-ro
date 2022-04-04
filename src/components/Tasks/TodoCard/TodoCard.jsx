import "./TodoCard.css";

export const TodoCard = ({ id, name, description }) => {
  return (
    <div className="card card-basic todo-card">
      <div className="content-container">
        <h1 className="task-heading">{name}</h1>
        <p className="task-description">{description}</p>
      </div>
      <div className="action-items-container">
        <button class="button btn-secondary btn-float edit-btn">
          <i class="fas fa-pencil-alt"></i>
        </button>
        <button class="button btn-secondary btn-float delete-btn">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
};
