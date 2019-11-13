import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import styles from "./style";
import { TouchableOpacity } from "react-native-gesture-handler";
import style from "./style";

class Success extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={["#62378B", "#62378B"]}
          start={{ x: 1.0, y: 0.5 }}
          end={{ x: 0.5, y: 1.0 }}
          style={styles.thirdMultiContainer}
        />
        <View style={styles.firstContainer}>
          <Image
            source={require("../../../assets/images/graphic.png")}
            style={styles.icon}
          />
          <Text style={style.firstDescription}>Top Up Successful</Text>
        </View>
        <View style={styles.secondContainer}>
          <View style={styles.row}>
            <Text style={styles.heading}>Transaction ID</Text>
            <Text style={styles.description}>TXN89389</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.heading}>Date</Text>
            <Text style={styles.description}>12/10/2018 10:45pm</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.heading}>Amount</Text>
            <Text style={styles.description}>$ 50</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.heading}>Payed by</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../../assets/images/profile.png")}
                style={styles.profile}
              />
              <Text style={styles.description}>Lubomír Dvořák</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.heading}>New Wallet Balance</Text>
            <Text style={[styles.description, styles.newPrice]}>
              $ 1,300.00
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Go to Wallet</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Success;
