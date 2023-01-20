import { useState, useEffect } from 'react';

import styles from './App.module.scss';
import './Reset.scss';
import ShowMoreBtn from './Components/ShowMoreBtn/ShowMoreBtn';
import SortTabs from './Components/SortTabs/SortTabs';
import TicketList from './Components/TicketList/TicketList';
import logo from './Img/Logo.png';
import FilterForm from './Components/FilterForm/FilterForm';
import { getAllTickets, getSearchId } from './TicketService';

function App() {
  const [state, setState] = useState({
    tickets: [],
  });

  useEffect(() => {
    async function fetchTickets() {
      const identifier = await getSearchId();
      const tickets = await getAllTickets(identifier);
      setState({ tickets });
    }
    fetchTickets();
  }, []);

  console.log(state);
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </header>
      <div className={styles.container}>
        <FilterForm />
        <main className={styles.main}>
          <SortTabs />
          <TicketList />
          <ShowMoreBtn />
        </main>
      </div>
    </div>
  );
}

export default App;
