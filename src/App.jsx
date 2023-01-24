import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import styles from './App.module.scss';
import './Reset.scss';
import ShowMoreBtn from './Components/ShowMoreBtn/ShowMoreBtn';
import SortTabs from './Components/SortTabs/SortTabs';
import TicketList from './Components/TicketList/TicketList';
import logo from './Img/Logo.png';
import FilterForm from './Components/FilterForm/FilterForm';
import { getSearchId } from './TicketService';
import { incrementCurrentTickets, loadTickets } from './Store/Reducers/ticketsSlice';

function App() {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.tickets.tickets);
  const currentTickets = useSelector((state) => state.tickets.currentTickets);

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
          <TicketList tickets={tickets.slice(0, currentTickets)} />
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
