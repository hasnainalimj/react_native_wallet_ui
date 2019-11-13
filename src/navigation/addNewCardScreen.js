import React, { Component } from "react";
import AddNewCard from "../containers/addNewCard";

class AddNewCardScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  render() {
    const { navigate } = this.props.navigation;
    return <AddNewCard navigate={navigate} />;
  }
}

export default AddNewCardScreen;
