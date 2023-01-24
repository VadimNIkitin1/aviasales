import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';

import { Filter } from '../../Common/filter';
import { setFilter } from '../../Store/Reducers/filterSlice';

import styles from './SortTabs.module.scss';

export default function SortTabs() {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filter.currentFilter);

  return (
    <div className={styles.SortTabs}>
      <button
        className={classnames(styles.cheap, {
          [styles.cheap__active]: currentFilter === Filter.Cheap,
        })}
        onClick={() => dispatch(setFilter(Filter.Cheap))}
      >
        Самый дешевый
      </button>
      <button
        className={classnames(styles.fast, {
          [styles.fast__active]: currentFilter === Filter.Fast,
        })}
        onClick={() => dispatch(setFilter(Filter.Fast))}
      >
        Самый быстрый
      </button>
      <button
        className={classnames(styles.optimal, {
          [styles.optimal__active]: currentFilter === Filter.Optimal,
        })}
        onClick={() => dispatch(setFilter(Filter.Optimal))}
      >
        Оптимальный
      </button>
    </div>
  );
}
