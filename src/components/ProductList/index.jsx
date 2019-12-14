import React, { Fragment } from 'react';

import Filters from '../Filters';
import { ProductItem } from '../ProductItem';

import './styles.css';

export const ProductList = ({ products, showFilters, filterProducts, filterProductsRequest, deleteProduct }) => (
  <Fragment>
    <div className="product-list-container">

      <button className="btn btn-filter" onClick={filterProducts}>Mostrar Filtros</button>

      {showFilters ? <Filters filterProducts={filterProductsRequest} /> : null}

      <div className="product-list-content">
        { products ? products.map(product => <ProductItem key={product.id} product={product} deleteProduct={() => deleteProduct(product.id)} />) : null}
      </div>

      <button className="btn btn-back">Voltar</button>

    </div>
  </Fragment>
);
