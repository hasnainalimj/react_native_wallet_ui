import React, { Component } from "react";
import MerchantEnterAmount from "../containers/merchantEnterAmount";

class MerchantEnterAmountScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  render() {
    const { navigate } = this.props.navigation;
    console.log("TCL: render -> this.props.navigation");
    return <MerchantEnterAmount navigate={navigate} />;
  }
}

export default MerchantEnterAmountScreen;
