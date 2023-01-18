import React from 'react';

import './Ticket.css';
import logoCompany from '../../Img/S7 Logo.png';

export default function Ticket() {
  return (
    <div className="Ticket">
      <header className="header">
        <span className="price">13 400 р</span>
        <img src={logoCompany} alt="Logo-Company" />
      </header>
      <main className="main-ticket">
        <div className="flight">
          <span className="flight__terminals">mow - hkt</span>
          <span className="flight__time">10:45 - 08:00</span>
        </div>
        <div className="route">
          <span className="route__title">в пути</span>
          <span className="route__time">21ч 15м</span>
        </div>
        <div className="transfers">
          <span className="transfers__count">2 пересадки</span>
          <span className="transfers__terminals">HKG, JNB</span>
        </div>
      </main>
      <main className="main-ticket">
        <div className="flight">
          <span className="flight__terminals">mow - hkt</span>
          <span className="flight__time">10:45 - 08:00</span>
        </div>
        <div className="route">
          <span className="route__title">в пути</span>
          <span className="route__time">21ч 15м</span>
        </div>
        <div className="transfers">
          <span className="transfers__count">2 пересадки</span>
          <span className="transfers__terminals">HKG, JNB</span>
        </div>
      </main>
    </div>
  );
}
