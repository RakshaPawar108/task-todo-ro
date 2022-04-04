import { useEffect, useState } from "react";
import { TaskBanner, TaskModal } from "../../components";
import "./Tasks.css";
export const Tasks = () => {
  const [openTaskModal, setOpenTaskModal] = useState(false);
  const [todoList, setTodoList] = useState([]);

  const saveToList = (task) => {
    let list = todoList;
    list.push(task);
    saveToLocalStorage(list);
    setTodoList(list);
    setOpenTaskModal(false);
  };

  const saveToLocalStorage = (taskList) => {
    localStorage.setItem("todoList", JSON.stringify(taskList));
  };

  const getListFromLocalStorage = () => {
    const list = JSON.parse(localStorage.getItem("todoList"));
    return list;
  };

  useEffect(() => {
    const savedTaskList = getListFromLocalStorage();
    if (savedTaskList) {
      setTodoList(savedTaskList);
    }
  }, []);

  return (
    <div className="tasks-wrapper">
      <TaskBanner />
      <button
        onClick={() => setOpenTaskModal(true)}
        className="button btn-primary create-task"
      >
        <i className="fas fa-plus"></i> Create Task
      </button>
      {openTaskModal && (
        <TaskModal modalOpen={setOpenTaskModal} saveToList={saveToList} />
      )}

      {todoList &&
        todoList.map(({ id, name, description }) => (
          <div key={id}>
            Task Name: {name}
            Task Description: {description}
          </div>
        ))}
    </div>
  );
};
