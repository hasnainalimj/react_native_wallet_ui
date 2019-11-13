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

class Passcode extends Component {
  state = {
    passcode: "1234"
  };
  handelAddPassCode = value => {
    const { passcode } = this.state;
    if (passcode.split("").length < 6) {
      this.setState({ passcode: String(passcode).concat(value) });
    }
  };
  handelDeletePassCode = () => {
    const { passcode } = this.state;
    if (passcode.split("").length > 0) {
      this.setState({
        passcode: String(passcode).slice(0, passcode.length - 1)
      });
    }
  };
  render() {
    const { passcode } = this.state;
    const pass = [];
    passcode.split("").map(i => pass.push(true));
    [...Array(6)].map(i => pass.length < 6 && pass.push(false));
    const numberArray = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "",
      0,
      "icon",
      "",
      "button",
      ""
    ];
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.firstContainer}>
            <Image
              source={require("../../../assets/images/close.png")}
              style={styles.close}
            />
          </View>
          <View style={styles.secondContainer}>
            <View style={styles.profileContainer}>
              <View style={styles.profileBorder}>
                <Image
                  source={require("../../../assets/images/profile.png")}
                  style={styles.profile}
                />
              </View>
              <View style={styles.profileDetailContainer}>
                <Text style={styles.profileName}>Jube Bowman</Text>

                <Text style={styles.profileEmail}>$ 350.00</Text>
              </View>
            </View>
          </View>
          <View style={styles.passcodeContainer}>
            <Text style={styles.passcodeText}>
              Enter Passcode for this transaction
            </Text>
            <View style={styles.mainContainer}>
              {pass.map(i => (
                <View
                  style={[
                    styles.radioContainer,
                    !i && styles.radioInactiveContainer
                  ]}
                >
                  <View style={styles.radioInner} />
                </View>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.calculatorContainer}>
          <LinearGradient
            colors={["#2A2A5A", "#A24ED4"]}
            start={{ x: 0, y: -1 }}
            end={{ x: 0, y: 1 }}
            style={[styles.firstMultiContainer]}
          />
          {numberArray.map(d => {
            if (d === "icon") {
              return (
                <TouchableOpacity
                  style={styles.col}
                  onPress={this.handelDeletePassCode}
                >
                  <Image
                    source={require("../../../assets/images/Delete.png")}
                    style={styles.nextButton}
                  />
                </TouchableOpacity>
              );
            } else if (d === "button") {
              return (
                <View style={styles.col}>
                  <TouchableOpacity
                    style={[
                      styles.nextButtonContainer,
                      styles.nextButtonContainerActive
                    ]}
                  >
                    <Image
                      source={require("../../../assets/images/arrow.png")}
                      style={styles.nextButton}
                    />
                  </TouchableOpacity>
                </View>
              );
            } else {
              return (
                <TouchableOpacity
                  style={styles.col}
                  onPress={() => this.handelAddPassCode(d)}
                >
                  <Text style={styles.colText}>{d}</Text>
                </TouchableOpacity>
              );
            }
          })}
        </View>
      </View>
    );
  }
}

export default Passcode;
