import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./style";
class myWalletBalance extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.multiContainer}>
          <LinearGradient
            colors={["#62378B", "#62378B"]}
            start={{ x: 1.0, y: 0.5 }}
            end={{ x: 0.5, y: 1.0 }}
            style={styles.thirdMultiContainer}
          />
          <LinearGradient
            colors={["#62378B", "#62378B"]}
            start={{ x: 1.0, y: 0.5 }}
            end={{ x: 0.5, y: 1.0 }}
            style={styles.secondMultiContainer}
          />
          <LinearGradient
            colors={["#2A2A5A", "#A24ED4"]}
            start={{ x: 0, y: -1 }}
            end={{ x: 0, y: 1 }}
            style={styles.firstMultiContainer}
          />
          <View style={styles.profileContainer}>
            <Image
              source={require("../../../assets/images/profile.png")}
              style={styles.profile}
            />
            <View style={styles.profileDetailContainer}>
              <Text style={styles.profileName}>Jube Bowman</Text>

              <Text style={styles.profileEmail}>Jubebowman@gmail.com</Text>
            </View>
          </View>
          <View style={styles.myWalletContainer}>
            <Text style={styles.myWalletText}>My Wallet Balance</Text>
            <View style={styles.myWalletPriceContainer}>
              <Text style={styles.superScript}>$</Text>
              <Text style={styles.pice}>2,549</Text>
              <Text style={styles.superScript}>.30</Text>
            </View>
          </View>
          <View style={styles.myWalletHistoryContainer}>
            <Image
              source={require("../../../assets/images/Repeat.png")}
              style={styles.icon}
            />
            <Text style={styles.transactionText}>Transaction History</Text>
          </View>

          <View style={styles.nextButtonContainer}>
            <Image
              source={require("../../../assets/images/buttonPng.png")}
              style={styles.nextButton}
            />
          </View>
        </View>
        <View>
          <Text style={styles.bottomText}>Top Up Wallet</Text>
        </View>
        <View />
      </View>
    );
  }
}

export default myWalletBalance;
