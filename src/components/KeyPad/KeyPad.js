import React from "react";
import { connect } from "react-redux";

class KeyPad extends React.Component {
  addNum(e) {
    console.log(e.target.textContent);
  }

  addOperation(e) {
    console.log(e.target.textContent);
  }

  clear() {
    console.log("clear is requested");
  }

  calc() {
    console.log("Ans requested");
  }

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
