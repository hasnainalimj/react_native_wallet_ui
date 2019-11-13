import React, { Component } from "react";
import Camera from "../containers/camera";

class CameraScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  render() {
    const { navigate } = this.props.navigation;
    console.log("TCL: render -> this.props.navigation");
    return <Camera navigate={navigate} />;
  }
}

export default CameraScreen;
