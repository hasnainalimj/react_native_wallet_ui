import React, { Component } from "react";
import { View, Text, Image } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import styles from "./style";

class Transaction extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.firstContainer}>
          <Image
            source={require("../../../assets/images/close.png")}
            style={styles.close}
          />
        </View>
        <View style={styles.secondContainer}>
          <View style={styles.pizzaContainer}>
            <Image
              source={require("../../../assets/images/pizza.png")}
              style={styles.pizza}
            />
          </View>
        </View>
        <View style={styles.thirdContainer}>
          <Text style={styles.thirdText}>
            Transaction of $ 20.00 with Pizza Hut
          </Text>
        </View>
        <View style={styles.fourthContainer}>
          <Text style={styles.fourthText}>Passcode for this transaction</Text>
          <View style={styles.numberContainer}>
            <LinearGradient
              colors={["#62378B", "#62378B"]}
              start={{ x: 1.0, y: 0.5 }}
              end={{ x: 0.5, y: 1.0 }}
              style={styles.thirdMultiContainer}
            />
            <Text style={styles.number}>3</Text>
            <Text style={styles.number}>8</Text>
            <Text style={styles.number}>9</Text>
            <Text style={styles.number}>0</Text>
            <Text style={styles.number}>2</Text>
            <Text style={styles.number}>3</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Transaction;
