import React, { Component } from "react";
import styled from 'styled-components';

const StyledInput = styled.div`
  border: 1px solid #000;
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
  width: 150px;
  box-sizing: border-box;
  background: ${props => props.backgroundColor || "blue"};
  h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    color: green;
    }
`;


class StickyNote extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", submittedPayload: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ submittedPayload: this.state.value });
  }
  render() {
    return (
      <div className="Container">
          <StyledInput backgroundColor='yellow'>
            <h1>{this.state.submittedPayload}</h1>
          </StyledInput>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="fill me with text"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default StickyNote;
