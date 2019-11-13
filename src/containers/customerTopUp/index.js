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
class CustomerTopUp extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }
  render() {
    const { active } = this.state;
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <ScrollView contentContainerStyle={[styles.container]}>
          <View style={[styles.multiContainer]}>
            <View style={[styles.backgroundContainer]}>
              <LinearGradient
                colors={["#62378B", "#62378B"]}
                start={{ x: 1.0, y: 0.5 }}
                end={{ x: 0.5, y: 1.0 }}
                style={[styles.thirdMultiContainer]}
              />
              <LinearGradient
                colors={["#62378B", "#62378B"]}
                start={{ x: 1.0, y: 0.5 }}
                end={{ x: 0.5, y: 1.0 }}
                style={[styles.secondMultiContainer]}
              />
              <LinearGradient
                colors={["#2A2A5A", "#A24ED4"]}
                start={{ x: 0, y: -1 }}
                end={{ x: 0, y: 1 }}
                style={[styles.firstMultiContainer]}
              />
            </View>
            <View style={styles.headerContainer}>
              <View style={styles.header}>
                <Ionicons name="md-arrow-back" size={25} color={"#fff"} />
                <Text style={styles.headerTitle}>Top Up Wallet</Text>
                <View style={{ width: 25 }} />
              </View>
              <View style={styles.headerBottomContainer}>
                <View style={styles.headerBottomFirstContainer}>
                  <View style={styles.headerBottomPriceContainer}>
                    <Text style={styles.headerBottomName}>
                      My Wallet Balance
                    </Text>
                  </View>
                  <TouchableOpacity style={styles.headerBottomButtonContainer}>
                    <Text style={styles.headerBottomPrice}>$ 2,549.30</Text>
                    {/* <Text style={styles.headerBottomName}>Withdraw</Text> */}
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.thirdContainer}>
            <Text style={styles.thirdTitle}>Select an amount to top up</Text>
            <ScrollView
              style={styles.thirdScrollContainer}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {[...Array(20)].map((d, i) => (
                <TouchableOpacity
                  style={[
                    styles.itemContainer,
                    active === i && { borderColor: "#FFA15D" }
                  ]}
                  onPress={() => this.setState({ active: i })}
                >
                  <View style={styles.itemTopContainer}>
                    <CheckBox style={styles.checkBoxCircle}></CheckBox>
                    {/* <Image
                      source={require("../../../assets/images/Bitmap.png")}
                      style={styles.thirdCompanyImage}
                    /> */}
                  </View>
                  <View style={styles.itemBottomContainer}>
                    <Text style={styles.itemCarText}>$ {10 * (i + 1)}</Text>
                    <View />
                  </View>
                  <View style={styles.backgroundNumberContainer}>
                    <Text style={styles.backgroundNumber}>
                      {String(10 * (i + 1)).slice(
                        0,
                        String(10 * (i + 1)).length - 1
                      )}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          <View style={styles.OrContainer}>
            <Text style={styles.Or}>OR</Text>
          </View>
          <View style={styles.secondContainer}>
            <Text style={styles.secondTitle}>Enter amount to withdraw</Text>
            <View style={styles.secondPriceContainer}>
              <Text style={[styles.secondPrice, { marginRight: 2 }]}>$ </Text>
              <TextInput style={styles.secondPrice} value={"00.00"} />
            </View>
            <View style={styles.hr} />
          </View>

          <TouchableOpacity
            style={[
              styles.nextButtonContainer,
              active !== false && styles.nextButtonContainerActive
            ]}
          >
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

export default CustomerTopUp;
