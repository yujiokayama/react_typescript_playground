import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";
import { RootState } from "../../rootReducer";

const TaskList: React.FC = () => {
  const { tasks } = useSelector((state: RootState) => state.tasks);
  return (
    <>
      <div className="inner">
        {tasks.length <= 0 ? (
          "登録されたTODOはありません。"
        ) : (
          <ul className="task-list">
            {tasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default TaskList;
