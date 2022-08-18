import { useContext } from "react";
import { TaskCard } from "./TaskCard";
import { TaskContext } from "../context/TaskContext";

export const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return (
      <div className="bg-indigo-300 p-10 rounded-md">
        <h1 className="text-white text-4xl font-bold text-center">
          There is no tasks
        </h1>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};
