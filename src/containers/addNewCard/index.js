import React, { Component } from "react";
import { View, Text, Image, TextInput, Switch, Keyboard } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import styles from "./style";
import common from "../../common";
class AddNewCard extends Component {
  constructor(props) {
    super(props);
    this.state = { isKeyboardViewed: false };
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
    const { isKeyboardViewed } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Ionicons name="md-arrow-back" size={25} color={"#53606F"} />
          <Text style={styles.headerTitle}>Withdraw Money</Text>
          <View style={{ width: 25 }} />
        </View>
        <View
          style={{
            flexGrow: 1,
            justifyContent: isKeyboardViewed ? "flex-start" : "space-evenly",
            alignItems: "center"
          }}
        >
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
            <View style={styles.cardContainer}>
              <TextInput
                style={styles.cardInput}
                placeholder="Card Number"
                keyboardType="number-pad"
              />
              <View style={styles.cardCenterContainer}>
                <TextInput
                  style={[
                    styles.cardInput,
                    {
                      // marginRight: 1,
                      width: common.Config.dimensions.width * 0.35
                    }
                  ]}
                  placeholder="Expiry"
                />
                <TextInput
                  style={[
                    styles.cardInput,
                    {
                      // marginRight: 1,
                      width: common.Config.dimensions.width * 0.35
                    }
                  ]}
                  keyboardType="number-pad"
                  placeholder="CVV"
                />
              </View>
              <View style={styles.cardCheckboxContainer}>
                <Switch />
                <Text style={{ color: "#fff" }}>Make Default</Text>
              </View>
            </View>
          </View>
          <View style={styles.nextButtonContainer}>
            <Ionicons name="ios-checkmark" size={40} color={"#fff"} />
          </View>
        </View>
      </View>
    );
  }
}

export default AddNewCard;
