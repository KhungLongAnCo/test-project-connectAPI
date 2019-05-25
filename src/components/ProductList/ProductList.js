import React, { Component } from 'react';
import ProductItem from '../productItem/ProductItem';

class ProductList extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </tbody>
      </table>
    );
  }

}

export default ProductList;
