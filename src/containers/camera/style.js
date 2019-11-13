import { StyleSheet } from "react-native";
import Common from "../../common";
import color from "../../common/color";
const { Color, Config, Fonts } = Common;
const { dimensions, statusBarHeight } = Config;
export default StyleSheet.create({
  camera: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  blockBlurContainer: {
    width: dimensions.width,
    height: dimensions.height,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    justifyContent: "space-between",
    alignItems: "center"
  },
  blockBlur: {
    width: dimensions.width,
    height: dimensions.height * 0.34,
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  centerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  centerLeft: {
    width: dimensions.width * 0.2,
    height: dimensions.height * 0.34,
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  center: {
    width: dimensions.width * 0.6,
    height: dimensions.height * 0.333
  }
});
