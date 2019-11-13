import { StyleSheet } from "react-native";
import Common from "../../common";
import color from "../../common/color";
const { Color, Config, Fonts } = Common;
const { dimensions, statusBarHeight } = Config;
export default StyleSheet.create({
  //
  container: {
    width: dimensions.width,
    height: dimensions.height,
    // paddingTop: dimensions.width * 0.05,
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: statusBarHeight + dimensions.width * 0.05
  },
  firstContainer: {
    alignSelf: "flex-end",
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  close: {
    width: 20,
    height: 20,
    resizeMode: "contain"
  },
  secondContainer: {
    justifyContent: "center",
    alignItems: "center"
    // marginTop: dimensions.height * 0.02
  },
  pizzaContainer: {
    padding: 2.5,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#AFB8BB"
  },
  pizza: {
    width: 60,
    height: 60,
    resizeMode: "contain"
  },
  thirdContainer: {
    marginTop: dimensions.height * 0.02
  },
  thirdText: {
    width: dimensions.width * 0.7,
    fontSize: 20,
    color: "#202526",
    textAlign: "center"
  },
  fourthContainer: {
    marginTop: dimensions.height * 0.1
  },
  fourthText: {
    fontSize: 14,
    color: "#53606F",
    textAlign: "center"
  },
  numberContainer: {
    marginTop: dimensions.height * 0.02,
    width: dimensions.width * 0.8,
    height: 65,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    elevation: 5
  },
  thirdMultiContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
    width: "100%",
    borderRadius: 10
  },
  number: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold"
  },
  profileContainer: {
    // marginTop: dimensions.width * 0.05,
    width: dimensions.width * 0.9,
    backgroundColor: "#fff",
    borderRadius: 50,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    padding: 10
  },
  profile: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    borderRadius: 100
    // marginRight: 10
  },
  profileBorder: {
    width: 55,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    marginRight: 10,
    borderWidth: 5,
    borderColor: "#53606F"
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#53606F"
  },
  profileEmail: {
    fontSize: 16,
    fontWeight: "100",
    color: "#53606F"
  },
  passcodeContainer: {
    marginTop: dimensions.height * 0.05,
    alignItems: "center",
    justifyContent: "center"
  },
  passcodeText: {
    color: "#53606F",
    fontSize: 18
  },
  radioContainer: {
    width: 20,
    height: 20,
    backgroundColor: "#FFA15D",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  radioInactiveContainer: {
    backgroundColor: "#E8EDEF"
  },
  radioInner: {
    width: 10,
    height: 10,
    backgroundColor: "#fff",
    borderRadius: 100
  },
  mainContainer: {
    marginTop: dimensions.width * 0.05,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: dimensions.width * 0.5
  },
  calculatorContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    width: dimensions.width
  },
  firstMultiContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
    width: dimensions.width
  },
  col: {
    width: dimensions.width * 0.33333333333333336,
    alignItems: "center",
    justifyContent: "center",
    height: dimensions.height * 0.6 * 0.2,
    backgroundColor: "rgba(255,255,255,0.05)"
  },
  colText: {
    fontSize: 30,
    color: "#fff"
    // fontWeight: "bold"
  },
  nextButtonContainer: {
    backgroundColor: "#FFA15D",
    borderRadius: 100,
    padding: 20,
    elevation: 5,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignContent: "center"
  },
  nextButton: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    alignSelf: "center"
  }
});
