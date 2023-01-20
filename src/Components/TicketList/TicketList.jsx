import React from 'react';

import Ticket from '../Ticket/Ticket';

import styles from './TicketList.module.scss';

export default function TicketList() {
  return (
    <div className={styles.TicketList}>
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
    </div>
  );
}
