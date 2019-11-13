import React, { Component } from "react";
import CustomerTopUp from "../containers/customerTopUp";

class CustomerTopUpScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  render() {
    const { navigate } = this.props.navigation;
    console.log("TCL: render -> this.props.navigation");
    return <CustomerTopUp navigate={navigate} />;
  }
}

export default CustomerTopUpScreen;
