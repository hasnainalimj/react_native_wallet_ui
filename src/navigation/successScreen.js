import React, { Component } from "react";
import Success from "../containers/success";

class SuccessScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  render() {
    const { navigate } = this.props.navigation;
    return <Success navigate={navigate} />;
  }
}

export default SuccessScreen;
