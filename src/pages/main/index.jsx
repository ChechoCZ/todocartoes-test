import React, { Component } from 'react';

import { Header } from '../../components/Header';
import { Navbar } from '../../components/Navbar';
import ListCard from '../../components/ListCard';
import ProductList from '../../components/ProductList';

import './styles.css';

export default class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <Header />
        <Navbar />
        <ListCard />
        <ProductList />
      </div>
    );
  }
}