import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {

  deleteProduct = (id) => {  
    if (confirm('Do you want delete this ?')) {//eslint-disable-line
      this.props.deleteProduct(id);
    }

  }
  render() {
    let { product, index } = this.props;
    let statusClass = product.status ? 'success' : 'warning';
    let status = product.status ? 'Available' : 'emty-product'
    return (
      <tr>
        <td>{index}</td>
        <td>{product.name}</td>
        <td>{product.price} $</td>
        <td>
          <button type="button" className={`btn btn-${statusClass}`}>{status}</button>
        </td>
        <td>
          <Link type="button" to={`products/${product.id}/edit`} className="btn btn-primary mr-10">Modify</Link>
          <button type="button" className="btn btn-danger mr-10" onClick={() => this.deleteProduct(product.id)} >Remove</button>
        </td>
      </tr>
    );
  }

}

export default ProductItem;
