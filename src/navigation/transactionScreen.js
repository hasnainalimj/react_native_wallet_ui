import React, { Component } from "react";
import Transaction from "../containers/transaction";

class TransactionScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  render() {
    const { navigate } = this.props.navigation;
    console.log("TCL: render -> this.props.navigation");
    return <Transaction navigate={navigate} />;
  }
}

export default TransactionScreen;
