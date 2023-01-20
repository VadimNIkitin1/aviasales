import React from 'react';

import styles from './SortTabs.module.scss';

export default function SortTabs() {
  return (
    <div className={styles.SortTabs}>
      <button className={styles['most-chip']}>Самый дешевый</button>
      <button className={styles['most-fast']}>Самый быстрый</button>
      <button className={styles.optimum}>Оптимальный</button>
    </div>
  );
}
