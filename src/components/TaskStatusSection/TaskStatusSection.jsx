import React from "react";
import "./TaskStatusSection.css"

const TaskStatusSection = () => {
  return (
    <div className="task-status-section">
      <div className="mb-[40px]">
        <h4 className="ticket-section-title">Task Status</h4>
        <div>
            <p>Select a ticket to add to Task Status</p>
        </div>
      </div>
      <div>
        <h4 className="ticket-section-title">Resolved Task</h4>
        <div>
            <p>No resolved tasks yet.</p>
        </div>
      </div>
    </div>
  );
};

export default TaskStatusSection;
