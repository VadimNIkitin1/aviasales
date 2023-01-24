import { configureStore } from '@reduxjs/toolkit';

import { filterReducer } from './Reducers/filterSlice';
import { ticketsReducer } from './Reducers/ticketsSlice';
import { transfersReducer } from './Reducers/transfersSlice';

export const store = configureStore({
  reducer: { filter: filterReducer, transfers: transfersReducer, tickets: ticketsReducer },
});
