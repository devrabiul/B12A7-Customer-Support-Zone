import React from "react";
import { FaCalendarDays } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa6";
import "./CustomerTicketCard.css";

const CustomerTicketCard = ({ ticket, onSelect }) => {
  console.log(ticket);

  return (
    <div className="ticket-card bg-white" onClick={() => onSelect(ticket)}>
      <div className="ticket-card-head">
        <h5 className="">{ticket?.title}</h5>
        <button
          className={
            (ticket?.status == "Open"
              ? "status-green"
              : ticket?.status == "In- Progress"
              ? "status-warning"
              : "status-danger") + ' ticket-card-button'
          }
        >
            <span><FaCircle /></span>
          {ticket?.status}
        </button>
      </div>
      <p>{ticket?.description}</p>
      <div className="ticket-footer">
        <div className="flex justify-between items-center gap-2">
          <div>#{ticket?.id}</div>
          <div className={`priority-${ticket?.priority == 'HIGH PRIORITY' ? 'red' : (ticket?.priority == 'MEDIUM PRIORITY' ? 'warning' : 'green')}`}>
            {ticket?.priority}
            </div>
        </div>
        <div className="flex justify-between items-center gap-2">
          <div>{ticket?.customer}</div>
    
        <div className="flex items-center gap-1">
        <FaCalendarDays />
        <span>{ticket?.createdAt}</span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTicketCard;
