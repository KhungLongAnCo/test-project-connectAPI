import React, { Component } from 'react';

class ProductActionPage extends Component {
  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form>
          <legend>Add Product</legend>

          <div className="form-group">
            <label>Name product</label>
            <input type="text" className="form-control" />
            <label>Price</label>
            <input type="text" className="form-control" />
            <br />
            <label>Status</label>
          <br />
          <input type="checkbox"/> Availabel
          </div>
          




          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>

    )
  }
}

export default ProductActionPage;
