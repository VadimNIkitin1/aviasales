import { createSlice, createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { getTickets } from '../../TicketService';

const initialState = {
  tickets: [],
  currentTickets: 5,
  isLoading: false,
};

export const setLoading = createAction('tickets/setLoading');
export const addTickets = createAction('tickets/addTickets');
export const incrementCurrentTickets = createAction('tickets/incrementCurrentTickets');

export const fetchTickets = createAsyncThunk(
  'tickets/fetchTickets',
  async (searchId, { dispatch }) => {
    try {
      const data = await getTickets(searchId);
      if (data.stop === false) {
        dispatch(addTickets(data.tickets));
        dispatch(fetchTickets(searchId));
      } else {
        dispatch(setLoading(false));
      }
    } catch (err) {
      dispatch(fetchTickets(searchId));
    }
  }
);

export const loadTickets = createAsyncThunk('tickets/loadTickets', (searchId, { dispatch }) => {
  dispatch(setLoading(true));
  dispatch(fetchTickets(searchId));
});

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setLoading, (state, action) => {
      state.isLoading = action.payload;
    });

    builder.addCase(addTickets, (state, action) => {
      state.tickets = [...state.tickets, ...action.payload];
    });

    builder.addCase(incrementCurrentTickets, (state) => {
      state.currentTickets += 5;
    });
  },
});

export const ticketsReducer = ticketsSlice.reducer;
