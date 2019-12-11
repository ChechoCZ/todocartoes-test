import React, { Component } from 'react';

import './styles.css';

export default class ProductItem extends Component {
  render() {
    return (
      <div className="product-detail-container">
        <img src="https://images-na.ssl-images-amazon.com/images/I/71W%2B3bONurL._SX466_.jpg" alt="avatar"/>
        <span className="product-name">Produto de Teste</span>
        <span>1 unidade</span>
        <span>R$ 3450,00</span>
      </div>
    );
  }
}
