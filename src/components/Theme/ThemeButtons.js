import React from "react";

import { connect } from "react-redux";

import modifyTheme from "./../../actions/changeTheme";

class ThemeButtons extends React.Component {
  onLightSelect = () => {
    this.props.dispatch(modifyTheme(this.props, "light"));
  };

  onDarkSelect = () => {
    this.props.dispatch(modifyTheme(this.props, "dark"));
  };

  render() {
    const { theme } = this.props;
    const th = theme.data.button[theme.value];

    return (
      <div className="theme-buttons">
        <button onClick={this.onLightSelect} style={th}>
          Light
        </button>
        <button onClick={this.onDarkSelect} style={th}>
          Dark
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(ThemeButtons);
