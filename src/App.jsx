import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';

import styles from './App.module.scss';
import './Reset.scss';
import ShowMoreBtn from './Components/ShowMoreBtn/ShowMoreBtn';
import SortTabs from './Components/SortTabs/SortTabs';
import TicketList from './Components/TicketList/TicketList';
import logo from './Img/Logo.png';
import FilterForm from './Components/FilterForm/FilterForm';
import { getSearchId } from './TicketService';
import { incrementCurrentTickets, loadTickets } from './Store/Reducers/ticketsSlice';
import { Filter } from './Common/filter';
import { isAllTransfersChecked } from './Common/utils';
import { TransfersFilter } from './Common/transfersFilter';

const filterTickets = (tickets, currentFilter, transfers) => {
  const newTickets = tickets.filter((ticket) => {
    if (isAllTransfersChecked(transfers) || transfers.length === 0) return true;

    let isValid = false;
    const stopsA = ticket.segments[0].stops;
    const stopsB = ticket.segments[1].stops;

    if (transfers.includes(TransfersFilter.Without)) {
      isValid = stopsA.length === 0 || stopsB.length === 0;
    }

    if (transfers.includes(TransfersFilter.One)) {
      isValid = stopsA.length === 1 || stopsB.length === 1;
    }

    if (transfers.includes(TransfersFilter.Two)) {
      isValid = stopsA.length === 2 || stopsB.length === 2;
    }

    if (transfers.includes(TransfersFilter.Three)) {
      isValid = stopsA.length === 3 || stopsB.length === 3;
    }

    return isValid;
  });

  if (currentFilter === Filter.Cheap) {
    newTickets.sort((a, b) => a.price - b.price);
  }

  if (currentFilter === Filter.Fast) {
    newTickets.sort((a, b) => a.segments[0].duration - b.segments[0].duration);
  }

  if (currentFilter === Filter.Optimal) {
    newTickets.sort((a, b) => {
      return a.price - b.price + (a.segments[0].duration - b.segments[0].duration);
    });
  }

  return newTickets;
};

function App() {
  const dispatch = useDispatch();
  const { tickets, currentTickets, isLoading } = useSelector((state) => state.tickets);
  const { currentFilter } = useSelector((state) => state.filter);
  const { currentFilters: transfers } = useSelector((state) => state.transfers);

  const filteredTickets = useMemo(
    () => filterTickets(tickets, currentFilter, transfers),
    [tickets, currentFilter, transfers]
  );

  useEffect(() => {
    async function fetchTickets() {
      const id = await getSearchId();
      dispatch(loadTickets(id));
    }
    fetchTickets();
  }, []);

  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </header>
      <div className={styles.container}>
        <FilterForm />
        <main className={styles.main}>
          <SortTabs />
          {isLoading && <span className={styles.loader} />}
          <TicketList tickets={filteredTickets.slice(0, currentTickets)} />
          <ShowMoreBtn
            onClick={() => {
              dispatch(incrementCurrentTickets());
            }}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
