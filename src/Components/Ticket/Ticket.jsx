import React from 'react';

import TicketSegments from '../TicketSegments/TicketSegments';

import styles from './Ticket.module.scss';

export default function Ticket({ ticket }) {
  return (
    <div className={styles.Ticket}>
      <header className={styles.header}>
        <span className={styles.price}>{`${ticket.price.toLocaleString()}р`}</span>
        <img src={ticket.logoUrl} alt="Company Logo" />
      </header>
      {ticket.segments.map((segments, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <TicketSegments data={segments} key={i} />
      ))}
    </div>
  );
}
