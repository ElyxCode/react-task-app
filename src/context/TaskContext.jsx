import { createContext, useState } from "react";

export const TaskContext = createContext({});

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const createTask = (titleTask, descriptionTask) => {
    const newTask = {
      id: tasks.length,
      title: titleTask,
      description: descriptionTask,
    };

    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <TaskContext.Provider value={{ setTasks, tasks, createTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
