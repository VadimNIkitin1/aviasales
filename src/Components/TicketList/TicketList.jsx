import React from 'react';

import Ticket from '../Ticket/Ticket';
import './TicketList.css';

export default function TicketList() {
  return (
    <div className="TicketList">
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
    </div>
  );
}
