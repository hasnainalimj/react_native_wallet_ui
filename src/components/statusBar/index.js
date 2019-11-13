import React from "react";
import { View } from "react-native";
import Common from "../../common";

const StatusBar = props => {
  return (
    <View
      style={{
        height: Common.Config.statusBarHeight || 0,
        width: Common.Config.dimensions.width,
        backgroundColor: Common.Color.statusBar
      }}
    />
  );
};

export default StatusBar;
