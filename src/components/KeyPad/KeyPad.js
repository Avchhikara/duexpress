import React from "react";
import { connect } from "react-redux";

import addNumber from "./../../actions/addNumber";
import addOperand from "./../../actions/addOperand";
import clear from "./../../actions/clear";
import calculate from "./../../actions/calculate";

class KeyPad extends React.Component {
  addNum = e => {
    this.props.dispatch(addNumber(this.props, e.target.textContent));
  };

  addOperation = e => {
    this.props.dispatch(addOperand(this.props, e.target.textContent));
  };

  clear = () => {
    this.props.dispatch(clear());
  };

  calc = () => {
    // console.log(this.props);
    this.props.dispatch(calculate(this.props));
  };

  render() {
    return (
      <tbody>
        <tr>
          <td>
            <button onClick={this.addNum}>1</button>
          </td>
          <td>
            <button onClick={this.addNum}>2</button>
          </td>
          <td>
            <button onClick={this.addNum}>3</button>
          </td>
          <td>
            <button onClick={this.addOperation}>+</button>
          </td>
        </tr>
        <tr>
          <td>
            <button onClick={this.addNum}>4</button>
          </td>
          <td>
            <button onClick={this.addNum}>5</button>
          </td>
          <td>
            <button onClick={this.addNum}>6</button>
          </td>
          <td>
            <button onClick={this.addOperation}>-</button>
          </td>
        </tr>
        <tr>
          <td>
            <button onClick={this.addNum}>7</button>
          </td>
          <td>
            <button onClick={this.addNum}>8</button>
          </td>
          <td>
            <button onClick={this.addNum}>9</button>
          </td>
          <td>
            <button onClick={this.addOperation}>*</button>
          </td>
        </tr>
        <tr>
          <td>
            <button onClick={this.clear}>Clear</button>
          </td>
          <td>
            <button onClick={this.addNum}>0</button>
          </td>
          <td>
            <button onClick={this.calc}>=</button>
          </td>
          <td>
            <button onClick={this.addOperation}>/</button>
          </td>
        </tr>
      </tbody>
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(KeyPad);
