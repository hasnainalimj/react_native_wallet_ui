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
class TransactionHistoryexpanded extends Component {
  constructor(props) {
    super(props);
    this.state = { shown: false };
  }
  render() {
    const { shown } = this.state;
    let item = [{ title: "Today", price: "$ 1,200.00" }];
    if (shown) {
      item = [
        {
          title: "Today",
          price: "$ 1,200.00"
        },
        {
          title: "2 Days",
          price: "$ 2,000.00"
        },
        {
          title: "3 Days",
          price: "$ 2,549.30"
        }
      ];
    }
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <View
          style={[styles.multiContainer, shown && styles.multiContainerActive]}
        >
          <View
            style={[
              styles.backgroundContainer,
              shown && styles.multiContainerActive
            ]}
          >
            <LinearGradient
              colors={["#62378B", "#62378B"]}
              start={{ x: 1.0, y: 0.5 }}
              end={{ x: 0.5, y: 1.0 }}
              style={[
                styles.thirdMultiContainer,
                shown && styles.thirdMultiContainerActive
              ]}
            />
            <LinearGradient
              colors={["#62378B", "#62378B"]}
              start={{ x: 1.0, y: 0.5 }}
              end={{ x: 0.5, y: 1.0 }}
              style={[
                styles.secondMultiContainer,
                shown && styles.secondMultiContainerActive
              ]}
            />
            <LinearGradient
              colors={["#2A2A5A", "#A24ED4"]}
              start={{ x: 0, y: -1 }}
              end={{ x: 0, y: 1 }}
              style={[
                styles.firstMultiContainer,
                shown && styles.firstMultiContainerActive
              ]}
            />
          </View>
          <View style={styles.headerContainer}>
            <View style={styles.header}>
              <Ionicons name="md-arrow-back" size={25} color={"#fff"} />
              <Text style={styles.headerTitle}>Withdraw Money</Text>
              <View style={{ width: 25 }} />
            </View>
            <View style={styles.headerBottomContainer}>
              <View style={styles.headerBottomFirstContainer}>
                <View style={styles.headerBottomPriceContainer}>
                  <Text style={styles.headerBottomName}>My Wallet Balance</Text>
                  <Text style={styles.headerBottomPrice}>$ 2,549.30</Text>
                </View>
                <TouchableOpacity style={styles.headerBottomButtonContainer}>
                  <Text style={styles.headerBottomName}>Withdraw</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.headerLastContainer}>
              <View style={styles.headerDaysContainer}>
                {item.map(d => (
                  <View style={styles.headerDaysItem}>
                    <Text style={styles.headerDaysText}>{d.title}</Text>
                    <Text style={styles.headerDaysText}>{d.price}</Text>
                  </View>
                ))}
              </View>
              <TouchableOpacity
                onPress={() => this.setState(p => ({ shown: !p.shown }))}
                style={styles.arrow}
              >
                <Ionicons
                  name={`ios-arrow-${shown ? "up" : "down"}`}
                  size={25}
                  color={"#fff"}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <ScrollView
          contentContainerStyle={[
            styles.container,
            shown && styles.containerActive
          ]}
        >
          <View style={styles.bottom}>
            <Text style={styles.heading}>Today</Text>
            {[...Array(10)].map((d, i) => (
              <View style={styles.itemContainer}>
                <Image
                  source={require("../../../assets/images/profile.png")}
                  style={styles.profile}
                />
                <View style={styles.centerContainer}>
                  <Text style={styles.centerTitle}>Money Added from HSBC</Text>
                  <Text style={styles.centerTime}>10:43 AM</Text>
                </View>
                <Text
                  style={[styles.centerAmount, !i && styles.centerAmountActive]}
                >
                  + US$50.00
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

export default TransactionHistoryexpanded;
