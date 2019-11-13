import React, { Component } from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

class AllScreens extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const menu = [
      { navigation: "MyWalletBalance", text: "Customer home" },
      {
        navigation: "CameraScreen",
        text: "Customer payment - Customer passcode scan"
      },
      {
        navigation: "TransactionScreen",
        text: "Customer payment - Customer passcode"
      },
      {
        navigation: "MerchantEnterAmountScreen",
        text: "Merchant Enter amount"
      },
      {
        navigation: "PasscodeScreen",
        text: "Merchant payment - enter passcode"
      },
      { navigation: "SuccessScreen", text: "Merchant payment - success" },
      {
        navigation: "TransactionHistoryWithdrawScreen",
        text: "Merchant Transaction History withdraw"
      },
      {
        navigation: "TransactionHistoryexpandedScreen",
        text: "Merchant Transaction History"
      },
      {
        navigation: "CustomerTopUpScreen",
        text: "Customer Top Up"
      },
      {
        navigation: "AddNewCardScreen",
        text: "Customer Top Up Add card"
      },
      {
        navigation: "SelectPaymentCardScreen",
        text: "Customer Top Up select payment Net Banking"
      },
      {
        navigation: "TransactionProcessingScreen",
        text: "Customer Top Up transaction processing"
      }
    ];
    return (
      <ScrollView>
        {menu.map((m, i) => (
          <TouchableOpacity
            style={style.itemContainer}
            key={i}
            onPress={() => this.props.navigate(m.navigation)}
          >
            <Text style={style.item}>
              {i + 1}: {m.text}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }
}
const style = StyleSheet.create({
  item: {
    padding: 10
  },
  itemContainer: {
    marginBottom: 2.5,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  }
});
export default AllScreens;
