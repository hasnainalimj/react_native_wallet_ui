import React, { Component } from "react";
import SelectPaymentCard from "../containers/selectPaymentCard";

class SelectPaymentCardScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  render() {
    const { navigate } = this.props.navigation;
    console.log("TCL: render -> this.props.navigation");
    return <SelectPaymentCard navigate={navigate} />;
  }
}

export default SelectPaymentCardScreen;
