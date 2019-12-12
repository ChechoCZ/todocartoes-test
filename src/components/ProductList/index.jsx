import React, { Component, Fragment } from 'react';

import ProductItem from '../ProductItem';

import './styles.css';

export default class ProductList extends Component {
  render() {
    return (
      <Fragment>
        <div className="product-list-container">
          
          <div className="product-list-content">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>

          <button className="btn-back">Voltar</button>

        </div>
      </Fragment>
    );
  }
}
