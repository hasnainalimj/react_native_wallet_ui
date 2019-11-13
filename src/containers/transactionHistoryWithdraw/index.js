import React, { Component } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  View,
  Text,
  Image,
  CheckBox,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";
import styles from "./style";
import { TextInput } from "react-native-gesture-handler";
class TransactionHistoryWithdraw extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.multiContainer}>
            <View style={styles.backgroundContainer}>
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
            </View>
            <View style={styles.header}>
              <Ionicons name="md-arrow-back" size={25} color={"#fff"} />
              <Text style={styles.headerTitle}>Withdraw Money</Text>
              <View style={{ width: 25 }} />
            </View>
          </View>
          <View style={styles.secondContainer}>
            <Text style={styles.secondTitle}>Enter amount to withdraw</Text>
            <View style={styles.secondPriceContainer}>
              <Text style={[styles.secondPrice, { marginRight: 2 }]}>$ </Text>
              <TextInput style={styles.secondPrice} value={"00.00"} />
            </View>
            <View style={styles.hr} />
            <View style={styles.secondBottomContainer}>
              <CheckBox style={styles.checkBox}></CheckBox>
              <View style={styles.secondBottomInnerContainer}>
                <Text style={styles.secondBottomInnerContainerTitle}>
                  Withdraw all available balance
                </Text>
                <Text style={styles.secondBottomInnerContainerDescriptions}>
                  $ 2,549.30
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.thirdContainer}>
            <Text style={styles.thirdTitle}>Withdraw Destination</Text>
            <ScrollView
              style={styles.thirdScrollContainer}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {[...Array(20)].map((d, i) => (
                <View
                  style={[
                    styles.itemContainer,
                    !i && { borderColor: "#FFA15D" }
                  ]}
                >
                  <View style={styles.itemTopContainer}>
                    <CheckBox style={styles.checkBoxCircle}></CheckBox>
                    <Image
                      source={require("../../../assets/images/Bitmap.png")}
                      style={styles.thirdCompanyImage}
                    />
                  </View>
                  <View style={styles.itemBottomContainer}>
                    <Text style={styles.itemCarText}>**** 8979</Text>
                    <Text style={styles.itemAccountText}>Bank Account</Text>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
          <TouchableOpacity style={[styles.nextButtonContainer]}>
            <Image
              source={require("../../../assets/images/arrow.png")}
              style={styles.nextButton}
            />
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

export default TransactionHistoryWithdraw;
