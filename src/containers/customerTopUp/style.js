import { StyleSheet } from "react-native";
import Common from "../../common";
import color from "../../common/color";
const { Color, Config, Fonts } = Common;
const { dimensions, statusBarHeight } = Config;
export default StyleSheet.create({
  container: {
    width: dimensions.width,
    // height: dimensions.height,
    // justifyContent: "space-between",
    alignItems: "center"
    // paddingTop: dimensions.height * 0.01
  },
  containerActive: {},
  multiContainer: {
    paddingTop: statusBarHeight * 2,
    // backgroundColor: "red",
    width: dimensions.width,
    height: dimensions.height * 0.2,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
    alignContent: "flex-start",
    marginBottom: dimensions.height * 0.035
    // backgroundColor: "red"
  },

  headerContainer: {
    width: dimensions.width,
    height: dimensions.height * 0.2,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  backgroundContainer: {
    width: dimensions.width,
    height: dimensions.height * 0.35,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    zIndex: -1
  },
  firstMultiContainer: {
    elevation: 5,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: dimensions.height * 0.2,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    width: dimensions.width
  },

  secondMultiContainer: {
    elevation: 5,
    position: "absolute",
    left: 25,
    right: 0,
    top: 0,
    height: dimensions.height * 0.2 + 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    width: dimensions.width - 50,
    opacity: 0.3
  },
  thirdMultiContainer: {
    elevation: 5,
    position: "absolute",
    left: 50,
    opacity: 0.1,
    right: 0,
    top: 0,
    height: dimensions.height * 0.2 + 30,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    width: dimensions.width - 100
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",

    alignItems: "center",
    width: dimensions.width * 0.9,
    height: dimensions.height * 0.07
    // backgroundColor: "red"
  },
  headerTitle: {
    fontSize: 16,
    color: "#fff"
  },
  headerBottomContainer: {
    width: dimensions.width,
    height: dimensions.height * 0.12 - dimensions.width * 0.05,
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  },
  headerBottomFirstContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: dimensions.width * 0.9
  },
  headerBottomName: {
    fontSize: 16,
    color: "#fff"
  },
  headerBottomPrice: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold"
  },
  headerBottomButtonContainer: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10
  },
  headerLastContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    width: dimensions.width * 0.9
  },
  headerDaysContainer: { width: dimensions.width * 0.8 },
  headerDaysItem: {
    backgroundColor: "rgba(255,255,255,0.1)",
    width: "95%",
    paddingLeft: "5%",
    paddingRight: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: dimensions.height * 0.06,
    borderRadius: 5,
    marginBottom: 5
  },
  headerDaysText: {
    color: "#fff"
  },
  secondContainer: {
    width: dimensions.width * 0.8,
    height: dimensions.height * 0.25,
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  secondTitle: {
    fontSize: 18,
    color: "#53606F"
  },
  secondPriceContainer: {
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: "row"
  },
  secondPrice: {
    fontSize: 25,
    color: "#53606F"
  },
  hr: {
    width: dimensions.width * 0.8,
    height: 1,
    backgroundColor: "#53606F"
  },
  secondBottomContainer: {
    width: dimensions.width * 0.8,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start"
    // marginTop: 5
  },
  checkBox: {
    //
  },
  secondBottomInnerContainerTitle: {
    color: "#AFB8BB",
    fontSize: 12
  },
  secondBottomInnerContainerDescriptions: {
    color: "#53606F",
    fontSize: 14
  },
  thirdContainer: {
    width: dimensions.width * 0.8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: dimensions.height * 0.035,
    marginBottom: dimensions.height * 0.035
  },
  thirdTitle: {
    fontSize: 18,
    color: "#53606F",
    // marginBottom: 10
    marginBottom: dimensions.height * 0.035
  },
  itemContainer: {
    width: 150,
    height: 150,
    justifyContent: "space-evenly",
    alignItems: "center",
    marginRight: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#E0E9ED"
  },
  itemTopContainer: {},
  itemTopContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 130
  },
  thirdCompanyImage: {
    width: 40,
    height: 40,
    resizeMode: "contain"
  },
  itemBottomContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "90%"
  },
  itemCarText: {
    fontSize: 24,
    color: "#53606F"
  },
  itemAccountText: {
    fontSize: 16,
    color: "#AFB8BB",
    width: 130
  },
  checkBoxCircle: {
    width: 40,
    height: 40
  },
  nextButton: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    alignSelf: "center"
  },
  nextButtonContainerActive: {
    backgroundColor: "#FFA15D"
  },
  nextButtonContainer: {
    backgroundColor: "#E8E8E8",
    borderRadius: 100,
    padding: 20,
    elevation: 5,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignContent: "center",
    marginBottom: dimensions.height * 0.05
  },
  backgroundNumberContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: "25%",
    left: 0,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    // backgroundColor: "red",a
    opacity: 0.06
  },
  backgroundNumber: { fontSize: 100, color: "#647285", fontWeight: "bold" },
  OrContainer: {
    marginTop: 5,
    padding: 5,
    backgroundColor: "#F1F3F4",
    borderRadius: 100
  },
  Or: { color: "#AFB8BB", fontWeight: "bold" }
});
