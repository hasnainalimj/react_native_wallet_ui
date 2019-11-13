import React, { Component } from "react";
import MyWalletBalance from "../containers/myWalletBalance";

class MyWalletBalanceScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  render() {
    const { navigate } = this.props.navigation;
    console.log("TCL: render -> this.props.navigation");
    return <MyWalletBalance navigate={navigate} />;
  }
}

export default MyWalletBalanceScreen;
