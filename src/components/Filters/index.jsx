import React, { Component } from 'react';

import search from '../../assets/search.png';

import './styles.css';

export default class Filters extends Component {
  filterProducts = (e) => {
    const { filterProducts } = this.props;
    const word = e.target.value;

    filterProducts(word);
  }

  render() {
    return (
      <div className="filters-container">
        <div className="search">
          <img src={search} alt="Search"/>
          <input 
            type="text" 
            placeholder="Filtrar por nome do produto..."
            onChange={this.filterProducts.bind(this)} />
        </div>
        <div className="filter">
          <input type="radio" name="price_filter" />Menos de R25
          <input type="radio" name="price_filter" />Entre R$25 e R$50 
          <input type="radio" name="price_filter" />Mais de R$50
        </div>
      </div>
    );
  }
}