import React from 'react';

import './styles.css';

export const ListCard = ({ name, image, quantity, price }) => (
  <div className="list-card">
    <div className="avatar">
      <img src={image} alt="Avatar"/>
    </div>
    <span className="list-title">{name}</span>
    <span>{quantity} itens com o total de R${price}</span>
    <button className="btn-list clickable">Quero esta lista!</button>
    <p>Você poderá dar um nome exclusivo e escolher uma foto depois.</p>
  </div>
);
