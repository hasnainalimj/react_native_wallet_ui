import { StyleSheet } from "react-native";
import Common from "../../common";
import color from "../../common/color";
const { Color, Config, Fonts } = Common;
const { dimensions, statusBarHeight } = Config;
export default StyleSheet.create({
  container: {
    width: dimensions.width,
    height: dimensions.height,
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: statusBarHeight
  },
  multiContainer: {
    paddingTop: dimensions.width * 0.05,
    // backgroundColor: "red",
    width: dimensions.width * 0.9,
    height: dimensions.height * 0.4,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  multiContainerActive: {
    // height: dimensions.height * 0.35
  },
  firstMultiContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: dimensions.height * 0.35,
    borderRadius: 15,
    // borderBottomRightRadius: 15,
    width: dimensions.width * 0.9
  },
  secondMultiContainer: {
    position: "absolute",
    left: 25,
    right: 0,
    top: 0,
    height: dimensions.height * 0.35 + 15,
    borderRadius: 15,
    // borderBottomRightRadius: 15,
    width: dimensions.width * 0.9 - 50,
    opacity: 0.3
  },
  thirdMultiContainer: {
    position: "absolute",
    left: 50,
    opacity: 0.1,
    right: 0,
    top: 0,
    height: dimensions.height * 0.35 + 30,
    borderRadius: 15,
    // borderBottomRightRadius: 15,
    width: dimensions.width * 0.9 - 100
  },
  profileContainer: {
    marginTop: dimensions.width * 0.05,
    width: dimensions.width * 0.9,
    backgroundColor: "#fff",
    borderRadius: 50,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    padding: 10
  },
  profile: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    borderRadius: 100,
    marginRight: 10
  },

  profileName: {
    fontSize: 14,
    fontWeight: "100"
  },
  profileEmail: {
    fontSize: 12,
    fontWeight: "100"
  },
  myWalletContainer: { justifyContent: "center", alignItems: "center" },
  myWalletText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold"
  },
  myWalletPriceContainer: {
    flexDirection: "row"
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
    fontSize: 65,
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
    width: 60,
    height: 60,
    justifyContent: "center",
    alignContent: "center"
  },
  bottomText: {
    color: "#53606F"
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: dimensions.width * 0.05,
    width: dimensions.width
  },
  headerTitle: {
    fontSize: 16,
    color: "#53606F"
  },
  cardContainer: {
    height: dimensions.height * 0.35 - dimensions.width * 0.1,
    borderRadius: 15,
    // borderBottomRightRadius: 15,
    width: dimensions.width * 0.8,
    // backgroundColor: "red",
    justifyContent: "space-evenly",
    alignItems: "flex-start"
  },
  cardInput: {
    borderBottomColor: "#FFFFFF",
    borderBottomWidth: 1,
    width: dimensions.width * 0.75
  },
  cardCenterContainer: {
    width: dimensions.width * 0.75,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  cardCheckboxContainer: {
    width: dimensions.width * 0.75,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  }
});
