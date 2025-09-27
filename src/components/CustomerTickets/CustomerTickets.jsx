import React from "react";
import CustomerTicketCard from "./CustomerTicketCard";

const CustomerTickets = ({ ticketsJson, onSelect }) => {
  return (
    <div>
      <h4 className="ticket-section-title">Customer Tickets</h4>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {ticketsJson.map(ticket => (
            <CustomerTicketCard key={ticket.id} ticket={ticket} onSelect={onSelect} />
        ))}
        </div>

    </div>
  );
};


export default CustomerTickets;
