import React from "react";
import "./TaskStatusSection.css";

const TaskStatusSection = ({ tasks, resolvedTasks, onComplete }) => {
  return (
    <div className="task-status-section">
      <div className="mb-[40px]">
        <h4 className="ticket-section-title">Task Status</h4>
        <div>
          {tasks.length === 0 && (
            <p className="text-gray-500">No tasks selected yet.</p>
          )}
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex justify-between items-center mb-2 pb-2"
            >
              <span className="text-black">{task.title}</span>
              <button
                className="px-2 py-1 bg-green-500 text-white rounded-2xl cursor-pointer text-[14px]"
                onClick={() => onComplete(task)}
              >
                Complete
              </button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h4 className="ticket-section-title">Resolved Task</h4>
        <div>
          {resolvedTasks && resolvedTasks.length === 0 && <p className="text-gray-500">No resolved tasks yet.</p>}
          {resolvedTasks && resolvedTasks.map((task) => (
            <div key={task.id} className="flex justify-between items-center mb-2 pb-2">
              <span className="text-gray-700 line-through">{task.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskStatusSection;
