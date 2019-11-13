// All App Basic Configuration

import { Dimensions, StatusBar } from "react-native";

// Status Bar Height of Active Device
const statusBarHeight = StatusBar.currentHeight;

// Dimensions of Active Device
const dimensions = {
  width: Math.round(Dimensions.get("window").width),
  height: Math.round(Dimensions.get("window").height)
};

const baseUrl = "";

export default {
  statusBarHeight,
  dimensions,
  baseUrl
};
