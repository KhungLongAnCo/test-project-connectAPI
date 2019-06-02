import React, { Component } from 'react';
import ProductItem from '../../components/productItem/ProductItem';
import ProductList from '../../components/ProductList/ProductList';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import callAPI from './../../utils/apiCaller';


class ProductListPage extends Component {
  constructor(props){
    super(props);
    this.state={
      products:''
    }
  }
  componentDidMount(){
    callAPI('products','GET', null)
    .then(res =>{
      this.setState({
        products:res.data
      })
    })
  }
  render() {
    let products = this.state.products;
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
const mapStateToProps = (state) => {
  return {
    // products: state.products
  }
}

export default connect(mapStateToProps, null)(ProductListPage);
