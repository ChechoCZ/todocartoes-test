import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Header } from '../../components/Header';
import { Navbar } from '../../components/Navbar';
import { ListCard } from '../../components/ListCard';
import { ProductList } from '../../components/ProductList';

import { Creators as ProductsActions } from '../../store/ducks/products';

import './styles.css';

class Main extends Component {
  componentDidMount() {
    const { loadProductsRequest } = this.props;

    loadProductsRequest();
  }

  render() {
    const { filterProducts, filterProductsRequest, deleteProductRequest } = this.props;
    const { list_of_products, showFilters } = this.props;
    const { name, image, products } = list_of_products;

    let quantity;
    let price = 0;    

    if (products) {
      quantity = products.length;

      const products_price = [];

      products.map(product => products_price.push(product.price));

      price = products_price.reduce((total, price) => total + price).toFixed(2);
    }

    return (
      <div className="main-container">
        <Header />
        <Navbar />
        <ListCard 
          name={name} 
          image={image} 
          quantity={quantity} 
          price={price} />
        <ProductList 
          products={products} 
          showFilters={showFilters}
          filterProducts={() => filterProducts()} 
          deleteProduct={(id) => deleteProductRequest(id)}
          filterProductsRequest={(filter) => filterProductsRequest(filter)} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list_of_products: state.products.data,
  showFilters: state.products.showFilters
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ProductsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);