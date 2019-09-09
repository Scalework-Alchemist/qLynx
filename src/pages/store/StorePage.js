import React, { Component } from "react";
import { connect } from "react-redux";
import * as storeActions from "../../redux/actions/storeActions";
import * as unlimitedRatesActions from "../../redux/actions/unlimitedRatesActions";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";


class StorePage extends Component {
  componentDidMount(){
    const {actions, products, unlimitedRates} = this.props
    if(products.length === 0){actions.loadFood()}
    if(unlimitedRates.length === 0){actions.loadUnlimited()}
  }
  render() {
    return (
      <>
        <h1>Store-products</h1>
        <p>this displays all products</p>
        {this.props.products.map(product => (
          <div key={product.id}>{product.Name}</div>
        ))}
        <h1>Unlimited rates</h1>
        <p>{this.props.unlimitedRates.length -1} countries listed</p>
        {this.props.unlimitedRates.map(rate => (
          <div key={rate.Country}>{rate.Country} || {rate.Destinations}</div>
        ))}
      </>
    ); 
  }
}

StorePage.propTypes = {
  products: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    products: state.products,
    unlimitedRates: state.unlimitedRates
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadFood: bindActionCreators(storeActions.loadFood, dispatch),
      loadUnlimited: bindActionCreators(unlimitedRatesActions.loadUnlimited, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StorePage);
