import React from 'react';

import styles from './ShowMoreBtn.module.scss';

export default function ShowMoreBtn({ onClick }) {
  return (
    <div>
      <button className={styles.ShowMoreBtn} onClick={onClick}>
        Показать еще 5 билетов!
      </button>
    </div>
  );
}
