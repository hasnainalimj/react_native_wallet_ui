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
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingTop: statusBarHeight + dimensions.width * 0.05
  },
  thirdMultiContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    width: dimensions.width + 1,
    height: dimensions.height + 1
  },
  firstContainer: {
    justifyContent: "space-evenly",
    alignItems: "center",
    width: dimensions.width * 0.9,
    height: dimensions.height * 0.25
  },
  icon: {
    width: 90,
    height: 90,
    resizeMode: "contain"
  },
  firstDescription: {
    fontSize: 18,
    color: "#fff"
  },
  secondContainer: {
    width: dimensions.width * 0.85,
    height: dimensions.height * 0.5,
    backgroundColor: "#fff",
    borderRadius: 20,
    elevation: 5,
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  row: {
    flexDirection: "row",
    width: dimensions.width * 0.7,
    height: "19%",
    borderBottomWidth: 1,
    borderBottomColor: "#F1F3F4",
    alignItems: "center",
    justifyContent: "space-between"
  },
  profile: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    borderRadius: 100,
    marginRight: 5
  },
  heading: {
    color: "#53606F"
  },
  description: {
    color: "#53606F",
    fontWeight: "bold"
  },
  buttonContainer: {
    width: dimensions.width * 0.85,
    height: 65,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 16
  }
});
