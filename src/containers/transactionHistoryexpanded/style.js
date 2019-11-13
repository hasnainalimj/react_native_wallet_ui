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
    alignItems: "center",
    paddingTop: dimensions.height * 0.35 - dimensions.height * 0.275
  },
  containerActive: {
    paddingTop: dimensions.height * 0.5 - dimensions.height * 0.42
  },
  multiContainer: {
    paddingTop: statusBarHeight * 2,
    // backgroundColor: "red",
    width: dimensions.width,
    height: dimensions.height * 0.275,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
    alignContent: "flex-start"
    // backgroundColor: "red"
  },

  headerContainer: {
    width: dimensions.width,
    height: dimensions.height * 0.275,
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
    height: dimensions.height * 0.275,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    width: dimensions.width
  },
  firstMultiContainerActive: {
    height: dimensions.height * 0.42
  },
  secondMultiContainerActive: {
    height: dimensions.height * 0.42 + 15
  },
  thirdMultiContainerActive: {
    height: dimensions.height * 0.42 + 30
  },
  multiContainerActive: {
    height: dimensions.height * 0.42,
    paddingTop: dimensions.height * 0.05,
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  secondMultiContainer: {
    elevation: 5,
    position: "absolute",
    left: 25,
    right: 0,
    top: 0,
    height: dimensions.height * 0.275 + 15,
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
    height: dimensions.height * 0.275 + 30,
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
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold"
  },
  headerBottomButtonContainer: {
    backgroundColor: "#FFA15D",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5
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
  arrow: {
    justifyContent: "center",
    alignItems: "center",
    height: dimensions.height * 0.06
  },
  bottom: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: dimensions.width * 0.9
  },
  heading: {
    color: "#53606F",
    fontSize: 16
  },
  itemContainer: {
    borderWidth: 1,
    borderRadius: 10,
    // elevation: 1,
    borderColor: "#E0E9ED",
    width: "100%",
    flexDirection: "row",
    padding: 10,
    marginTop: 10
  },
  profile: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    borderRadius: 100,
    marginRight: 10
  },
  centerContainer: {
    flexGrow: 1,
    justifyContent: "space-evenly",
    alignItems: "flex-start"
  },
  centerTitle: {
    color: "#404553",
    fontSize: 16
  },
  centerTime: {
    color: "#AFB8BB",
    fontSize: 14
  },
  centerAmountActive: {
    color: "#0EC069"
  }
});
