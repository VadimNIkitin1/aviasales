import React from 'react';

import styles from './ShowMoreBtn.module.scss';

export default function ShowMoreBtn() {
  return (
    <div>
      <button className={styles.ShowMoreBtn}>Показать еще 5 билетов!</button>
    </div>
  );
}
