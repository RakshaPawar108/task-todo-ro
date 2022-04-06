import { useEffect, useState } from "react";
import { TaskBanner, TaskModal, TodoCard } from "../../components";
import { useTitle } from "../../hooks";
import "./Tasks.css";
export const Tasks = () => {
  const [openTaskModal, setOpenTaskModal] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingTodo, setEditingTodo] = useState({});

  const saveToList = (task) => {
    setTodoList([...todoList, task]);
    localStorage.setItem("todoList", JSON.stringify([...todoList, task]));
    setOpenTaskModal(false);
  };

  const getListFromLocalStorage = () => {
    const list = JSON.parse(localStorage.getItem("todoList"));
    return list;
  };

  const deleteTodo = (taskId) => {
    const list = todoList.filter((todo) => todo.id !== taskId);
    localStorage.setItem("todoList", JSON.stringify(list));
    setTodoList(list);
  };

  const editTodo = (id) => {
    setIsEditing(true);
    setOpenTaskModal(true);
    const currentTodo = todoList.find((todo) => todo.id === id);
    setEditingTodo(currentTodo);
  };

  const updateTask = ({ id, name, description, timer, breakTimer }) => {
    const newTodo = todoList.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            name: name,
            description: description,
            timer: timer,
            breakTimer: breakTimer,
          }
        : todo
    );
    setTodoList(newTodo);
    localStorage.setItem("todoList", JSON.stringify(newTodo));
    setIsEditing(false);
    setOpenTaskModal(false);
  };

  useEffect(() => {
    const savedTaskList = getListFromLocalStorage();
    if (savedTaskList) {
      setTodoList(savedTaskList);
    }
  }, []);

  useTitle("Tasks 📝 | Task-ToDo-Ro");

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
        <TaskModal
          modalOpen={setOpenTaskModal}
          saveToList={saveToList}
          editingState={isEditing}
          setEditingState={setIsEditing}
          editingTodo={editingTodo}
          setEditingTodo={setEditingTodo}
          updateTask={updateTask}
        />
      )}

      <div className="todos-wrapper">
        <>
          {todoList &&
            todoList.map((todo, index) => (
              <TodoCard
                key={todo.id}
                {...todo}
                deleteTodo={deleteTodo}
                index={index}
                editTodo={editTodo}
              />
            ))}
        </>
      </div>
    </div>
  );
};
