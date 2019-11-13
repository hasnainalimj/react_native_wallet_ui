import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  Switch,
  Keyboard
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import styles from "./style";
import common from "../../common";
import { TouchableOpacity } from "react-native-gesture-handler";
class AddNewCard extends Component {
  state = { selectedCard: 0, activeTab: 0, expendCards: false };
  render() {
    const cards = [
      require("../../../assets/images/card3.png"),
      require("../../../assets/images/card2.png"),
      require("../../../assets/images/card1.png")
    ];
    const { selectedCard, activeTab, expendCards } = this.state;
    // const cards = [
    //   ...tempCards.filter((d, index) => index !== selectedCard),
    //   tempCards[selectedCard]
    // ];
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Ionicons name="md-arrow-back" size={25} color={"#53606F"} />
          <Text style={styles.headerTitle}>Select Payment Method</Text>
          <View />
        </View>
        <View
          style={{
            flexGrow: 1,
            justifyContent: "flex-start",
            alignItems: "center"
          }}
        >
          <View style={styles.menuContainer}>
            <TouchableOpacity
              style={styles.menuItemContainer}
              onPress={() => this.setState({ activeTab: 0 })}
            >
              <View
                style={[
                  styles.menuImageContainer,
                  activeTab === 0 && styles.menuImageContainerActive
                ]}
              >
                <Image
                  style={[
                    styles.menuImage,
                    activeTab === 0 && styles.menuImageActive
                  ]}
                  source={require("../../../assets/images/card.png")}
                />
              </View>
              <Text
                style={[
                  styles.menuText,
                  activeTab === 0 && styles.menuTextActive
                ]}
              >
                Cards
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItemContainer}
              onPress={() => this.setState({ activeTab: 1 })}
            >
              <View
                style={[
                  styles.menuImageContainer,
                  activeTab === 1 && styles.menuImageContainerActive
                ]}
              >
                <Image
                  style={[
                    styles.menuImage,
                    activeTab === 1 && styles.menuImageActive
                  ]}
                  source={require("../../../assets/images/Cursore.png")}
                />
              </View>
              <Text
                style={[
                  styles.menuText,
                  activeTab === 1 && styles.menuTextActive
                ]}
              >
                Net banking
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItemContainer}
              onPress={() => this.setState({ activeTab: 2 })}
            >
              <View
                style={[
                  styles.menuImageContainer,
                  activeTab === 2 && styles.menuImageContainerActive
                ]}
              >
                <Image
                  style={[
                    styles.menuImage,
                    activeTab === 2 && styles.menuImageActive
                  ]}
                  source={require("../../../assets/images/home.png")}
                />
              </View>
              <Text
                style={[
                  styles.menuText,
                  activeTab === 2 && styles.menuTextActive
                ]}
              >
                upi
              </Text>
            </TouchableOpacity>
          </View>
          {activeTab === 0 ? (
            <React.Fragment>
              <View
                style={[
                  styles.cardsContainer,
                  !expendCards && styles.cardContainerCompress
                ]}
              >
                {cards.map((card, index) => (
                  <View
                    style={[
                      styles.cardItemContainer,
                      !expendCards &&
                        index === 1 &&
                        styles.cardItemContainerSmall1,
                      !expendCards &&
                        index === 0 &&
                        styles.cardItemContainerSmall2,
                      !expendCards && styles.cardItemContainerCompress
                    ]}
                  >
                    <View
                      style={[
                        styles.cardContainer,
                        !expendCards &&
                          index === 1 &&
                          styles.cardContainerSmall1,
                        !expendCards &&
                          index === 0 &&
                          styles.cardContainerSmall1
                      ]}
                    >
                      <Image
                        style={[
                          styles.cardImage,
                          !expendCards && index === 1 && styles.cardImageSmall1,
                          !expendCards && index === 0 && styles.cardImageSmall2
                        ]}
                        source={card}
                      />
                      <View style={styles.cardTopContainer}>
                        <TouchableOpacity
                          style={[
                            styles.cardCheckbox,
                            selectedCard === index && styles.cardCheckboxActive
                          ]}
                          onPress={() => this.setState({ selectedCard: index })}
                        >
                          {selectedCard === index && (
                            <Ionicons
                              name="ios-checkmark"
                              size={25}
                              color={"#fff"}
                            />
                          )}
                        </TouchableOpacity>
                      </View>
                      <View style={styles.cardCenterContainer}>
                        <Text style={styles.cardTitle}>Debit Card</Text>
                        <Text style={styles.cardNumber}>
                          7838{"  "}9929{"  "}9910{"  "}8929
                        </Text>
                      </View>
                      <View style={styles.cardBottomContainer}>
                        <View style={styles.cardBottomLeftContainer}>
                          <Switch style={styles.cardSwitch} />
                          <Text style={styles.cardSwitchTitle}>Debit Card</Text>
                        </View>
                        <View style={styles.cardBottomRightContainer}>
                          <View style={styles.cardBottomLeftItem}>
                            <Image
                              source={require("../../../assets/images/Delete1.png")}
                              style={styles.cardBottomIcon}
                            />
                            <Text style={styles.cardBottomLeftItemText}>
                              Edit
                            </Text>
                          </View>

                          <View style={styles.cardBottomLeftItem}>
                            <Image
                              source={require("../../../assets/images/Pencil.png")}
                              style={styles.cardBottomIcon}
                            />
                            <Text style={styles.cardBottomLeftItemText}>
                              Delete
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                ))}
                <View style={styles.cardArrowContainer}>
                  <TouchableOpacity
                    style={{
                      width: "100%",
                      height: "100%",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                    onPress={() => this.setState({ expendCards: !expendCards })}
                  >
                    <Ionicons
                      name={expendCards ? "ios-arrow-up" : "ios-arrow-down"}
                      size={20}
                      color={"#AFB8BB"}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity style={styles.addNewCardsContainer}>
                <Image
                  source={require("../../../assets/images/Mask.png")}
                  style={styles.addNewCardsBackground}
                />
                <Text style={styles.addNewCardsText}>Add New Cards</Text>
              </TouchableOpacity>
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
            </React.Fragment>
          ) : activeTab === 1 ? (
            <View style={{ marginTop: 10 }}>
              <View style={styles.netBankingSearchContainer}>
                <LinearGradient
                  colors={["#2A2A5A", "#A24ED4"]}
                  start={{ x: 0, y: -1 }}
                  end={{ x: 0, y: 1 }}
                  style={[styles.netBankingSearchBackground]}
                />
                <TextInput
                  style={styles.netBankingSearchText}
                  placeholder="Search Bank"
                />
                <Ionicons name={"ios-search"} size={20} color={"#fff"} />
              </View>
              {[...Array(10)].map(dd => (
                <View style={styles.netBankingContainer}>
                  <Image
                    source={require("../../../assets/images/bank.png")}
                    style={styles.netBankingImage}
                  />
                  <Text style={styles.netBankingText}>ICICI Bank</Text>
                </View>
              ))}
            </View>
          ) : (
            <View style={styles.upi}>
              <View
                style={[
                  styles.multiContainer
                  // isKeyboardViewed && styles.multiContainerActive
                ]}
              >
                <LinearGradient
                  colors={["#62378B", "#62378B"]}
                  start={{ x: 1.0, y: 0.5 }}
                  end={{ x: 0.5, y: 1.0 }}
                  style={[
                    styles.thirdMultiContainer
                    // isKeyboardViewed && styles.thirdMultiContainerActive
                  ]}
                />
                <LinearGradient
                  colors={["#62378B", "#62378B"]}
                  start={{ x: 1.0, y: 0.5 }}
                  end={{ x: 0.5, y: 1.0 }}
                  style={[
                    styles.secondMultiContainer
                    // isKeyboardViewed && styles.secondMultiContainerActive
                  ]}
                />
                <LinearGradient
                  colors={["#2A2A5A", "#A24ED4"]}
                  start={{ x: 0, y: -1 }}
                  end={{ x: 0, y: 1 }}
                  style={[
                    styles.firstMultiContainer
                    // isKeyboardViewed && styles.firstMultiContainerActive
                  ]}
                />
                <View style={styles.upiContainer}>
                  <TextInput
                    placeholder="Enter UPI ID"
                    style={{ flex: 1, color: "#fff" }}
                  />
                  <TouchableOpacity style={styles.upiButtonContainer}>
                    <Text style={styles.upiButtonText}>Verify</Text>
                  </TouchableOpacity>
                </View>
              </View>
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
            </View>
          )}
        </View>
      </ScrollView>
    );
  }
}

export default AddNewCard;
