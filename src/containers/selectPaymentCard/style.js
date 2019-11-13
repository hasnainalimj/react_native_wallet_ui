import { StyleSheet } from "react-native";
import Common from "../../common";
import color from "../../common/color";
const { Color, Config, Fonts } = Common;
const { dimensions, statusBarHeight } = Config;
export default StyleSheet.create({
  container: {
    width: dimensions.width,
    // height: dimensions.height,
    justifyContent: "flex-start",
    paddingBottom: dimensions.height * 0.02,
    alignItems: "center",
    paddingTop: statusBarHeight
  },
  multiContainer: {
    paddingTop: dimensions.width * 0.05,
    // backgroundColor: "red",
    width: dimensions.width * 0.9,
    height: dimensions.height * 0.3,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: dimensions.height * 0.1
  },
  multiContainerActive: {
    // height: dimensions.height * 0.25
  },
  firstMultiContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: dimensions.height * 0.25,
    borderRadius: 15,
    // borderBottomRightRadius: 15,
    width: dimensions.width * 0.9
  },
  secondMultiContainer: {
    position: "absolute",
    left: 25,
    right: 0,
    top: 0,
    height: dimensions.height * 0.25 + 15,
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
    height: dimensions.height * 0.25 + 30,
    borderRadius: 15,
    // borderBottomRightRadius: 15,
    width: dimensions.width * 0.9 - 100
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
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: dimensions.width,
    marginTop: dimensions.height * 0.02,
    marginBottom: dimensions.height * 0.02,
    borderBottomWidth: 1,
    paddingBottom: dimensions.height * 0.02,
    borderBottomColor: "rgba(0,0,0,0.11)"
    // elevation: 1
  },
  menuItemContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  menuImageContainer: {
    width: 50,
    height: 50,
    borderRadius: 100,
    // elevation: 2,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E0E9ED"
  },
  menuImage: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    tintColor: "#53606F"
  },
  menuText: { color: "#53606F", marginTop: 5 },
  menuImageContainerActive: {
    borderColor: "#FFA15D",
    elevation: 0
  },
  menuImageActive: {
    tintColor: "#FFA15D"
  },
  menuTextActive: {
    color: "#FFA15D",
    fontWeight: "bold"
  },
  cardsContainer: {
    width: dimensions.width * 0.95,
    alignItems: "center",
    justifyContent: "flex-start",
    position: "relative",
    marginTop: 10
  },
  cardContainerCompress: {
    height: dimensions.height * 0.56
    // height:"in",
  },
  cardItemContainerCompress: {
    height: dimensions.height * 0.08
  },
  cardItemContainer: {
    width: dimensions.width * 0.95
  },
  cardItemContainerSmall1: {
    width: dimensions.width * 0.9
  },
  cardItemContainerSmall2: {
    width: dimensions.width * 0.85
  },
  cardContainer: {
    width: dimensions.width * 0.95,
    height: dimensions.height * 0.4,
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: dimensions.width * 0.1
  },
  cardContainerSmall1: {
    width: dimensions.width * 0.9
  },
  cardContainerSmall2: {
    width: dimensions.width * 0.85
  },
  cardImageSmall1: {
    width: dimensions.width * 0.9
  },
  cardImageSmall2: {
    width: dimensions.width * 0.85
  },
  cardImage: {
    width: dimensions.width * 0.95,
    height: dimensions.height * 0.4,
    position: "absolute",
    top: 0,
    left: 0,
    resizeMode: "contain"
  },
  cardCheckbox: {
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 100,
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center"
  },
  cardCheckboxActive: {
    borderColor: "#FFA15D",
    backgroundColor: "#FFA15D"
  },
  cardBottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%"
  },
  cardBottomLeftContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  cardBottomRightContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  cardBottomLeftItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  cardTitle: {
    textTransform: "capitalize",
    color: "rgba(255,255,255,0.5)"
  },
  cardNumber: {
    fontSize: 25,
    color: "#fff"
  },
  cardSwitchTitle: {
    fontSize: 14,
    color: "#fff"
  },
  cardBottomIcon: {
    width: 14,
    height: 14,
    resizeMode: "contain",
    marginLeft: 10,
    marginRight: 5
  },
  cardBottomLeftItemText: {
    color: "#fff",
    fontSize: 14
  },
  addNewCardsContainer: {
    width: dimensions.width * 0.9,
    height: 60,
    position: "relative",
    justifyContent: "center",
    alignItems: "center"
  },
  addNewCardsText: {
    fontSize: 14,
    color: "#AFB8BB"
  },
  addNewCardsBackground: {
    width: dimensions.width * 0.9,
    height: 60,
    position: "absolute",
    top: 0,
    left: 0,
    resizeMode: "contain"
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
  nextButton: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    alignSelf: "center"
  },
  cardArrowContainer: {
    position: "absolute",
    right: 30,
    // top: 30,
    zIndex: 1000,
    backgroundColor: "#fff",
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100
  },
  netBankingSearchContainer: {
    width: dimensions.width * 0.9,
    height: 50,
    padding: 10,
    paddingHorizontal: 20,
    position: "relative",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  netBankingSearchBackground: {
    width: dimensions.width * 0.9,
    height: 50,
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10
  },
  netBankingSearchText: {
    color: "#fff"
  },
  netBankingContainer: {
    width: dimensions.width * 0.9,
    height: 50,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderWidth: 1,
    borderColor: "#E0E9ED",
    marginTop: 10
  },
  netBankingImage: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    marginRight: 10
  },
  netBankingText: {},
  upiContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "#fff",
    width: dimensions.width * 0.8,
    paddingBottom: 10,
    borderBottomWidth: 1
  },
  upiButtonContainer: {
    backgroundColor: "#FFA15D",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10
  },
  upiButtonText: {
    color: "#fff"
  },
  upi: {
    justifyContent: "space-between",
    alignItems: "center",
    height: dimensions.height * 0.5,
    paddingBottom: dimensions.height * 0.05
  }
});
