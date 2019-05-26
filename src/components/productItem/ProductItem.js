import React, { Component } from 'react';

class ProductItem extends Component {
  render() {
    let {product,index} = this.props;
    let statusClass = product.status ? 'success' : 'warning';
    let status = product.status ? 'Available' : 'emty-product'
    return (
      <tr>
        <td>{index}</td>
        <td>{product.name}</td>
        <td>{product.price} $</td>
        <td>
        <button type="button" className= {`btn btn-${statusClass}`}>{status}</button>
        </td>
        <td>
          <button type="button" className="btn btn-primary mr-10">Modify</button>
          <button type="button" className="btn btn-danger mr-10">Remove</button>
        </td>
      </tr>
    );
  }

}

export default ProductItem;
