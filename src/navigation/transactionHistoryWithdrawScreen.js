import React, { Component } from "react";
import TransactionHistoryWithdraw from "../containers/transactionHistoryWithdraw";

class TransactionHistoryWithdrawScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  render() {
    const { navigate } = this.props.navigation;
    console.log("TCL: render -> this.props.navigation");
    return <TransactionHistoryWithdraw navigate={navigate} />;
  }
}

export default TransactionHistoryWithdrawScreen;
