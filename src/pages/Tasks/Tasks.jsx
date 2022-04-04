import { useState } from "react";
import { TaskBanner, TaskModal } from "../../components";
import "./Tasks.css";
export const Tasks = () => {
  const [openTaskModal, setOpenTaskModal] = useState(false);
  return (
    <div className="tasks-wrapper">
      <TaskBanner />
      <button
        onClick={() => setOpenTaskModal(true)}
        className="button btn-primary create-task"
      >
        <i className="fas fa-plus"></i> Create Task
      </button>
      {openTaskModal && <TaskModal modalOpen={setOpenTaskModal} />}
    </div>
  );
};
