import React, { Component } from 'react';
import ProductItem from '../../components/productItem/ProductItem';
import ProductList from '../../components/ProductList/ProductList';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { FetchAllProducts, DeleteProductRequest } from '../../actions/index';

class ProductListPage extends Component {
  componentDidMount() {
    this.props.FetchAllProducts();
  }
  findIndex = (id, products) => {
    let result = null;
    products.forEach((product, index) => {
      if (product.id === id) {
        result = index;
      }
    });
    return result;
  }
  deleteProduct = (id) => {
    this.props.DeleteProduct(id);
  }
  render() {
    let products = this.props.products;
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
          deleteProduct={this.deleteProduct}
          key={index}
          index={index}
          product={product} />
      })
    }
    return result;
  }

}
const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    FetchAllProducts: () => {
      dispatch(FetchAllProducts(dispatch));
    },
    DeleteProduct: (id) => {
      dispatch(DeleteProductRequest(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
