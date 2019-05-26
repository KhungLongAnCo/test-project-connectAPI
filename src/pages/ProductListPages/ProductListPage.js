import React, { Component } from 'react';
import ProductItem from '../../components/productItem/ProductItem';
import ProductList from '../../components/ProductList/ProductList';
import { NavLink } from 'react-router-dom';

class ProductListPage extends Component {
  render() {
    let products = [
      {
        id: 1,
        name: 'iphone',
        price: 100,
        status: false
      }
    ];
    return (
      <div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <button type="button" className="btn btn-success">
              <NavLink to="/products/add">
                + Thêm công viêc
              </NavLink>
            </button>
          </div>
        </div>
        <ProductList>
          {this.showProductList(products)}
        </ProductList>

      </div>
    );
  }
  showProductList = (products) => {
    let result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <ProductItem
          key={index}
          index={index}
          product={product} />
      })
    }
    return result;
  }

}

export default ProductListPage;
