import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/store";
import Navigation from "./src/navigation";
import StatusBar from "./src/components/statusBar";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {/* <StatusBar /> */}
        <Navigation />
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
