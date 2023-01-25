import { TransfersFilter } from './transfersFilter';

export const isAllTransfersChecked = (transfers) => {
  return Object.values(TransfersFilter).every(
    (filter) => transfers.includes(filter) || filter === TransfersFilter.All
  );
};
