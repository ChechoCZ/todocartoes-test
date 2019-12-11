import React from 'react';

import './styles.css';

export const ListCard = () => (
  <div className="list-card">
    <div className="avatar">
      <img src="https://avatarfiles.alphacoders.com/865/86518.png" alt="Avatar"/>
    </div>
    <span className="list-title">Titulo da Lista</span>
    <span>57 itens com o total de R$6000,00</span>
    <button className="btn-list clickable">Quero esta lista!</button>
    <p>Você poderá dar um nome exclusivo e escolher uma foto depois.</p>
  </div>
);