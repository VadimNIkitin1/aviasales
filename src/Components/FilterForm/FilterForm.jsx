import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TransfersFilter } from '../../Common/transfersFilter';
import { isAllTransfersChecked } from '../../Common/utils';
import { setFilters } from '../../Store/Reducers/transfersSlice';

import styles from './FilterForm.module.scss';

export default function FilterForm() {
  const dispatch = useDispatch();
  const transfers = useSelector((state) => state.transfers.currentFilters);

  const onFilterChange = (e) => {
    const { checked, name } = e.target;
    if (name === TransfersFilter.All) {
      if (isAllTransfersChecked(transfers)) {
        dispatch(setFilters([]));
        return;
      }

      const newTransfers = Object.values(TransfersFilter).filter(
        (elem) => elem !== TransfersFilter.All
      );
      dispatch(setFilters(newTransfers));
      return;
    }

    if (!checked) {
      const newTransfers = transfers.filter((elem) => elem !== name);
      dispatch(setFilters(newTransfers));
      return;
    }

    const newTransfers = [...transfers, name];
    dispatch(setFilters(newTransfers));
  };

  return (
    <div className={styles.FilterForm}>
      <span className={styles.title}>Количество пересадок</span>
      <label className={styles.checkbox}>
        <input
          type="checkbox"
          name={TransfersFilter.All}
          onChange={onFilterChange}
          checked={isAllTransfersChecked(transfers)}
        />
        <span className={styles.checkboxDisplay} />
        <p>Все</p>
      </label>
      <label className={styles.checkbox}>
        <input
          type="checkbox"
          name={TransfersFilter.Without}
          checked={transfers.includes(TransfersFilter.Without)}
          onChange={onFilterChange}
        />
        <span className={styles.checkboxDisplay} />
        <p>Без пересадок</p>
      </label>
      <label className={styles.checkbox}>
        <input
          type="checkbox"
          name={TransfersFilter.One}
          checked={transfers.includes(TransfersFilter.One)}
          onChange={onFilterChange}
        />
        <span className={styles.checkboxDisplay} />
        <p>1 пересадка</p>
      </label>
      <label className={styles.checkbox}>
        <input
          type="checkbox"
          name={TransfersFilter.Two}
          checked={transfers.includes(TransfersFilter.Two)}
          onChange={onFilterChange}
        />
        <span className={styles.checkboxDisplay} />
        <p>2 пересадки</p>
      </label>
      <label className={styles.checkbox}>
        <input
          type="checkbox"
          name={TransfersFilter.Three}
          checked={transfers.includes(TransfersFilter.Three)}
          onChange={onFilterChange}
        />
        <span className={styles.checkboxDisplay} />
        <p>3 пересадки</p>
      </label>
    </div>
  );
}
