import React, { Component } from "react";
import { connect } from "react-redux";
import * as basicDataActions from "../../redux/actions/basicDataActions";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import StickyNote from '../../components/StickyNote'



class HomePage extends Component {
  componentDidMount() {
    const { actions, basicData } = this.props;
    if (basicData.length === 0) {
      actions.loadBasicData();
    }
  }
  render() {
    return (
      <div>
        <header>HomePage</header>
        <main>
          <p>this is the home page</p>
          {this.props.basicData.map(basicData => (
            <div key={basicData.name}>
              <p>
                Hi World I'am {basicData.name}, you can call me{" "}
                {basicData.alias} but no one does so thats up to you. I am a{" "}
                {basicData.age} {basicData.title} for Q-link. I am{" "}
                {basicData.height} inchs tall and my eye color is{" "}
                {basicData.eyeColor} but thats irrelevent data.
              </p>
              <StickyNote ></StickyNote>
            </div>
          ))}
        </main>
      </div>
    );
  }
}

HomePage.propTypes = {
  basicData: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    basicData: state.basicData
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadBasicData: bindActionCreators(
        basicDataActions.loadBasicData,
        dispatch
      )
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
