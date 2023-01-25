import React from 'react';

import styles from './TicketSegments.module.scss';

export default function TicketSegments({ data }) {
  const getPadTime = (time) => time.toString().padStart(2, '0');
  const flyTimeHours = Math.floor(data.duration / 60);
  const flyTimeMin = getPadTime(data.duration - flyTimeHours * 60);
  const flyTime = `${flyTimeHours}ч ${flyTimeMin}м`;
  const timeDepart = `${getPadTime(new Date(data.date).getHours())}:${getPadTime(
    new Date(data.date).getMinutes()
  )}`;

  const timeArrival = `${getPadTime(
    new Date(
      new Date(data.date).setHours(new Date(data.date).getHours() + Math.floor(data.duration / 60))
    ).getHours()
  )}:${getPadTime(
    new Date(
      new Date(data.date).setMinutes(new Date(data.date).getMinutes() + data.duration)
    ).getMinutes()
  )}`;
  let trannsferWord = '';
  if (data.stops.length === 0) {
    trannsferWord = 'Пересадок';
  } else if (data.stops.length === 1) {
    trannsferWord = 'Пересадка';
  } else {
    trannsferWord = 'Пересадки';
  }

  const transferCity = data.stops.join();
  return (
    <main className={styles['main-ticket']}>
      <div className={styles.flight}>
        <span className={styles.flight__terminals}>{`${data.origin} - ${data.destination}`}</span>
        <span className={styles.flight__time}>{`${timeDepart} - ${timeArrival}`}</span>
      </div>
      <div className={styles.route}>
        <span className={styles.route__title}>в пути</span>
        <span className={styles.route__time}>{flyTime}</span>
      </div>
      <div className={styles.transfers}>
        <span className={styles.transfers__count}>{`${data.stops.length} ${trannsferWord}`}</span>
        <span className={styles.transfers__terminals}>{transferCity}</span>
      </div>
    </main>
  );
}
