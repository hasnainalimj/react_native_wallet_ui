import React, { Component } from "react";
import { View, Text } from "react-native";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";
import { BlurView } from "expo-blur";

import styles from "./style";

class CameraApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back
    };
  }
  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }
  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <Camera
          style={styles.camera}
          type={this.state.type}
          onCameraReady={this._animate}
        >
          <View style={styles.blockBlurContainer}>
            <View style={styles.blockBlur}></View>
            <View style={styles.centerContainer}>
              <View style={styles.centerLeft}></View>
              <View style={styles.center}></View>
              <View style={styles.centerLeft}></View>
            </View>
            <View style={styles.blockBlur}></View>
          </View>
        </Camera>
      );
    }
  }
}

export default CameraApp;
