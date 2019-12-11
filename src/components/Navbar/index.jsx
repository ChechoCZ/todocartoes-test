import React, { Fragment } from 'react';

import './styles.css';

export const Navbar = () => (
  <Fragment>
    <div className="navigation">
      <span className="clickable">Voltar para Categorias</span>
      <span className="clickable">Logotipo do Cliente</span>
      <span className="clickable">Login | Cadastro</span>
    </div>
    <div className="stages">
      <div className="stage">
        <span>Etapa 1</span>
        <p>Descrição da etapa 1</p>
      </div>
      <div className="stage active">
        <span>Etapa 2</span>
        <p>Descrição da etapa 2</p>
      </div>
      <div className="stage">
        <span>Etapa 3</span>
        <p>Descrição da etapa 3</p>
      </div>
      <div className="stage">
        <span>Etapa 4</span>
        <p>Descrição da etapa 4</p>
      </div>
    </div>
  </Fragment>
);