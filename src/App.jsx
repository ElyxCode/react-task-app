import { useEffect, useContext } from "react";
import { tasks as data } from "./db/tasks";

import { TaskList } from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";
import { TaskContext } from "./context/TaskContext";

const App = () => {
  const { setTasks } = useContext(TaskContext);
  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <div className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
};

export default App;
