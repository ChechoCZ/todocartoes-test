import React from 'react';

import './styles.css';

export const ProductItem = ({ product, deleteProduct }) => (
  <div className="flip-card">
    <div className="flip-card-inner">
      <div className="flip-card-front">
        <div className="product-detail-container">
          <img src={product.image} alt="avatar"/>
          <div className="product-detail-info">
            <span className="product-name">{product.name}</span>
            <span>1 unidade</span>
            <span>R$ {product.price}</span>
          </div>
        </div>
      </div>
      <div className="flip-card-back">
        <div className="product-detail-container-back">
          <button className="btn-delete" onClick={deleteProduct}>Apagar</button>
        </div>
      </div>
    </div>
  </div>
);