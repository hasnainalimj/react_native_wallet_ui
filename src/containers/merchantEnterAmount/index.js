import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./style";
class MerchantEnterAmount extends Component {
  constructor(props) {
    super(props);
    this.state = { amount: "00.00", isKeyboardViewed: false };
  }
  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      this._keyboardDidShow
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      this._keyboardDidHide
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow = () => {
    this.setState({ isKeyboardViewed: true });
  };

  _keyboardDidHide = () => {
    this.setState({ isKeyboardViewed: false });
  };
  render() {
    const { amount, isKeyboardViewed } = this.state;
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <ScrollView contentContainerStyle={styles.container}>
          <View
            style={[
              styles.multiContainer,
              isKeyboardViewed && styles.multiContainerActive
            ]}
          >
            <LinearGradient
              colors={["#62378B", "#62378B"]}
              start={{ x: 1.0, y: 0.5 }}
              end={{ x: 0.5, y: 1.0 }}
              style={[
                styles.thirdMultiContainer,
                isKeyboardViewed && styles.thirdMultiContainerActive
              ]}
            />
            <LinearGradient
              colors={["#62378B", "#62378B"]}
              start={{ x: 1.0, y: 0.5 }}
              end={{ x: 0.5, y: 1.0 }}
              style={[
                styles.secondMultiContainer,
                isKeyboardViewed && styles.secondMultiContainerActive
              ]}
            />
            <LinearGradient
              colors={["#2A2A5A", "#A24ED4"]}
              start={{ x: 0, y: -1 }}
              end={{ x: 0, y: 1 }}
              style={[
                styles.firstMultiContainer,
                isKeyboardViewed && styles.firstMultiContainerActive
              ]}
            />
            <View style={{ paddingTop: 10 }}>
              <Image
                source={require("../../../assets/images/close.png")}
                style={styles.close}
              />
              <View style={styles.profileContainer}>
                <Image
                  source={require("../../../assets/images/profile.png")}
                  style={styles.profile}
                />
                <View style={styles.profileDetailContainer}>
                  <Text style={styles.profileName}>Jube Bowman</Text>

                  <Text style={styles.profileEmail}>
                    wants to make a payment
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <View style={styles.myWalletContainer}>
                <Text style={styles.myWalletText}>Enter Amount</Text>
                <View style={styles.myWalletPriceContainer}>
                  <Text style={styles.pice}>$</Text>
                  {/* <Text style={styles.pice}>2,549</Text>
              <Text style={styles.superScript}>.30</Text> */}
                  <TextInput
                    style={[styles.input, styles.pice]}
                    keyboardType="numeric"
                    onChange={e => this.setState({ amount: e })}
                    value={amount}
                  />
                </View>
              </View>
              <Text style={styles.error}>
                Insufficient fund in customers account
              </Text>
            </View>
            {/* <View style={styles.myWalletHistoryContainer}>
            <Image
              source={require("../../../assets/images/Repeat.png")}
              style={styles.icon}
            />
            <Text style={styles.transactionText}>Transaction History</Text>
          </View> */}
            {isKeyboardViewed ? (
              <View
                style={[
                  styles.nextButtonContainer,
                  styles.nextButtonContainerActive
                ]}
              >
                <Image
                  source={require("../../../assets/images/arrow.png")}
                  style={styles.nextButton}
                />
              </View>
            ) : (
              <View style={styles.nextButtonContainer}>
                <Image
                  source={require("../../../assets/images/buttonPng.png")}
                  style={styles.nextButton}
                />
              </View>
            )}
          </View>
          {/* <View>
            <Text style={styles.bottomText}>Top Up Wallet</Text>
          </View> */}
          <View />
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

export default MerchantEnterAmount;
