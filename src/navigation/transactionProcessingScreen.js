import React, { Component } from "react";
import TransactionProcessing from "../containers/transactionProcessing";

class TransactionProcessingScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  render() {
    const { navigate } = this.props.navigation;
    console.log("TCL: render -> this.props.navigation");
    return <TransactionProcessing navigate={navigate} />;
  }
}

export default TransactionProcessingScreen;
