import React, { Component } from 'react';
import apiCaller from '../../utils/apiCaller';

class ProductActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: '',
      status: false
    }
  }
  onChange = (e) => {
    let target = e.target;
    let name = target.name;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    })
  }
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.name && this.state.price) {
      apiCaller('products', 'POST', this.state)
        .then((res) => {
          console.log(res.data);
        })
    }
  }
  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form onSubmit={this.onSubmit}>
          <legend>Add Product</legend>

          <div className="form-group">
            <label>Name product</label>
            <input type="text"
              className="form-control"
              name='name'
              onChange={this.onChange} />
            <label>Price</label>
            <input type="text"
              className="form-control"
              name='price'
              onChange={this.onChange} />
            <br />
            <label>Status</label>
            <br />
            <input type="checkbox"
              name='status'
              onChange={this.onChange}
            />
            Availabel
          </div>





          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>

    )
  }
}

export default ProductActionPage;
