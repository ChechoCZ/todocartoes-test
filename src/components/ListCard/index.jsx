import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Creators as ProductsActions } from '../../store/ducks/products';

import './styles.css';

class ListCard extends Component {
  componentDidMount() {
    const { loadProductsRequest } = this.props;

    loadProductsRequest();
  }

  render() {
    return (
      <div className="list-card">
        <div className="avatar">
          <img src="https://avatarfiles.alphacoders.com/865/86518.png" alt="Avatar"/>
        </div>
        <span className="list-title">Titulo da Lista</span>
        <span>57 itens com o total de R$6000,00</span>
        <button className="btn-list clickable">Quero esta lista!</button>
        <p>Você poderá dar um nome exclusivo e escolher uma foto depois.</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products.data
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ProductsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListCard);