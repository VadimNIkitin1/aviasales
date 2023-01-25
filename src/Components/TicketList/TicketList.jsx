import React from 'react';

import Ticket from '../Ticket/Ticket';

import styles from './TicketList.module.scss';

export default function TicketList({ tickets }) {
  return (
    <div className={styles.TicketList}>
      {tickets.map((ticket) => (
        <Ticket ticket={ticket} key={ticket.id} />
      ))}
    </div>
  );
}
