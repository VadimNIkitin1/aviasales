import React from 'react';

import TicketSegments from '../TicketSegments/TicketSegments';

import styles from './Ticket.module.scss';

export default function Ticket({ ticket }) {
  return (
    <div className={styles.Ticket}>
      <header className={styles.header}>
        <span className={styles.price}>{`${ticket.price} р`}</span>
        <img src={`//pics.avs.io/99/36/${ticket.carrier}.png`} alt="Company Logo" />
      </header>
      {ticket.segments.map((segments) => (
        <TicketSegments data={segments} />
      ))}
    </div>
  );
}
