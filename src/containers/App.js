import React from "react";
import { connect } from "react-redux";

import Input from "./../components/Input";
import KeyPad from "./../components/KeyPad";

import "./App.css";

class App extends React.Component {
  render() {
    const { theme } = this.props;
    const th = theme.data.body[theme.value];
    return (
      <div style={th}>
        <div className="calc">
          <Input />
          <table>
            <thead></thead>
            <KeyPad />
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(App);
