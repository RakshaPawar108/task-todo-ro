import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./TaskModal.css";

export const TaskModal = ({ modalOpen, saveToList }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const appendTaskToList = () => {
    const task = {
      id: uuid(),
      name: taskName,
      description: taskDescription,
    };

    saveToList(task);
  };

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
            <input
              id="task-name"
              type="text"
              placeholder=" "
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
            <label htmlFor="task-name">Task Name</label>
          </div>
          <div className="input-container outlined">
            <textarea
              id="task-description"
              placeholder=" "
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            />
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
          <button
            onClick={appendTaskToList}
            className="button btn-secondary btn-add-task"
          >
            Add Task
          </button>
        </footer>
      </div>
    </div>
  );
};
