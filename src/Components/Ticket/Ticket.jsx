import React from 'react';

import logoCompany from '../../Img/S7 Logo.png';

import styles from './Ticket.module.scss';

export default function Ticket() {
  return (
    <div className={styles.Ticket}>
      <header className={styles.header}>
        <span className={styles.price}>13 400 р</span>
        <img src={logoCompany} alt="Logo-Company" />
      </header>
      <main className={styles['main-ticket']}>
        <div className={styles.flight}>
          <span className={styles.flight__terminals}>mow - hkt</span>
          <span className={styles.flight__time}>10:45 - 08:00</span>
        </div>
        <div className={styles.route}>
          <span className={styles.route__title}>в пути</span>
          <span className={styles.route__time}>21ч 15м</span>
        </div>
        <div className={styles.transfers}>
          <span className={styles.transfers__count}>2 пересадки</span>
          <span className={styles.transfers__terminals}>HKG, JNB</span>
        </div>
      </main>
      <main className={styles['main-ticket']}>
        <div className={styles.flight}>
          <span className={styles.flight__terminals}>mow - hkt</span>
          <span className={styles.flight__time}>10:45 - 08:00</span>
        </div>
        <div className={styles.route}>
          <span className={styles.route__title}>в пути</span>
          <span className={styles.route__time}>21ч 15м</span>
        </div>
        <div className={styles.transfers}>
          <span className={styles.transfers__count}>2 пересадки</span>
          <span className={styles.transfers__terminals}>HKG, JNB</span>
        </div>
      </main>
    </div>
  );
}
