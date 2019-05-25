import React, { Component } from 'react';

class ProductItem extends Component {
  render() {
    return (
      <tr>
        <td>1</td>
        <td>hwait</td>
        <td>1000$</td>
        <td>Available</td>
        <td>
          <button type="button" className="btn btn-primary mr-10">Modify</button>
          <button type="button" className="btn btn-danger mr-10">Remove</button>
        </td>
      </tr>
    );
  }

}

export default ProductItem;
