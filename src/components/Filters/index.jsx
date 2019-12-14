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
          <div><input type="radio" name="price_filter" value="1" />Menos de R50</div>
          <div><input type="radio" name="price_filter" value="2" />Entre R$25 e R$50</div>
          <div><input type="radio" name="price_filter" value="3" />Mais de R$50</div>
        </div>
      </div>
    );
  }
}