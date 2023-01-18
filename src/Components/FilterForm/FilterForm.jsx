import React from 'react';
import './FilterForm.css';

export default function FilterForm() {
  return (
    <div className="FilterForm">
      <span className="title">Количество пересадок</span>
      <label className="checkbox">
        <input type="checkbox" className="input-chek" />
        <p>Все</p>
      </label>
      <label className="checkbox">
        <input type="checkbox" className="input" />
        <p>Без пересадок</p>
      </label>
      <label className="checkbox">
        <input type="checkbox" className="input" />
        <p>1 пересадка</p>
      </label>
      <label className="checkbox">
        <input type="checkbox" className="input" />
        <p>2 пересадки</p>
      </label>
      <label className="checkbox">
        <input type="checkbox" className="input" />
        <p>3 пересадки</p>
      </label>
    </div>
  );
}
