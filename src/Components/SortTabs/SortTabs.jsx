import React from 'react';
import './SortTabs.css';

export default function SortTabs() {
  return (
    <div className="SortTabs">
      <button className="most-chip">Самый дешевый</button>
      <button className="most-fast">Самый быстрый</button>
      <button className="optimum">Оптимальный</button>
    </div>
  );
}
