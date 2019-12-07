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
    this.props.dispatch(clear(this.props));
  };

  calc = () => {
    // console.log(this.props);
    this.props.dispatch(calculate(this.props));
  };

  render() {
    const { theme } = this.props;
    const thButton = theme.data.button[theme.value];

    return (
      <tbody>
        <tr>
          <td>
            <button onClick={this.addNum} style={thButton}>
              1
            </button>
          </td>
          <td>
            <button onClick={this.addNum} style={thButton}>
              2
            </button>
          </td>
          <td>
            <button onClick={this.addNum} style={thButton}>
              3
            </button>
          </td>
          <td>
            <button onClick={this.addOperation} style={thButton}>
              +
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button onClick={this.addNum} style={thButton}>
              4
            </button>
          </td>
          <td>
            <button onClick={this.addNum} style={thButton}>
              5
            </button>
          </td>
          <td>
            <button onClick={this.addNum} style={thButton}>
              6
            </button>
          </td>
          <td>
            <button onClick={this.addOperation} style={thButton}>
              -
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button onClick={this.addNum} style={thButton}>
              7
            </button>
          </td>
          <td>
            <button onClick={this.addNum} style={thButton}>
              8
            </button>
          </td>
          <td>
            <button onClick={this.addNum} style={thButton}>
              9
            </button>
          </td>
          <td>
            <button onClick={this.addOperation} style={thButton}>
              *
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button onClick={this.clear} style={thButton}>
              Clear
            </button>
          </td>
          <td>
            <button onClick={this.addNum} style={thButton}>
              0
            </button>
          </td>
          <td>
            <button onClick={this.calc} style={thButton}>
              =
            </button>
          </td>
          <td>
            <button onClick={this.addOperation} style={thButton}>
              /
            </button>
          </td>
        </tr>
      </tbody>
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(KeyPad);
