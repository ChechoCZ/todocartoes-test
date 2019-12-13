import React, { Fragment } from 'react';

import { ProductItem } from '../ProductItem';
import { Filters } from '../../components/Filters';

import './styles.css';

export const ProductList = ({ products, showFilters, filterProducts, deleteProduct }) => (
  <Fragment>
    <div className="product-list-container">

      <button className="btn btn-filter" onClick={filterProducts}>Mostrar Filtros</button>

      {showFilters ? <Filters /> : null}


      <div className="product-list-content">
        { products ? products.map(product => <ProductItem key={product.id} product={product} deleteProduct={() => deleteProduct(product.id)} />) : null}
      </div>

      <button className="btn btn-back">Voltar</button>

    </div>
  </Fragment>
);
