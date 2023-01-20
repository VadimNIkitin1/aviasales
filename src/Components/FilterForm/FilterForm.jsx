import React from 'react';

import styles from './FilterForm.module.scss';

export default function FilterForm() {
  return (
    <div className={styles.FilterForm}>
      <span className={styles.title}>Количество пересадок</span>
      <label className={styles.checkbox}>
        <input type="checkbox" className={styles['input-chek']} />
        <p>Все</p>
      </label>
      <label className={styles.checkbox}>
        <input type="checkbox" className={styles.input} />
        <p>Без пересадок</p>
      </label>
      <label className={styles.checkbox}>
        <input type="checkbox" className={styles.input} />
        <p>1 пересадка</p>
      </label>
      <label className={styles.checkbox}>
        <input type="checkbox" className={styles.input} />
        <p>2 пересадки</p>
      </label>
      <label className={styles.checkbox}>
        <input type="checkbox" className={styles.input} />
        <p>3 пересадки</p>
      </label>
    </div>
  );
}
