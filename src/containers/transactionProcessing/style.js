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
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: dimensions.width * 0.3,
    height: dimensions.width * 0.3,
    resizeMode: "contain"
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#503C7F",
    marginTop: 15,
    marginBottom: 10
  },
  desc: {
    color: "#53606F",
    width: dimensions.width * 0.6,
    textAlign: "center"
  }
});
