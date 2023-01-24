import React from 'react';

import Ticket from '../Ticket/Ticket';

import styles from './TicketList.module.scss';

export default function TicketList({ tickets }) {
  console.log(tickets);
  return (
    <div className={styles.TicketList}>
      <Ticket />
    </div>
  );
}
