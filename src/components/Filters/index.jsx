import React from 'react';

import search from '../../assets/search.png';

export const Filters = () => (
  <div className="filters-container">
    <div className="search">
      <div className="search-form">
        <img src={search} alt="Search"/>
        <input type="text" placeholder="Procurar usuário..." />
      </div>
    </div>
  </div>
);