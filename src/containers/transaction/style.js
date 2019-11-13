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
    padding: dimensions.width * 0.05,
    justifyContent: "flex-start",
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
    alignItems: "center",
    marginTop: dimensions.height * 0.02
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
  }
});
