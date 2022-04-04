import "./TaskModal.css";
export const TaskModal = ({ modalOpen }) => {
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <header className="modal-header">
          <h2 className="modal-title">Create Task</h2>
          <i
            className="fas fa-times close-icon"
            onClick={() => modalOpen(false)}
          ></i>
        </header>
        <div className="modal-body">
          <div className="input-container outlined">
            <input id="task-name" type="text" placeholder=" " />
            <label htmlFor="task-name">Task Name</label>
          </div>
          <div className="input-container outlined">
            <textarea id="task-description" placeholder=" " />
            <label htmlFor="task-description">Task Description</label>
          </div>
        </div>
        <footer className="modal-buttons">
          <button
            className="button btn-primary btn-cancel"
            onClick={() => modalOpen(false)}
          >
            Cancel
          </button>
          <button className="button btn-secondary btn-add-task">
            Add Task
          </button>
        </footer>
      </div>
    </div>
  );
};
