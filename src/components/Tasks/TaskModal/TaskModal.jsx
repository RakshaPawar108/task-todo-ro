import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./TaskModal.css";

export const TaskModal = ({
  modalOpen,
  saveToList,
  editingState,
  setEditingState,
  editingTodo,
  setEditingTodo,
  updateTask,
}) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskTime, setTaskTime] = useState(0);

  const appendTaskToList = () => {
    const task = {
      id: uuid(),
      name: taskName,
      description: taskDescription,
      timer: taskTime,
    };

    saveToList(task);
  };

  return (
    <div className="modal-wrapper">
      <div className="modal">
        <header className="modal-header">
          {editingState ? (
            <h2 className="modal-title">Edit Task</h2>
          ) : (
            <h2 className="modal-title">Create Task</h2>
          )}
          <i
            className="fas fa-times close-icon"
            onClick={() => {
              modalOpen(false);
              setEditingState(false);
            }}
          ></i>
        </header>
        <div className="modal-body">
          <div className="input-container outlined">
            {editingState ? (
              <>
                <input
                  id="task-name"
                  type="text"
                  placeholder=" "
                  value={editingTodo.name}
                  onChange={(e) => {
                    setEditingTodo({ ...editingTodo, name: e.target.value });
                  }}
                />
                <label htmlFor="task-name">Task Name</label>
              </>
            ) : (
              <>
                <input
                  id="task-name"
                  type="text"
                  placeholder=" "
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
                />
                <label htmlFor="task-name">Task Name</label>
              </>
            )}
          </div>
          <div className="input-container outlined">
            {editingState ? (
              <>
                <textarea
                  id="task-description"
                  placeholder=" "
                  value={editingTodo.description}
                  onChange={(e) =>
                    setEditingTodo({
                      ...editingTodo,
                      description: e.target.value,
                    })
                  }
                />
                <label htmlFor="task-description">Task Description</label>
              </>
            ) : (
              <>
                <textarea
                  id="task-description"
                  placeholder=" "
                  value={taskDescription}
                  onChange={(e) => setTaskDescription(e.target.value)}
                />
                <label htmlFor="task-description">Task Description</label>
              </>
            )}
          </div>
          <div className="input-container outlined">
            {editingState ? (
              <>
                <input
                  id="task-time"
                  type="number"
                  placeholder=" "
                  value={editingTodo.timer}
                  onChange={(e) => {
                    setEditingTodo({ ...editingTodo, timer: e.target.value });
                  }}
                />
                <label htmlFor="task-time">Task Time (in Minutes)</label>
              </>
            ) : (
              <>
                <input
                  id="task-time"
                  type="number"
                  placeholder=" "
                  value={taskTime}
                  onChange={(e) => setTaskTime(e.target.value)}
                />
                <label htmlFor="task-time">Task Time (in Minutes)</label>
              </>
            )}
          </div>
        </div>
        <footer className="modal-buttons">
          <button
            className="button btn-primary btn-cancel"
            onClick={() => {
              modalOpen(false);
              setEditingState(false);
            }}
          >
            Cancel
          </button>
          {editingState ? (
            <button
              onClick={() => updateTask(editingTodo)}
              className="button btn-secondary btn-add-task"
            >
              Update Task
            </button>
          ) : (
            <button
              onClick={appendTaskToList}
              className="button btn-secondary btn-add-task"
            >
              Add Task
            </button>
          )}
        </footer>
      </div>
    </div>
  );
};
