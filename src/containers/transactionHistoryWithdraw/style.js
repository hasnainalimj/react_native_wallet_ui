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
    alignItems: "center"
  },
  multiContainer: {
    // marginTop: statusBarHeight,
    // backgroundColor: "red",
    width: dimensions.width,
    height: dimensions.height * 0.2,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
    alignContent: "flex-start"
    // backgroundColor: "red"
  },
  backgroundContainer: {
    width: dimensions.width,
    height: dimensions.height * 0.2,
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
    height: dimensions.height * 0.15,
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
    height: dimensions.height * 0.15 + 15,
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
    height: dimensions.height * 0.15 + 30,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    width: dimensions.width - 100
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
    marginTop: 20
  },
  thirdTitle: {
    fontSize: 18,
    color: "#53606F",
    marginBottom: 10
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
  itemBottomContainer: {},
  itemCarText: {
    fontSize: 16,
    color: "#404553"
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
  nextButtonContainer: {
    backgroundColor: "#FFA15D",
    borderRadius: 100,
    padding: 20,
    elevation: 5,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignContent: "center",
    marginBottom: dimensions.height * 0.05
  }
});
