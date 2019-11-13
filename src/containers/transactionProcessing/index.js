import React, { Component } from "react";
import { View, Text, Image } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import styles from "./style";

class TransactionProcessing extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../../../assets/images/graphic1.png")}
          style={styles.image}
        />
        <Text style={styles.text}>Payment processing…</Text>
        <Text style={styles.desc}>
          Please authorize the transaction of Rs on your xxx platform
        </Text>
      </View>
    );
  }
}

export default TransactionProcessing;
