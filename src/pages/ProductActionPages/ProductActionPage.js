import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { AddToProduct, UpdateProductRequest, GetItemEdittingRequest } from '../../actions/index';

class ProductActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:'',
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
    let { history } = this.props;
    let match = this.props.match ? this.props.match : null;
    if (match) {
      this.props.UpdateProduct(this.state);
    }
    else {
      this.props.AddToProduct(this.state);

    }
    history.goBack();
  }
  findProduct = (products, id) => {
    let result = null;
    products.forEach((product) => {
      if (product.id === id) {
        result = product;
      }
    })
    return result;
  }
  componentDidMount() {
    let match = this.props.match ? this.props.match : null;
    if (match) {
      let id = match.params.id;
      this.props.EdittingItem(id);
    }

  }
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.ItemEditting) {
      let { ItemEditting } = nextProps;
      this.setState({
        id:ItemEditting.id,
        name: ItemEditting.name,
        price: ItemEditting.price,
        status: ItemEditting.status
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
            <input
              type="text"
              className="form-control"
              name='name'
              onChange={this.onChange}
              value={this.state.name}
            />
            <label>Price</label>
            <input type="text"
              className="form-control"
              name='price'
              onChange={this.onChange}
              value={this.state.price}
            />
            <br />
            <label>Status</label>
            <br />
            <input type="checkbox"
              name='status'
              onChange={this.onChange}
              value={this.state.status}
              checked={this.state.status}
            />
            Availabel
          </div>
          <Link to='/products-list' className="btn btn-danger">Comback</Link>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>

    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    ItemEditting: state.itemEditting
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    AddToProduct: (product) => {
      dispatch(AddToProduct(product));
    },
    EdittingItem: (id) => {
      dispatch(GetItemEdittingRequest(id))
    },
    UpdateProduct: (product) => {
      dispatch(UpdateProductRequest(product))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
