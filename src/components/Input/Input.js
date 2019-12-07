import React from "react";

import { connect } from "react-redux";

class Input extends React.Component {
  getVal(expression) {
    let i = expression.length;
    while (i >= 0) {
      if (!Number.isNaN(parseInt(expression[i]))) {
        return expression[i];
      }
      i--;
    }
    return "";
  }

  render() {
    const { expression, theme } = this.props;
    const th = theme.data.input[theme.value];
    return (
      <input
        type="text"
        name="exp"
        id="exp"
        value={this.getVal(expression)}
        disabled
        style={th}
        className="result"
      />
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(Input);
