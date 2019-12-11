import React, { Component } from 'react';

import ProductItem from '../ProductItem';

import './styles.css';

export default class ProductList extends Component {
  render() {
    return (
      <div className="product-list-container">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    );
  }
}
