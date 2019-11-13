import React, { Component } from "react";
import TransactionHistoryexpanded from "../containers/transactionHistoryexpanded";

class TransactionHistoryexpandedScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  render() {
    const { navigate } = this.props.navigation;
    console.log("TCL: render -> this.props.navigation");
    return <TransactionHistoryexpanded navigate={navigate} />;
  }
}

export default TransactionHistoryexpandedScreen;
