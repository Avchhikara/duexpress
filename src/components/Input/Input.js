import React from "react";

import { connect } from "react-redux";

class Input extends React.Component {
  render() {
    const { expression, theme } = this.props;
    const th = theme.data.input[theme.value];
    return (
      <input
        type="text"
        name="exp"
        id="exp"
        value={expression.latest}
        disabled
        style={th}
        className="result"
      />
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(Input);
