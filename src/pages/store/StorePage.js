import React, { Component } from "react";
import { connect } from "react-redux";
import * as storeActions from "../../redux/actions/storeActions";
import {bindActionCreators} from 'redux'
import PropTypes from "prop-types";
class StorePage extends Component {
  state = {
    products: {
      title: ""
    }
  };

  handleChange = event => {
    const product = { ...this.state.products, title: event.target.value };
    this.setState({ products: product });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.actions.createProduct(this.state.products);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Store-products</h1>
        <h3>add product</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.products.title}
        />
        <input type="submit" value="Save" />
        {this.props.products.map(product => (
          <div key={product.title}>{product.title}</div>
        ))}
      </form>
    );
  }
}
StorePage.propTypes = {
  products: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};
function mapStateToProps(state, ownProps) {
  return {
    products: state.products
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(storeActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StorePage);
