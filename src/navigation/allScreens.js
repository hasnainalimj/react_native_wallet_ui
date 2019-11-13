import React, { Component } from "react";
import All from "../containers/allScreens";

class AllScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "All Screens"
  });
  render() {
    const { navigate } = this.props.navigation;
    console.log("TCL: render -> this.props.navigation");
    return <All navigate={navigate} />;
  }
}

export default AllScreen;
