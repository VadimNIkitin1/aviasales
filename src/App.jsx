import './App.css';
import './Reset.css';
import ShowMoreBtn from './Components/ShowMoreBtn/ShowMoreBtn';
import SortTabs from './Components/SortTabs/SortTabs';
import TicketList from './Components/TicketList/TicketList';
import logo from './Img/Logo.png';
import FilterForm from './Components/FilterForm/FilterForm';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} alt="" className="logo" />
      </header>
      <div className="container">
        <FilterForm />
        <main className="main">
          <SortTabs />
          <TicketList />
          <ShowMoreBtn />
        </main>
      </div>
    </div>
  );
}

export default App;
