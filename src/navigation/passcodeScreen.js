import React, { Component } from "react";
import Passcode from "../containers/passcode";

class PasscodeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  render() {
    const { navigate } = this.props.navigation;
    console.log("TCL: render -> this.props.navigation");
    return <Passcode navigate={navigate} />;
  }
}

export default PasscodeScreen;
