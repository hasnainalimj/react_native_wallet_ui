import { StyleSheet } from "react-native";
import Common from "../../common";
import color from "../../common/color";
const { Color, Config, Fonts } = Common;
const { dimensions, statusBarHeight } = Config;
export default StyleSheet.create({
  container: {
    width: dimensions.width,
    // height: dimensions.height,
    justifyContent: "space-between",
    alignItems: "center"
  },
  multiContainer: {
    paddingTop: statusBarHeight,
    // backgroundColor: "red",
    width: dimensions.width,
    height: dimensions.height * 0.9,
    justifyContent: "space-between",
    alignItems: "center"
  },
  multiContainerActive: {
    height: dimensions.height * 0.7
  },
  firstMultiContainerActive: {
    height: dimensions.height * 0.65
  },
  secondMultiContainerActive: {
    height: dimensions.height * 0.65 + 15
  },
  thirdMultiContainerActive: {
    height: dimensions.height * 0.65 + 30
  },
  firstMultiContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: dimensions.height * 0.85,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    width: dimensions.width
  },
  secondMultiContainer: {
    position: "absolute",
    left: 25,
    right: 0,
    top: 0,
    height: dimensions.height * 0.85 + 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    width: dimensions.width - 50,
    opacity: 0.3
  },
  thirdMultiContainer: {
    position: "absolute",
    left: 50,
    opacity: 0.1,
    right: 0,
    top: 0,
    height: dimensions.height * 0.85 + 30,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    width: dimensions.width - 100
  },
  profileContainer: {
    marginTop: dimensions.width * 0.05,
    width: dimensions.width * 0.9,
    // backgroundColor: "#fff",
    borderRadius: 50,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    padding: 10
  },
  profile: {
    width: 55,
    height: 55,
    resizeMode: "contain",
    borderRadius: 100,
    marginRight: 10
  },

  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff"
  },
  profileEmail: {
    fontSize: 16,
    fontWeight: "100",
    color: "#fff"
  },
  myWalletContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    width: dimensions.width * 0.8
  },
  myWalletText: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 10
    // fontWeight: "bold"
  },
  myWalletPriceContainer: {
    flexDirection: "row",
    marginBottom: 10
    // marginTop: 10
  },
  superScript: {
    alignSelf: "flex-start",
    alignContent: "flex-start",
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold"
  },
  pice: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff"
  },
  myWalletHistoryContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    marginRight: 5,
    width: 14,
    height: 14,
    resizeMode: "contain"
  },
  transactionText: {
    fontSize: 14,
    color: "#fff"
    // fontWeight: "bold"
  },
  nextButtonContainer: {
    backgroundColor: "#FFA15D",
    borderRadius: 1000,
    padding: 20,
    elevation: 5,
    width: 80,
    height: 80,
    justifyContent: "center",
    alignContent: "center"
  },
  nextButtonContainerActive: {
    marginBottom: 50
  },
  bottomText: {
    color: "#53606F"
  },
  firstContainer: {
    alignSelf: "flex-end",
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  close: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    tintColor: "#fff",
    alignSelf: "flex-end"
  },
  nextButton: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    alignSelf: "center"
  },
  error: {
    alignSelf: "center",
    color: "#FF4E64",
    marginTop: 10
  }
});
